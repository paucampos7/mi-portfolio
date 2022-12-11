import React from 'react';
import { About } from '../../components/03About';
import './about.css';
import { Resume } from '../../components/06Resume';
import { Skills } from '../../components/07skills';



const AboutPage = () => {
    return(
        <div>

        <About/>
        <Resume/>
        <Skills/>
        

        </div>
    )
}

export { AboutPage }