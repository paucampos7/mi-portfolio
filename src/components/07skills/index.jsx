import React from 'react';

import './Skills.css'
import cv from '../../assets/cv-pau-campos.pdf'

const Skills = () => {
    return(
        <div className='skillsContainer'>

    <div className="myskillstitle">
    <a className='aMySkillsTitle' href="#head"><h3>My Skills</h3></a> 
    </div>


            <div className='skills'>

            <div className='porcentajeI'>
                <p className='empresa'> Digitalización</p>
                <hr className='lineaskills'/>

                <p className='empresa'> Diseño Web</p>
                <hr className='lineaskills'/>

                <p className='empresa'> Desarrollo Web</p>
                <hr className='lineaskills'/>
            </div>

            <div className='porcentajeD'>
                <p className='empresa'> Branding</p>
                <hr className='lineaskills'/>

                <p className='empresa'> Copywriting</p>
                <hr className='lineaskills'/>

                <p className='empresa'> Contenido</p>
                <hr className='lineaskills'/>
            </div>
            </div>



           <div className='cvButtonCont'> 
            <a target='_blank' href={cv}>
                <button className='CV'>Descagar CV</button>
            </a>
            </div>           
            
        </div>
    )
}

export { Skills }