import React from 'react'
import '../index.css'
import '../homepage.css'
import logo from '../images/MediCare.png'

export default function navbar(){
    return(
        <>
        <div className='navbar'>
            <img className='logo' src={logo} alt="Error Loading" />
            <a id='home' href="/home">Home</a>
            <a id='about' href="/about">About</a>
            <a id='services' href="/services">Services</a>
            <a id='news' href="/news">News</a>
        </div>
        <button id="contact">Contact</button>
        </>
    )
}

