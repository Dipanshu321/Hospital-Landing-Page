import React from 'react'
import '../footer.css'
import Facebook from '../images/facebook.png'
import Google from '../images/google.png'
import Twitter from '../images/twitter.png'

export default function footer() {
  return (
    <>
    <section className='footer_section'>
        <div className='footer_logo'>
            <img src={Facebook} alt="" />
            <img src={Google} alt="" />
            <img src={Twitter} alt="" />
        </div>
            <p>&copy; 2020 PodPayment - 2020</p>
    </section>
    
    </>
  )
}
