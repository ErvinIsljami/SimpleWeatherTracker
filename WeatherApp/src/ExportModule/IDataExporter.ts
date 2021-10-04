import { WeatherExportModel } from "../DataModels/WeatherExportModel";

export interface IDataExporter{
    Export(data: WeatherExportModel): void;
}