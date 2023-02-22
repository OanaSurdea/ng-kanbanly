import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Board, Column, Task } from './models';
import { TaskService } from './services/task.service';

@Component({
  selector: 'ngk-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  public board: Board = new Board('Test Board', [
    new Column('To Do', 'TODO_COLUMN', []),
    // new Task('Walk dog', '')
    // new Task('Get up', ''),
    // new Task('Brush teeth', ''),
    // new Task('Take a shower', ''),
    // new Task('Check e-mail', ''),
    new Column('Doing', 'DOING_COLUMN', []),
    new Column('Done', 'DONE_COLUMN', []),
  ]);

  boardColumnIds: string[] = ['TODO_COLUMN', 'DOING_COLUMN', 'DONE_COLUMN'];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getAll().subscribe((tasks: Task[]) => {
      console.log('t', tasks);
      this.board.columns[0].tasks = tasks;
    });
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
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
