import React from 'react'
import '../homepage.css'


export default function homepage(){
    return(
        <>
        <div className='homepage_container'>
            <h5>Welcome to MediCare+ Clinic</h5>
            <h1>Best Specialists</h1>
            <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
            <button className='appointment_btn'>Make an appointment</button>
            <button className='dept_btn'>Departments</button>
        </div>
        <div className='blank_container'>.</div>
        </>
    )
}