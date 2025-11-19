import { IReport } from "../interfaces/IReport";

export class ReportFile implements IReport {
  constructor(public title: string, public content: string) {}
}