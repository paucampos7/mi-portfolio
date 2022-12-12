import React from 'react';
import './Hero.css'
import fotoPerfil from '../../assets/pau1.jpg'
import { motion } from 'framer-motion'


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
             opacity: 1,
            scale: 1,
    transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }



const Hero = () => {
    return(

        <div className='heroContainer'
        
        >
            <div className='textoYbotonHero'>
                <motion.h2 className='herosubtitle'
            
                
                initial={{opacity:0,y:-50}}
                animate={{opacity:1,y:0}}
                transition={{delay:1, duration:5,type:'spring',stiffness:100}}
    
                >

                hola, soy freelancer
                </motion.h2>
                
                <motion.h1 className='herotitle'
                initial={{opacity: 0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{delay:0.8, duration:5}}
                > 
                developer
                </motion.h1>



                <motion.p className="lugar"
                initial={{opacity: 0}}
                animate={{opacity:1}}
                transition={{delay:0.8, duration:6}}
                
                
                >
                en Córdoba, Argentina</motion.p>

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