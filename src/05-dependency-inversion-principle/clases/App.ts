import { IDatabase } from "../interfaces/IDatabase";

export class App {
  constructor(private database: IDatabase) {}

  start(): void {
    this.database.connect();
  }
}
