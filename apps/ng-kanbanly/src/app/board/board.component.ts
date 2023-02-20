import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Board, Column, Task } from './models';

@Component({
  selector: 'ngk-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  public board: Board = new Board('Test Board', [
    new Column('To Do', 'TODO_COLUMN', [
      new Task('Get to work', 'Use terraform'),
      new Task('Pick up groceries', ''),
      new Task('Go home', ''),
      new Task('Fall asleep', ''),
    ]),
    new Column('Doing', 'DOING_COLUMN', [new Task('Walk dog', '')]),
    new Column('Done', 'DONE_COLUMN', [
      new Task('Get up', ''),
      new Task('Brush teeth', ''),
      new Task('Take a shower', ''),
      new Task('Check e-mail', ''),
    ]),
  ]);

  boardColumnIds: string[] = ['TODO_COLUMN', 'DOING_COLUMN', 'DONE_COLUMN'];

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
