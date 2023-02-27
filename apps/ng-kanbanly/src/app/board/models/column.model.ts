import { Task } from './task.model';

export class Column {
  constructor(
    public label: string,
    public key: string,
    public tasks: Task[],
    public index: number,
    public id: string
  ) {}
}
