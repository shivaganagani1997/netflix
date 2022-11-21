import React ,{ useEffect, useState } from 'react';
import './Row.css';
import axios from './axios';
import requests from './request'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseUrl = 'https://image.tmdb.org/t/p/original'

function Row({title,fetchUrl,isLargeRow}) {

    const[movies, setMovies] = useState([])
    const[trailerUrl, setTrailerUrl] = useState('')

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData() 
    }, [fetchUrl]);

    const handleTrailer = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || '').then((url) => {
                const urlparams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlparams.get('v'));
            }).catch(() => console.log('Temporarily unavailable'))
        }
    }

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            autoplay:1
        }
    }
  return (
    <div className='row'>
        {title}
        <div className='row__posters'>
            {
                movies.map((movie) => (
                    <img 
                    key = {movie.id}
                    onClick = {() => handleTrailer(movie)}
                    className = {`row__poster ${isLargeRow && 'row__posterLarge'}`}
                    src = {`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt = {movie.name} 

                    />

                ))
            }
        </div>
        {trailerUrl && <Youtube videoId = {trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row