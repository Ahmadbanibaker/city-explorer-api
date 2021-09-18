'use strict';

require('dotenv').config;
const express = require('express');
const cors = require('cors');
const movie = require('./Modules/MoviesMod.js');
const weather = require('./Modules/WeatherMod.js');
const app = express();
const PORT = process.env.PORT;
app.use(cors())

app.get('/weather', weatherHandler);

async function weatherHandler(request, response) {
  const { lat, lon } = request.query;
  await weather(lat, lon)
  .then(summaries => response.send(summaries))
  .catch((error) => {
    console.error(error);
    response.status(200).send('Sorry. Something went wrong!')
  });
}  

app.get('/movies', movieHandler);

function movieHandler(request, response) {
    const { query } = request.query;
    movie(query)
        .then(summaries => { response.send(summaries) })
        .catch((error) => {
            console.error(error);
            response.status(200).send('Sorry. Something went wrong!')
        });
}



app.listen(8888, () => console.log(`Server up on 8888`));




// 'use strict';
// // const { default: axios } = require('axios');
// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const app = express(); // class that create a new API
// const PORT = process.env.PORT;
// app.use(cors());

//  const weatherfile = require ('./Controller/WeatherCon')
//  const moviefile = require ('./Controller/MoviesCon')

// app.listen(PORT, () => {
//     console.log('server listen to ', PORT);
// });
// app.get('/' , (req , res)=>{res.send('HOME')})

// app.get('/weather' , weatherfile)

// app.get('/movie' , moviefile)

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