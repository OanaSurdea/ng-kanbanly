import { Component, Input } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'ngk-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() item: Task | null = null;
  @Input() placeholder: string | null = null;

  constructor() {}
}
