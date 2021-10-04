import { Observable } from "rxjs";
import { WeatherExportModel } from "../DataModels/WeatherExportModel";

export interface IWeatherDataProvider {
    GetDataForLocation(location: string) : Observable<WeatherExportModel>;
}