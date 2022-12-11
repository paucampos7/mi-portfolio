import React from 'react';
import './servicios.css';
import { FaPalette,FaCode,FaRegLightbulb } from "react-icons/fa";
import { MdDesignServices,MdOutlineWeb,MdPermIdentity,MdBusinessCenter } from "react-icons/md";
import { GoMegaphone } from "react-icons/go";
import { BsBookmarkStarFill } from "react-icons/bs";
import { SiWritedotas } from "react-icons/si";



const Servicios = () => {
    return(
    <div id='servicio' className='serviciosContainer'>

        <div className="linkytituloServicios">
            <a className="linkServicios" href="#head">qué hago?</a>
            <h3 className='subtituloServicios'>en qué puedo ayudarte?</h3>
        </div>

    <div className="grilla">
        
        <div className="grillainterior">
            <MdDesignServices className='Icon'/>
           <h4>diseño gráfico</h4>
           <p className="pgrilla"> Le damos vida a tu idea buscando la síntesis perfecta para potenciar su valor. </p>
        </div>

        <div className="grillainterior">
        <MdOutlineWeb  className='Icon' />
           
           <h4>diseño web</h4>
           <p className="pgrilla">Diseños atractivos que realcen el valor de tu marca, servicio o producto.</p>
        </div>

        <div className="grillainterior">
    <FaCode  className='Icon'  />
           
           <h4>desarrollo web</h4>
           <p className="pgrilla">Sitios webs amigables con todos los usuarios, prácticos y funcionales. </p>
        </div>
   
        <div className="grillainterior">
        <BsBookmarkStarFill className='Icon'  />
              <h4>identidad de marca</h4>
              <p className="pgrilla"> <b> ¿La gente no te identifica? </b></p>
              <p className="pgrilla"> Te ayudamos a incrementar la presencia de tu marca, ayornándola con elementos visuales aptos para diversos soportes. </p>
        </div>

        <div className="grillainterior">
        <SiWritedotas  className='Icon'  />
              <h4>web Copywriting</h4>
              <p className="pgrilla"> <b> ¿Tus clientes no leen tu contenido?  </b></p>
              <p className="pgrilla"> Textos poderosos, que hechizarán a todos los visitantes de tu web.</p>
        </div>

        <div className="grillainterior">
        <FaRegLightbulb  className='Icon'  />
              <h4>contenido web</h4>
              <p className="pgrilla"> <b> ¿Le falta contenido a tu sitio?</b></p>
              <p className="pgrilla">¡No te preocupes! Nosotros lo creamos</p>
        </div>

    </div>


        </div>
    )
}

export { Servicios }