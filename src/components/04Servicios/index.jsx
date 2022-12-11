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

            <div className='internal'>
           <h4 className='interTitle'>diseño gráfico</h4>
           </div>
           <p className="pgrilla"> Le damos vida a tu idea buscando la síntesis perfecta para potenciar su valor. </p>
           

        </div>

        <div className="grillainterior">
        <MdOutlineWeb  className='Icon' />

           <div className='internal'>
           <h4 className='interTitle'>diseño web</h4>
           </div>
           <p className="pgrilla">Diseños atractivos que realcen el valor de tu marca, servicio o producto.</p>
           
        </div>

        <div className="grillainterior">
         <FaCode  className='Icon'  />
           
         <div className='internal'>
           <h4  className='interTitle'>desarrollo web</h4>
        </div>
           <p className="pgrilla">Sitios webs amigables con todos los usuarios, prácticos y funcionales. </p>
        
        </div>
   
        <div className="grillainterior">
        <BsBookmarkStarFill className='Icon'  />
        <div className='internal'>
              <h4  className='interTitle'>identidad de marca</h4>
              </div>
            <div className='dolor'>
              <p className="pdolor"> <b> ¿La gente no te identifica? </b></p>
              </div>
              <p className="pgrilla"> Te ayudamos a incrementar la presencia de tu marca, ayornándola con elementos visuales aptos para diversos soportes. </p>
        </div>

        <div className="grillainterior">
        <SiWritedotas  className='Icon'  />
        <div className='internal'>
              <h4  className='interTitle'>web Copywriting</h4>
              </div>
              <div className='dolor'>
              <p className="pdolor"> <b> ¿nadie se queda en tu página?  </b></p>
              </div>
              <p className="pgrilla"> Textos poderosos, que hechizarán a todos los visitantes de tu web.</p>
        </div>

        <div className="grillainterior">
        <FaRegLightbulb  className='Icon'  />
        <div className='internal'>
              <h4  className='interTitle'>contenido web</h4>
              </div>  
              <div className='dolor'>
              <p className="pdolor"> <b> ¿te falta contenido?</b></p>
              </div>
              <p className="pgrilla">¡No te preocupes! Nosotros lo creamos</p>
        </div>

    </div>


        </div>
    )
}

export { Servicios }