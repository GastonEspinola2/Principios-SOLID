import { App } from "./clases/App";
import { MySQLDatabase } from "./clases/MySQLDatabase";
import { PostgreSQLDatabase } from "./clases/PostgreSQLDatabase";

export function demoDIP(): void {
  const mysqlApp = new App(new MySQLDatabase());
  mysqlApp.start();

  const postgresApp = new App(new PostgreSQLDatabase());
  postgresApp.start();
}

// Ejecución de demo cuando se ejecuta el módulo directamente
demoDIP();
