import { IFax } from "../interfaces/IFax";
import { IPrinter } from "../interfaces/IPrinter";
import { IScanner } from "../interfaces/IScanner";

export class MultiFunctionPrinter implements IPrinter, IScanner, IFax {
  print(): void {
    console.log("Imprimiendo documento desde multifunción...");
  }

  scan(): void {
    console.log("Escaneando documento...");
  }

  fax(): void {
    console.log("Enviando fax...");
  }
}
