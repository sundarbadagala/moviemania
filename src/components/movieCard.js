import React, { useEffect, useState } from 'react'
import './movieCard.css'

function Card({poster, title, rating, overview}) {
    const [ratingStyle, setRatingStyle]= useState('white')
    const [fontSize, setFontSize]= useState('14px')
    const adjustFontSize=()=>{
        if(window.innerWidth < 412 &&  title.length > 50){
            setFontSize('9px')
        }else if(window.innerWidth < 412 &&  title.length > 40){
            setFontSize('11px')
        }else if(window.innerWidth < 412 &&  title.length > 25){
            setFontSize('12px')
        }else if(window.innerWidth < 412 &&  title.length > 20){
            setFontSize('13px')
        }else if(window.innerWidth < 1130 && title.length > 50){
            setFontSize('10px')
        }
    }
    useEffect(()=>{
        if(rating >8){
            setRatingStyle('#00ff00')
        }else if(rating >6){
            setRatingStyle('orange')
        }else if(rating > 4){
            setRatingStyle('#ff0b0b')
        }
    },[rating])

    useEffect(()=>{
       adjustFontSize() 
    },[])

    window.addEventListener('resize', adjustFontSize)
    return (
        <div className='mv-card'>
            <img src={poster} alt=''/>
            <div className='mv-details'>
                <div 
                    className='mv-title' 
                    style={{fontSize:fontSize}}
                >
                    {title}
                </div>
                <div 
                    className='mv-rating' 
                    style={{color:ratingStyle}}
                >
                    {rating}
                </div>
            </div>
            <div className='mv-review'>
                {overview}
            </div>
        </div>
    )
}

export default Card
