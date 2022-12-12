import React from 'react';
import './contacto.css';

import { Formulario } from '../11Formulario';

import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpCircleFill} from "react-icons/bs";

const Contacto = () => {
    return(
<div>
<div id='contacto' className='contactoContainer'>
 
    <div className="getintouch">

        <h3 className="hablemos">Hablemos</h3>
        <p className="pgrillaPongamonos1">
        
        Participar en nuevos proyectos me apasiona, así que siéntete libre de compartirme tu plan.
        Los detalles son importantes por lo que recomiendo que tengas la mayor cantidad de información a mano, así podremos aprovechar al máximo nuestra primera reunión.
        Te espero para acompañarte en el camino de hacer realidad tu idea.
        </p>

        <h5 className='tgrilla'>Dirección:</h5>
        <p className="pgrillaPongamonos">Av. Gral. Savio, Calamuchita, Córdoba</p>

        <h5 className='tgrilla'>Llamar:</h5>
        <p className="pgrillaPongamonos">(+54) 3571 15 310670</p>

                    
        <a className="icono" target='_blank' href="https://www.instagram.com/paucampos7/?hl=es-la" ><AiFillInstagram /></a>

        <a className="icono" target='_blank' href="https://github.com/paucampos7" ><AiFillGithub /></a>

        <a className="icono" target='_blank' href="https://www.linkedin.com/in/paucampos-digital-design-dev" ><AiFillLinkedin  /></a>

    </div>

    <Formulario/>

    
    </div>

    {/* <div className='volver'><a href="/"><BsFillArrowUpCircleFill/></a></div> */}

</div>
    )
}

export { Contacto }