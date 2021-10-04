export class WeatherInputModel {
    public coord: any;
    public weather: any;
    public base: string;
    public main: any;
    public visibility: number;
    public wind: any;
    public clouds: any;
    public dt: number;
    public sys: any;
    public timezone: number;
    public id: number;
    public name: string;
    public cod: number;

    constructor() {
        this.base = "";
        this.visibility = 0;
        this.dt = 0;
        this.timezone = 0;
        this.id = 0;
        this.name = "";
        this.cod = 0;
    }
}