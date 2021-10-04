#!/usr/bin/env node
import { exit } from "process";
import { IWeatherDataProvider } from "./DataProviders/IWheatherDataProvider";
import { OwmDataProvider } from "./DataProviders/OwmImpl/OwmDataProvider";
import { CSVDataExporter } from "./ExportModule/CSVDataExporter/CSVDataExporter";
import { IDataExporter } from "./ExportModule/IDataExporter";
import { Constants } from "./Utils/Constants";
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

program
  .version('1.0.0')
  .description("Simple project demo for weather tracker app")
  .option('-l, --locations <type>', 'List of locations seperated by \',\'')
  .option('-t, --interval <type>', `Interval for data fetching (max ${Constants.MAX_API_CALLS} API calls/minute)`)
  .parse(process.argv);

require('dotenv').config();
  
const options = program.opts();
const listOfLocations: string[]  = options.locations.split(',');
const interval: number = options.interval;
let dataExporter: IDataExporter = new CSVDataExporter();
let currentHour = new Date().getHours();

console.log(
  chalk.green(
    figlet.textSync(Constants.APPLICATION_NAME, { horizontalLayout: 'full' })
  )
);

if(!options.locations || !options.interval) {
  program.outputHelp();
  exit();
}

const numberOfApiCalls = listOfLocations.length * (60000 / interval);
const minIntervalForGivenList = listOfLocations.length *60000 / Constants.MAX_API_CALLS;

if(numberOfApiCalls > Constants.MAX_API_CALLS) {
  program.outputHelp();
  exit();
}

setInterval(() => {
  const newHour = new Date().getHours();
  if(currentHour != newHour)
  {
    currentHour = newHour;
    dataExporter = new CSVDataExporter();
  }

  for (const location of listOfLocations) {
    const dataProvider: IWeatherDataProvider = new OwmDataProvider();
    dataProvider.GetDataForLocation(location).subscribe(data => {
      dataExporter.Export(data);
    });
  }
}, interval);