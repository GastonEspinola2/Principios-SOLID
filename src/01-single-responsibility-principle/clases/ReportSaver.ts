import { ReportFile } from "./Report";

export class saveReport{
    static saveToFile(reporte:ReportFile) {
        console.log(`Guardando reporte en archivo...${reporte.title} y ${reporte.content}`);
  }
}