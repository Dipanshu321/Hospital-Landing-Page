import React from 'react'
import '../services_cards_2.css'

export default function Card_2(props){
    return(
        <>
        <div class="card_2_container">
            <img src={props.imageUrl} alt="Work in Progress"/>
            <div class="card_2_desc">
                <h4><b>{props.title}</b></h4>
                <p>{props.dept}</p>
            </div>
        </div>
    </>
    )
}