import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board, Column, Task } from './models';
import { ColumnService } from './services/column.service';
import { TaskService } from './services/task.service';

@Component({
  selector: 'ngk-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public board: Board = new Board('Test Board', []);
  boardColumnIds: string[] = [];

  constructor(
    private _columnService: ColumnService,
    private _taskService: TaskService
  ) {}

  ngOnInit(): void {
    this._populateBoard();
    this._populateColumns();
  }

  public createNewTask(newTask: Task): void {
    const { id, ...task } = newTask;

    this._taskService
      .createOne(task)
      .then((data) => {
        console.log('data', data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  public dropGrid(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(
      this.board.columns,
      event.previousIndex,
      event.currentIndex
    );
  }

  public drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      // Revert back to initial column
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Move to new column
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const movedTask: Task = {
        ...event.container.data[event.currentIndex],
        columnId: event.container.id,
      };

      this._updateTask(movedTask);
    }
  }

  private _populateBoard(): void {
    if (this.board?.columns?.length === 0) {
      this._columnService.getAll().subscribe((columns: Column[]) => {
        this.board.columns = columns.map((c: Column) => ({
          ...c,
          tasks: [],
        }));
        this.boardColumnIds = columns.map((col: Column) => col.id);
      });
    }
  }

  private _populateColumns(): void {
    this._taskService.getAll().subscribe((tasks: Task[]) => {
      this.board?.columns?.forEach((c: Column) => {
        const columnTasks = tasks.filter((t: Task) => c.id === t.columnId);
        c.tasks = columnTasks;
      });
    });
  }

  private _updateTask(task: Task): void {
    this._taskService.updateOne(task);
  }
}
