import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './movieCard'
import './index.css'

function Index() {
    const [movieData, setMovieData]= useState([])
    const [searchName, setSearchName]= useState('')
    const [errorMsg, setErrorMsg]= useState('')

    useEffect(()=>{
        getMovieData()
    },[])

    const getMovieData=()=>{
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1')
        .then(res => setMovieData(res.data.results))
        .catch(error => setErrorMsg('Error 404 not found'))
    }
    
    const showData=()=>{
        // eslint-disable-next-line array-callback-return
        const movieComponent = movieData.map((item, index) => {
                return(
                    <div key={index} className='mv-component'>
                        <MovieCard 
                            title={item.original_title}
                            rating={item.vote_average}
                            overview={item.overview}
                            poster={'https://image.tmdb.org/t/p/w1280'+item.poster_path}          
                        />
                    </div>
                )
        })
        return movieComponent
    }

    const submitHanlder=(e)=>{
        e.preventDefault()
        if(searchName){
            axios.get('https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='+searchName)
            .then(res =>setMovieData(res.data.results))
            .catch(error => setErrorMsg('Invalid URL'))
        }else if(searchName === ''){
            return getMovieData()
        }
    }

    const clickHanlder=()=>{
        getMovieData()
        setSearchName('')
    }
    return (
        <div>
            <div  className='mv-header'>
                <div 
                    className='mv-logo' 
                    onClick={clickHanlder}
                >
                    Movie Box
                </div>
                <form onSubmit={submitHanlder}>
                    <input 
                        type='search' 
                        placeholder='Search' 
                        value={searchName}
                        onChange={(e)=>setSearchName(e.target.value)}
                    />
                </form>
            </div>
            <div className='mv-main'>
                {
                    errorMsg ? <div className='mv-error'>{errorMsg}</div> : showData()    
                }
            </div>
        </div>
    )
}

export default Index
