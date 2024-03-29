'use strict';
let WEATHER_API_KEY = process.env.WEATHER_API_KEY
let cache = require('./ceche.js');
const axios = require('axios');
module.exports = getWeather;
getWeather(30, 35)
function getWeather(latitude, longitude) {
  const key = 'weather-' + latitude + longitude;
  const url = `http://api.weatherbit.io/v2.0/forecast/daily/?key=${WEATHER_API_KEY}&lang=en&lat=${latitude}&lon=${longitude}&days=5`;

  if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
    console.log('Cache hit');
  } else {
    console.log('Cache miss');
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
    .then(response => parseWeather(response.data));
  }
  
  return cache[key].data;
}
let weatherSummaries = {};
function parseWeather(weatherData) {
  try {
     weatherSummaries = weatherData.data.map(day => {
      return new Weather(day);
    });
    
    console.log(weatherSummaries)

    return Promise.resolve(weatherSummaries);
  } catch (e) {
    return Promise.reject(e);
  }
}

class Weather {
  constructor(day) {
    this.forecast = day.weather.description;
    this.time = day.datetime;
  }
}


// 'use strict';



// class Forecasts {
//     constructor(data, description) {
//         this.data = data;
//         this.description = description;
//     }


// }


// module.exports=Forecasts 