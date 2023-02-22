import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Column, Task } from '../../models';

@Component({
  selector: 'ngk-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() column: Column | null = null;
  @Input() boardColumnIds: string[] = [];
  @Input() placeholder: string | null = null;

  newTask: Task | null = null;

  @Output() dropped: EventEmitter<CdkDragDrop<Task[]>> = new EventEmitter();
  @Output() newTaskCreated: EventEmitter<Task> = new EventEmitter();

  handleCdkDropListDropped(event: CdkDragDrop<Task[]>): void {
    this.dropped.emit(event);
  }

  handleTaskTitleCanceled(): void {
    this.newTask = null;
  }

  handleTaskTitleEdited(newTitle: string): void {
    this.newTaskCreated.emit(new Task(newTitle, ''));
    this.newTask = null;
  }

  initNewTask(): void {
    this.newTask = new Task('', '');
  }

  reset(): void {
    this.newTask = null;
  }
}
