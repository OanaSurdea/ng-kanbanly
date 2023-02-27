import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Column, Task } from '../../models';

@Component({
  selector: 'ngk-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnChanges {
  @Input() column: Column | null = null;
  @Input() boardColumnIds: string[] = [];
  @Input() placeholder: string | null = null;

  showNewTask: boolean = false;
  newTask: Task | null = null;

  @Output() dropped: EventEmitter<CdkDragDrop<Task[]>> = new EventEmitter();
  @Output() newTaskCreated: EventEmitter<Task> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['column'].currentValue) {
      this.newTask = new Task('', '', changes['column'].currentValue.id);
    }
  }

  handleCdkDropListDropped(event: CdkDragDrop<Task[]>): void {
    this.dropped.emit(event);
  }

  handleTaskTitleCanceled(): void {
    this.showNewTask = false;
  }

  handleTaskTitleEdited(newTitle: string): void {
    if (this.column?.id) {
      this.newTaskCreated.emit(new Task(newTitle, '', this.column.id));
      this.newTask = new Task('', '', this.column.id);
    }
  }

  initNewTask(): void {
    this.showNewTask = true;
  }

  reset(): void {
    this.showNewTask = false;
  }
}
