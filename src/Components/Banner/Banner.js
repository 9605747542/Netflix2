import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from  '../../axios.js';
import { API_KEY,IMG_URL} from '../Constants/constant';


const Banner=()=>{
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log("correct",response.data.results[0]);
            const result=response.data.results;
            const RandomNum=Math.floor(Math.random()* result.length);
            setMovie(result[RandomNum]);
            console.log(movie.title);
            
        }).catch(err=>{
            console.log("Error from",err);
        })
    },[]);

    return(
        <div style={{backgroundImage:`url(${movie? IMG_URL+movie.backdrop_path:''})`}} className="banner">
            <div className="content">
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className="banner_button">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>
            </div>
            <div className="fade-buttom">

            </div>
           

        </div>
    )
}
export default Banner;