export class Task {
  constructor(
    public title: string,
    public description: string,
    public columnId: string,
    public id?: string
  ) {}
}
