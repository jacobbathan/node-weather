const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

forecast(-75.7088, 44.1415, (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});

geocode('Philadelphia', (error, data) => {
  console.log('Error:', error);
  console.log('Data:', data);
});
