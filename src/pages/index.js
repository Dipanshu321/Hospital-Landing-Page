import React from 'react'
import Navbar from '../components/navbar' 
import Homepage from '../pages/homepage'
import Services from '../pages/services'
import Testomonial from '../pages/testomonials'
import Subscription from '../pages/subscription'
import Footer from '../components/footer'
import '../index.css'



export default function Home(){
  return(
    <>
    <section className='homepage_section'>
      <Navbar/>
      <Homepage/>
    </section>
    <Services title={'Our Services'} description={'We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.'}/>
    <Testomonial/>
    <Subscription/>
    <Footer/>
    </>
  )
}