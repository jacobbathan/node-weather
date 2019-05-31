const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Accept location via command line argument
//
//
//Access command line argument without yargs
//use string valuse as input for geocode
//only geocode if location was provided
//test work with some locations



geocode(process.argv[2], (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
      // console.log(process.argv[2])
      console.log(data.location)
      console.log(forecastData)
  });
});
