import React from 'react';
import './resume.css';
import { SiAdobeillustrator,SiAdobeindesign,SiAdobephotoshop,SiHtml5,SiCss3,SiJavascript,SiReact } from "react-icons/si";
import {FaPencilAlt} from "react-icons/fa";



const Resume = () => {
    return(

<div id='cv' className='resumeContainer'>

    <div className="linkytituloResume">
        <a className="linkResume" href="#head">resumen</a>
        <h3 className='subtituloResume'>síntesis de mi currículum</h3>
    </div>


    <div  className="educacionyesperiencia">

    <div className="educacion">

    <div>
    <h4 className="rotulo">mi educación</h4>
    <div/>

            <div className="detalle">
            <h5 className='puestoResume'>Licenciatura en Diseño de Indumentaria y Textil</h5>
            <p className="empresaResume">UE Siglo 21</p>
            <p className="pgrillaR">Cursado completo y aprobado desde los años 2010 a 2014. </p>
            <p className="pgrillaR">Título obtenido: Licenciada en Diseño de Indumentaria y Textil, año 2015.</p>
            <hr className="divisor"></hr>

            <h5 className='puestoResume'>Curso de Diseño Gráfico</h5>
            <p className="empresaResume">AES</p>
            <p className="pgrillaR">Curso completo y aprobado, Diciembre 2022</p>
            <p className="pgrillaR">Programas Estudiados:</p>
            <p className="pgrillaR"><FaPencilAlt/> Corel Draw</p>
            <p className="pgrillaR"><SiAdobeillustrator/> Adobe Illustrator</p>
            <p className="pgrillaR"><SiAdobeindesign/> Adobe InDesign</p>
            <p className="pgrillaR"><SiAdobephotoshop/> Adobe PhotoShop</p>
            
            <hr className="divisor"></hr>

            <h5 className='puestoResume'>Diplomatura Front-End Developer</h5>
            <p className="empresaResume">UTN</p>
            <p className="pgrillaR">Actualmente cursando, diciembre 2022</p>
            <p className="pgrillaR">Programas Estudiados:</p>
            <p className="pgrillaR"><SiHtml5/> HTML5</p>
            <p className="pgrillaR"><SiCss3/> CSS3</p>
            <p className="pgrillaR"><SiJavascript/> JavaScript</p>
            <p className="pgrillaR"><SiReact/> React</p>
            <hr className="divisor"></hr>

            <h5 className='puestoResume'>Nivel de inglés B2</h5>
            <p className="empresaResume">Cambridge University</p>
            <p className="pgrillaR">First Certificate in Englsh - B2, año 2003 </p>
            <hr className="divisor"></hr>

            <h5 className='autonomo'>APRENDIZAJE AUTONOMO</h5>

            <h5 className='puestoResume'>Manejo de programas vinculados a la industria Textil y Gráfica</h5>
            <p className="empresaResume">Programas de ponchado (matrices para bordadoras industriales digitales):</p>
            <p className="pgrillaR">Barudan Punchant Pro</p>
            <p className="pgrillaR">Wilcom</p>

            <p className="empresaResume">Programa de Patronaje Textil :</p>
            <p className="pgrillaR">Audaces</p>
    

            <p className="empresaResume">Programas de ploteo:</p>
            <p className="pgrillaR">FlexiSign</p>
             <p className="pgrillaR">Roland VersaWorks</p>

            <p className="empresaResume">Programa de corte y grabado láser:</p>
            <p className="pgrillaR">Universal Laser Sistems</p>

            <p className="empresaResume">Programa de impresión digital textil directa:</p>
            <p className="pgrillaR">Software Rip DigitalFactory</p>

            <hr className="divisor"></hr>




            </div>

        </div>
    </div>

    <div className="experienciab">

<div className="rotulo">
    <h4 >mi experiencia</h4>
</div>

<div className="detalle">
    <h5 className='puestoResume'>Coordinarora general de producción</h5>
    <p className="empresaResume">Peese Indumentaria</p>
    <p className="pgrillaR">Responsable a cargo del funcionamiento integral de todas las áreas productivas de la empresa. Planteo de objetivos en coordinación con el sector de marketing y ventas.</p>
    <p className="pgrillaR">Años 2014 a 2020</p>
    <hr className="divisor"></hr>

    <h5 className='puestoResume'>Diseño y desarrollo de colecciones</h5>
    <p className="empresaResume">Peese Indumentaria</p>
    <p className="pgrillaR">Responsable de diseñar y desarrollar colecciones de indumentaria deportiva acordes a la temporada. Investigación y análisis de tendencias, presupuestos y proyecciones.
    </p>
    <p className="pgrillaR">Años 2010 a 2020</p>
    <hr className="divisor"></hr>

    <h5 className='puestoResume'>Diseño y desarrollo de identidad de marca</h5>
    <p className="empresaResume">Peese Indumentaria</p>
    <p className="pgrillaR">Responsable de diseñar y coordinar los aspectos e instrumentos de identidad visual y comunicativa de la marca en base a la estrategia de márketing establecida para la temporada.</p>
    <p className="pgrillaR">Años 2010 a 2020</p>
    <hr className="divisor"></hr>

    <h5 className='puestoResume'>Sector de intervención textil</h5>
    <p className="empresaResume">Peese Indumentaria</p>
    <p className="pgrillaR">Diseño, producción y coordinación del sector de intervención textil con técnicas de bordado digital industrial, estampado directo e indirecto, utilizando sistemas tradicionales como la serigrafía y sistemas digitales con manejo de programas vectoriales para bordadoras y plotters.</p>
    <p className="pgrillaR">Años 2003 a 2020</p>
    <hr className="divisor"></hr>

    <h5 className='puestoResume'>Maquinaria Manejada</h5>
    <p className="empresaResume">Peese Indumentaria</p>
    <p className="pgrillaR">Bordadoras industriales </p>
    <p className="pgrillaR">Cortadora y grabadora láser</p>
    <p className="pgrillaR">Plotters de corte e impresión </p>
    <p className="pgrillaR">Impresora DTG PlyPrint TexJet</p>
    <p className="pgrillaR">Cortadoras textiles industriales</p>
    <p className="pgrillaR">Maquinaria de confección industrial básica y específica de confección</p>
    <p className="pgrillaR">Años 2003 a 2020</p>
    <hr className="divisor"></hr>



    </div>

</div>


</div>


</div>


    )
}

export { Resume }