# Simple Weather Tracker
Back end demo project

Write a small demo application for tracking weather changes through time on a set of
locations. The application should take a list of locations as arguments on the command
line when starting up together with a time interval on which to poll for data. When it
fetches the latest weather data it should write it to csv files named like
YEAR/MONTH/DAY/HOUR.csv. Pick five or six fields from the weather data to save,
those which make the most sense to you.

    - The data API is at this url, registration is free and it provides the API key needed
      to consume it.
    - There is a choice of language between Python and Typescript on Nodejs.
    - Use any library, framework or a boilerplate project which would help in
      development.
    - Provide the finished project on GitHub.
    - There are no time constraints, finish the project at your own pace.

If there is some requirement which is unclear, feel free to make an assumption and
continue the development. It would be good to document any assumptions made during
development.

## Bulding
For the program to run you need nodejs installed. 
NodeJS version used: v14.18.0.
First install dependecies with 'npm install'. Now you can build with 'npm run build'.
After building the project under the folder lib can be found all of the compiled scripts.

## Runing
The program needs two parameters provided via command line arguments.
    - list of location separated with commas
    - time interval in milliseconds
Example: node lib/index.js -l Belgrade,Paris,Boston -t 3000.