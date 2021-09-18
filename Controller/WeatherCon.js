'use strict';
const axios = require ('axios');
let result = []
const Forecasts = require ('../Modules/WeatherMod')
const weather = async (req, res)=>{ 
 try{   
   
  let lat = Number(req.query.lat);
    let lon = Number(req.query.lon);
     let response = await  axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=40b469be84da46abb3eb4e5a66e789ad&lat=${lat}&lon=${lon}`)
    let dataresponse = response.data.data
     result = dataresponse.map(date=>{
     return  new Forecasts(date.valid_date, date.weather.description)
    })
     res.send(result)
    }
    catch(e){
        res.send(e)
    }
 }


module.exports=weather
// //////
// app.get('/weather', (req, res) => {
//     // define and get the query parameters
//     let lat = Number(req.query.lat);
//     let lon = Number(req.query.lon);
//     let city_name = (res.query.city_name);
//      axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city_name}&key=40b469be84da46abb3eb4e5a66e789ad&lat=${lat}&lon=${lon}`)
//     .then(response => {
//       console.log(response.data);
//     //    const weatherArray = res.data
//       res.send(response.data)
//     //  getWetherData(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//     // after getting the parameters get the cities that hold these parameters
   
// })



// const getWetherData = (res=>{
    
//     let data = [];

//     data = res.data.find(value => {
//         return (value.city_name === searchQuery);
//     })
// }


