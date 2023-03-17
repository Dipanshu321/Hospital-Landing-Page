import React from 'react'
import logo from '../images/MediCare.png'
import '../subscription.css'


export default function subscription() {
  return (
    <section className='subscription_section'>
        <div className='subscription_container'>
          <h2>Subscribe to Newsletter</h2>
          <p>We have a wide experience in experience design and strategy.</p>
          <input type='email' placeholder='Enter your email address' />
          <button>Send Now</button>
        </div>
        <div className='bottom_navbar'>
            <img src={logo} alt="Error Loading" />
            <a id='home' href="/">Home</a>
            <a id='about' href="/">About</a>
            <a id='services' href="/">Services</a>
            <a id='news' href="/">News</a>
        </div>
    </section>
  )
}
