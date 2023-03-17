import React from 'react'
import '../testomonials.css';
import Quote_icon from '../images/quote-icon.png'

export default function testomonial_card(props) {
  return (
    <>
        <div class="testomonial_card_container">
                <img src={Quote_icon} alt="Work in Progress" />
                <p><b>Review:&nbsp;</b>{props.Reviews}</p>
                <h4>Name:&nbsp;<b>{props.Name}</b></h4>
                <h5>Rating:&nbsp;{props.Rating}</h5>
        </div>
    </>
  )
}
