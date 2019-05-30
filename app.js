const request = require('request');
const geocode = require('./utils/geocode')
//const url =
//  'https://api.darksky.net/forecast/70bfc6a62dad2e2d4636d3ceced74bee/37.8267,-122.4233';
//
//const mapboxKey =
//  'pk.eyJ1IjoiamFjb2JiYXRoYW4iLCJhIjoiY2p3OGtlcG1lMDExYzN5cWpidXl4cjVsZiJ9.Kzxk9L0GScRASwdtR4SAgA';
//
//request({url: url, json: true}, (error, response) => {
//  if (error) {
//    console.log('unable to connect to weather service');
//  } else if (response.body.error) {
//    console.log('Unable to find location');
//  } else {
//    const temp = response.body.currently.temperature;
//    const rainChance = response.body.currently.precipProbability;
//    console.log(response.body.daily.data[0].summary);
//    console.log('It is currently ' + temp + ' degrees outside.');
//    console.log('There is a ' + rainChance + '% chance of rain today.');
//  }
//});
//
//request({url: mapBoxUrl, json: true}, (error, response) => {
//  if (error) {
//    console.log('Unable to access geocoding location');
//  } else if (response.body.features.length === 0) {
//    console.log('Unable to geocode location');
//  } else {
//    const latitude = response.body.features[0].center[1];
//    const longitude = response.body.features[0].center[0];
//    console.log('Coordinates: ' + latitude + ' ' + longitude);
//  }
//});

geocode('Barcelona', (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});
