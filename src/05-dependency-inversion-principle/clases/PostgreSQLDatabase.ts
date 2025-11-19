import { IDatabase } from "../interfaces/IDatabase";

export class PostgreSQLDatabase implements IDatabase {
  connect(): void {
    console.log("Conectado a PostgreSQL");
  }
}
