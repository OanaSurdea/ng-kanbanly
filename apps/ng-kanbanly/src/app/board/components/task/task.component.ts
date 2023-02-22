import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'ngk-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() item: Task | null = null;
  @Input() placeholder: string | null = null;
  @Input() isNewTask: boolean = false;

  @Output() titleCanceled: EventEmitter<null> = new EventEmitter();
  @Output() titleEdited: EventEmitter<string> = new EventEmitter();

  cancel(): void {
    this.titleCanceled.emit();
  }

  save(): void {
    this.titleEdited.emit(this.item?.title);
  }
}
