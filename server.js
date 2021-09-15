'use strict';
const express = require('express');
const app = express(); // class that create a new API
const weatherData = require('./data/weather.json');
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('hello');
});

app.get('/weather', (req, res) => {
    // define and get the query parameters
    let lat = Number(req.query.lat);
    let lon = Number(req.query.lon);
    let searchQuery = req.query.searchQuery;

    // after getting the parameters get the cities that hold these parameters
    if (searchQuery) {
        let data = [];

        data = weatherData.find(value => {
            return (value.city_name === searchQuery);
        })
        //   res.send(data.data[0]);
        let city = data.data
        if (city) {
            let forecastobj = city.map(value => {
                return new Forecasts(value.datetime, value.weather.description)
            })
            res.send(forecastobj)
        }
        else {
            res.send(" Error: city not found")
        }
    } else {
        res.status(400).send("Error: on Query Parameters");
    }
})


class Forecasts {
    constructor(data, description) {
        this.data = data;
        this.description = description;
    }


}
