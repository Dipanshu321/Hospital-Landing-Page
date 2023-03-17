import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import Testomonial_card from '../components/testomonial _card';
import '../testomonials.css';



function Testomonial(){

    const [data,setData] = useState([]);
    
    
    useEffect(()=> {
        axios
        .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
        .then((res) => setData(res.data.data));

    }, []);
    
        console.log(data);  
    return(
        <>
            <section className='testomonial_section'>
                <h1>What Our Customers Say</h1>
                {
                data.slice(0,2).map((item, index) =>{
                    // const {Name,Reviews,rating} = item;
                    return (
                        <div className='testomonial_section_card' key={index}>
                            <Testomonial_card Reviews={item.Reviews} Name={item.Name} Rating={item.rating}/>
                        </div>
                    );
                })
                }
            </section>
        </>
    )

}

export default Testomonial