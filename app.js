const request = require('request');

const url =
  'https://api.darksky.net/forecast/70bfc6a62dad2e2d4636d3ceced74bee/37.8267,-122.4233';

request({url: url, json: true}, (error, response) => {
  const temp = response.body.currently.temperature;
  const rainChance = response.body.currently.precipProbability;
  // console.log(response.body.currently);
  console.log(response.body.daily.data[0].summary);
  console.log('It is currently ' + temp + ' degrees outside.');
  console.log('There is a ' + rainChance + '% chance of rain today.');
});
