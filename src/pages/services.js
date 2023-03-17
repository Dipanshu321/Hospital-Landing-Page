import React from 'react'
import '../services.css'
import Card from '../components/services_cards'
import Card_2 from '../components/services_cards_2'
import tooth from '../images/tooth.png'
import pulmonary from '../images/pulmonary.png'
import neurological from '../images/neurological.png'
import prediatric from '../images/prediatric.png'
import doctor_man from '../images/doctor-man.png'
import doctor_woman from '../images/doctor-woman.png'
import doctor_van from '../images/doctor-van.png'
import person from '../images/person-image.png'

export default function services(props){
    return(
        <>
        <section className='services_section_1'>
            <h1>{props.title}</h1>
            <div className="services_para">
                <p>{props.description}</p>
            </div>
            <div className="cards">
                <Card title={'Dental Care'} imageUrl= {tooth}/>
                <Card title={'Pulmonary'} imageUrl={pulmonary}/>
                <Card title={'Neurological'} imageUrl={neurological}/>
                <Card title={'Prediatrics'} imageUrl={prediatric}/>
            </div>
        </section>
        <section className="services_section_2">
            <div className="container">
                <h2>Clinic With Innovative</h2>
                <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                <button>Learn More</button>
            </div>

            <div className="doctor_woman">
                <h5>Qualified Doctors</h5>
                <img src={doctor_woman} alt="Work in Progress" />
            </div>

            <div className="doctor_man">
                <h5>Emergency Care</h5>
                <img src={doctor_man} alt="Work in Progress" />
            </div>

            <div className="doctor_van">
                <h5>24 Hours Service</h5>
                <img src={doctor_van} alt="Work in Progress" />
            </div>
        </section>

        <section className="services_section_3">
            <h2>We Have The Best Specialist</h2>
            <div className="section_3_para">
                <p>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
            </div>
            <div className="section_3_cards">
                <Card_2 title={'Dr. Awaatif Al'} imageUrl={person} dept={'Dental Care'}/>
                <Card_2 title={'Dr. Filipa Gaspar'} imageUrl={person} dept={'Cardiology'}/>
                <Card_2 title={'Dr. Sukhmeet Gorae'} imageUrl={person} dept={'Neurological'}/>
                <Card_2 title={'Dr. Siri Jakobsson'} imageUrl={person} dept={'Prediatrics'}/>
            </div>


        </section>
        </>
    )
}