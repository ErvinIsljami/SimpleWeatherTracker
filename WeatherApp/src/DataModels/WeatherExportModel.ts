export class WeatherExportModel {
    public locationName: string;
    public weather: string;
    public temp_current: number;
    public temp_min: number;
    public temp_max: number;
    public pressure: number;
    public humidity: number;
    public timeStamp: number;

    constructor() {
        this.locationName = "";
        this.weather = "";
        this.temp_current = 0;
        this.temp_max = 0;
        this.temp_min = 0;
        this.pressure = 0;
        this.humidity = 0;
        this.timeStamp = new Date().getTime();
    }
}