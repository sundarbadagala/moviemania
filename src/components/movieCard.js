import React, { useEffect, useState } from 'react'
import './movieCard.css'

function Card(props) {
    const [ratingStyle, setRatingStyle]= useState('white')
    const [fontSize, setFontSize]= useState('13px')
    const adjustFontSize=()=>{
        if(window.innerWidth < 412 &&  props.title.length > 50){
            setFontSize('9px')
        }else if(window.innerWidth < 412 &&  props.title.length > 40){
            setFontSize('11px')
        }else if(window.innerWidth < 412 &&  props.title.length > 25){
            setFontSize('12px')
        }else if(window.innerWidth < 412 &&  props.title.length > 20){
            setFontSize('13px')
        }else if(window.innerWidth < 1130 && props.title.length > 50){
            setFontSize('10px')
        }
    }
    useEffect(()=>{
        if(props.rating >8){
            setRatingStyle('#00ff00')
        }else if(props.rating >6){
            setRatingStyle('orange')
        }else if(props.rating > 4){
            setRatingStyle('#ff0b0b')
        }
    },[props.rating])

    useEffect(()=>{
       adjustFontSize() 
    })

    window.addEventListener('resize', adjustFontSize)
    return (
        <div className='mv-card'>
            <img src={props.poster} alt=''/>
            <div className='mv-details'>
                <div className='mv-title' style={{fontSize:fontSize}}>{props.title}</div>
                <div className='mv-rating' style={{color:ratingStyle}}>{props.rating}</div>
                
            </div>
            <div className='mv-review'>{props.overview}</div>
        </div>
    )
}

export default Card
