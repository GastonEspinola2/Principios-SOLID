import { ReportFile } from "./clases/Report";
import { ReportarPrinter } from "./clases/ReportarPrinter";
import { saveReport } from "./clases/ReportSaver";

export function crearImprimirYGuardarReporte() {
    const reporte = new ReportFile("Titulo Reportable", "Contenido Reportable");
    ReportarPrinter.printReport(reporte);
    saveReport.saveToFile(reporte);
    return reporte;
}