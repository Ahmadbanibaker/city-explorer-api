const axios = require ('axios');
const { response } = require('express');
const Movie = require ('../Modules/MoviesMod')



const MoviesFan = async (req,res)=>{
    let query = req.query.query
 try  { let url = `http://api.themoviedb.org/3/search/movie?api_key=74b29308bb70138feec3e94fe656d2a2&query=Amman`;
    let response = await axios.get(url)
   let result = response.data.results
 
    const final = result.map(m =>{
      return (new Movie(m.title, m.overview, m.vote_average, m.vote_count, m.poster_path, m.release_date))
    }
    )
     res.send(final)
  }
    catch(e){
      res.send("catch "+e)
    }
}
module.exports=MoviesFan
