const request = require('request')

const geocode = (address, callback) => {
  const mapBoxUrl =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiamFjb2JiYXRoYW4iLCJhIjoiY2p3OGtlcG1lMDExYzN5cWpidXl4cjVsZiJ9.Kzxk9L0GScRASwdtR4SAgA&limit=1';

  request({url: mapBoxUrl, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location, try another search');
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode
