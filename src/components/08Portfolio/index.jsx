import React from 'react';
import { Gallery } from '../014gallery/Index';
import './portfolio.css'


const Portfolio = () => {
    return(
        <div id='portfolio' className='portfolioContainer'>

           <div className="linkytitulo">
            <a className="link" href="#head">portfolio</a>
            <h3 className='subtitulo'>Trabajos Recientes</h3>
            </div>

           <Gallery/>
            
        </div>
    )
}

export { Portfolio }