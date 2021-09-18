'use strict';
// const { default: axios } = require('axios');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express(); // class that create a new API
const PORT = process.env.PORT;
app.use(cors());

 const weatherfile = require ('./Controller/WeatherCon')
 const moviefile = require ('./Controller/MoviesCon')

app.listen(PORT, () => {
    console.log('server listen to ', PORT);
});
app.get('/' , (req , res)=>{res.send('HOME')})

app.get('/weather' , weatherfile)

app.get('/movie' , moviefile)

    //     if (city) {
    //         let forecastobj = city.map(value => {
    //             return new Forecasts(value.datetime, value.weather.description)
    //         })
    //         res.send(forecastobj)
    //     }
    //     else {
    //         res.send(" Error: city not found")
    //     }
    // } else {
    //     res.status(400).send("Error: on Query Parameters");
    // }
    


// if (searchQuery) {
//     let data = [];

//     data = weatherData.find(value => {
//         return (value.city_name === searchQuery);
//     })
//     //   res.send(data.data[0]);
//     let city = data.data
//     if (city) {
//         let forecastobj = city.map(value => {
//             return new Forecasts(value.datetime, value.weather.description)
//         })
//         res.send(forecastobj)
//     }
//     else {
//         res.send(" Error: city not found")
//     }
// } else {
//     res.status(400).send("Error: on Query Parameters");
// }