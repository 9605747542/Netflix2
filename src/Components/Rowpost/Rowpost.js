import './Rowpost.css';
import YouTube from 'react-youtube';
import React, { useEffect, useState }  from "react";
import axios from '../../axios.js';
import { IMG_URL,API_KEY } from '../Constants/constant';

const Rowpost=(props)=>{
    const[movies,setState]=useState([]);
    const[movieid,setMovieID]=useState('');

    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log("Value",response.data.results);
           const RandomMovies=response.data.results.sort(()=> 0.5-Math.random());
           setState(RandomMovies);
        }).catch(err=>{
            console.log(err);
            
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            
          autoplay: 1, 
        },
      };
      const handleMovie=(id)=>{
        console.log("IDS",id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            console.log(response.data);
            if(response.data.results.length>0){
                setMovieID(response.data.results[0].key);
            }else{
                console.log("Trailer Not Available..");
                
            }
          
            
        }).catch(err=>{
            console.log(err);
            
        })
        
      }
    return(
        <div className="row">
            <br /><br />
            <h6 className="title">{props.title}</h6>
            <div className="posters">
                {movies.map((item)=>
              
                    
                    {if(!props.isSmall){
                        return(
                        <img  onClick={()=>{
                           handleMovie(item .id);
                        }} className='poster' src={`${IMG_URL+item.backdrop_path}`} alt="poster" />
                        )
                    }else{
                        return(
                        <img className='poster' src={`${IMG_URL+item.poster_path}`} alt="poster" />
                        )
                    }}
                     )}

            </div>
         { movieid?  <YouTube videoId={movieid}  opts={opts}/>:''}
        </div>
    )

}
export default Rowpost;