import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './movieCard'
import './index.css'

function Index() {
    const [movieData, setMovieData]= useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=10')
        .then(res => setMovieData(res.data.results))
        .catch(error => error)
        
    })

    const showData=()=>{
        const movieComponent = movieData.map((item, index) => {
            return(
                <div key={index} className='mv-component'>
                    <MovieCard title={item.original_title} rating={item.vote_average} poster={'https://image.tmdb.org/t/p/w1280'+item.poster_path} overview={item.overview}/>
                </div>
            )
        })

        return movieComponent
    }
    return (
        <div className='mv-main'>
            {showData()}
        </div>
    )
}

export default Index
