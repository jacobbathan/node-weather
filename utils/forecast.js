const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/70bfc6a62dad2e2d4636d3ceced74bee/' +
    latitude +
    ',' +
    longitude;

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback('unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        temperature: response.body.currently.temperature,
        rainChance: response.body.currently.precipProbability,
        summary: response.body.daily.data[0].summary,
      });
    }
  });
};

module.exports = forecast
