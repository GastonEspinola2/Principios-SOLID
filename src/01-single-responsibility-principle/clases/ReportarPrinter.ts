import { ReportFile } from "./Report";

export class ReportarPrinter{
    static printReport(reporte: ReportFile) {
        console.log(`Imprimiendo reporte: ${reporte.title}`);
  }
}