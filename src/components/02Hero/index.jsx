import React from 'react';
import './Hero.css'
import fotoPerfil from '../../assets/pau1.jpg'
import {motion} from 'framer-motion'
const Hero = () => {
    return(
        <div className='heroContainer'>
            <div className='textoYbotonHero'>
                <h2 className='herosubtitle'>hola, soy freelancer</h2>
                
                <h1 className='herotitle'> developer</h1>
                <p className="lugar">en Córdoba, Argentina</p>

                <div className='botoneraHero'> 
                    <a href="/portafolio"><button className='herobutton'>ver mis trabajos</button></a>
                    <a href="/contacto"><button className='herobutton'>contactarme</button></a>
                </div>
            
            </div>

            
            <img className='fotoPerfil' src={fotoPerfil} alt="esta soy yo" />
            
        </div>
    )
}

export { Hero }