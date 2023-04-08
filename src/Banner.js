import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from './Axios';
import requests from './Requests';

function Banner() {
    const[movie,setMovie]=useState([]);

    useEffect(()=>{
      async function fetchData(){
        const requete = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
          requete.data.results[
           Math.floor(Math.random()*requete.data.results.length-1)
          ]
        )
        return requete
      } 
      fetchData();
    },[])


    function truncate(string,n){
        return string?.length> n ? string.substr(0,n-1)+"...":string;
    }
  return (
    <header className='banner' style={{
        backgroundSize:'cover',
        backgroundPosition:"center center",
        backgroundImage:'url("https://image.tmdb.org/t/p/original/'+movie?.backdrop_path+'")'}}>
      <div className='Banner_contents'>
        <h1 className='banner_title'>
           {movie?.title|| movie?.name||movie?.original_name}
        </h1>
        <div className='banner_btns'>
            <button className='banner_btn'>Play</button>
            <button className='banner_btn'>My List</button>
        </div>
        <h1 className='banner_description'>
            {truncate(!movie.overview?'':movie.overview,100)}
        </h1>
      </div>
      <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner
