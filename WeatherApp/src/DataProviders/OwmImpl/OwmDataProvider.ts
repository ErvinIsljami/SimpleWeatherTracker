import { Observable, Subject } from "rxjs";
import { WeatherExportModel } from "../../DataModels/WeatherExportModel";
import { IWeatherDataProvider } from "../IWheatherDataProvider";
import { WeatherInputModel } from "./OwmInputModel";

const http = require('http');

export class OwmDataProvider implements IWeatherDataProvider {
    private _weatherData$: Subject<WeatherExportModel>;

    constructor(){
        this._weatherData$ = new Subject<WeatherExportModel>();
    }

    public GetDataForLocation(location: string): Observable<WeatherExportModel> {
        const options = {
            host: 'api.openweathermap.org',
            method: 'GET',
            path: `/data/2.5/weather?q=${location}&appid=${process.env.API_KEY}&units=metric`,
            headers: {
                'Content-Type': 'application/json'
              }
        };

        const request = http.request(options, (res: any) => {
            res.setEncoding('utf8');
            res.on('data', (par: string) => {
                let param: WeatherInputModel = JSON.parse(par);
                let retVal = new WeatherExportModel();
                retVal.humidity = param.main['humidity'];
                retVal.locationName = param.name;
                retVal.weather = param.weather[0]['description'];
                retVal.temp_current = param.main['temp'];
                retVal.temp_min = param.main['temp_min'];
                retVal.temp_max = param.main['temp_max'];
                retVal.pressure = param.main['pressure'];

                this._weatherData$.next(retVal);
            });
        }).end();
        return this._weatherData$;
    }
}
