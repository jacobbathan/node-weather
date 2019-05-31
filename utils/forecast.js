const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/70bfc6a62dad2e2d4636d3ceced74bee/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, {
        temperature: body.currently.temperature,
        rainChance: body.currently.precipProbability,
        summary: body.daily.data[0].summary
      });
    }
  });
};

module.exports = forecast;
