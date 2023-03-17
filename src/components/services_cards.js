import React from 'react'
import '../services_cards.css'

export default function Card(props){
    return (
    <div className='card_container'>
        <div className="image_container">
            <img src={props.imageUrl} alt="Work in progress"/>
        </div>
        
        <div className="card_title">
            <h3>{props.title}</h3>
        </div>
    
        <a className='link_btn'>Read More &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &#62; </a>
    </div>
    )
}