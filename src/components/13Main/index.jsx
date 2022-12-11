import React from 'react';
import './main.css'

import { Hero } from '../02Hero/index';
import { About } from '../03About';
import { Servicios } from '../04Servicios';
import { Resume } from '../06Resume';
import { Skills } from '../07skills';
import { Portfolio } from '../08Portfolio';
import { Contratame } from '../09Contratame';
import { Contacto } from '../10Contacto';



const Main = () => {
    return(
        <div className='container'>
        <Hero/>
        
        <About/>
    
        <Servicios/>
        {/* <Resume/> */}
        {/* <Skills/> */}
        <Portfolio/>
        <Contratame/>
        {/* <Contacto/> */}
        
        

        </div>
    )
}

export { Main }