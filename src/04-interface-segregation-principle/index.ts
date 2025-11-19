import { MultiFunctionPrinter } from "./clases/MultiFunctionPrinter";
import { SimplePrinter } from "./clases/SimplePrinter";

export function demoISP(): void {
  const simplePrinter = new SimplePrinter();
  const multiDevice = new MultiFunctionPrinter();

  console.log("---- Impresora simple ----");
  simplePrinter.print();

  console.log("---- Impresora multifunción ----");
  multiDevice.print();
  multiDevice.scan();
  multiDevice.fax();
}

// Ejecución de demo cuando se ejecuta el módulo directamente
demoISP();
