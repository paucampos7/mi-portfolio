import React from 'react';

import './Contratame.css'
import { BsFillArrowUpCircleFill} from "react-icons/bs";

const Contratame = () => {
    return(
     <div className='contratameContainer'>
            
    <div className="linkytitulo">
        <h3 className="interesado">¿te interesa trabajar conmigo?</h3>
        <a href="/contacto"><button className="contratame"> ¡Contratame!</button></a>
        <div className='volverinicio'><a href="/"><BsFillArrowUpCircleFill/></a></div>
    </div>
    
   
           
 </div>
    )
}

export { Contratame }