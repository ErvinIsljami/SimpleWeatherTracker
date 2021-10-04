import { create } from "domain";
import { FSWatcher } from "fs";
import { WeatherExportModel } from "../../DataModels/WeatherExportModel";
import { IDataExporter } from "../IDataExporter";

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

export class CSVDataExporter implements IDataExporter {
    private fileName: string;
    private csvWriter: any;

    constructor() {
        const currentDate = new Date();
        this.fileName = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}-${currentDate.getHours()}.csv`;
        this.csvWriter = createCsvWriter({
            path: this.fileName,
            append: true,
            encoding: "utf8",
            header: [
                {id: 'locationName', title: 'locationName'},
                {id: 'weather', title: 'weather'},
                {id: 'temp_current', title: 'temp_current'},
                {id: 'temp_min', title: 'temp_min'},
                {id: 'temp_max', title: 'temp_max'},
                {id: 'pressure', title: 'pressure'},
                {id: 'humidity', title: 'humidity'},
                {id: 'timeStamp', title: 'timeStamp'}
            ]
        });
     }

    Export(data: WeatherExportModel): void {
        this.csvWriter.writeRecords([data]).catch(() => {
            console.log('Error while writing to file: ');
        });
    }
}