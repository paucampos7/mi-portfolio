import React from 'react';
import { Gallery } from '../../components/014gallery/Index';
import './portafolio.css';
import Imagen1 from '../../assets/portafolio/eav/eav-logo.jpg'
import Imagen2 from '../../assets/portafolio/eav/eav-home.jpg'
import Imagen3 from '../../assets/portafolio/eav/eav-menu.jpg'
import Imagen4 from '../../assets/portafolio/eav/eav-reseñas.jpg'
import Imagen5 from '../../assets/portafolio/eav/eav-youtube.jpg'
import Imagen6 from '../../assets/portafolio/eav/eav-logo-transp.png'

const Portafolio = () => {
    return(
        <div className='portafolioContainer'>

        <div portafolioTitulo>
        <h1 className='tituloPortafolio'>portafolio</h1>
       <p className='subtitle'>Recopilación de trabajos realizados</p>

       <p className='intro'>Al recorrer esta página, podrás comprender mejor cuáles son los servicios que ofrecemos y analizar si tenemos lo que estás buscando. Explora con detalle, y si tienes alguna inquietud puedes dejarnos tu  <a className='adress' href="/contacto"> consulta aquí.</a></p>
        

        </div>
        
        <div className='textoGaleriaEav'>
            
            <div className='txt'>
            <p><b>Envasadoras al Vacío</b></p>
            <p>Envasadoras al Vacío, es uno de los primeros sitios webs con los que trabajé.
            Se trata de una página vertical, con amplio contenido de nicho. La misma fue desarrollada a través de una plataforma con plantillas prediseñadas. 
            Este ejemplo demuestra que se pueden realizar sitios webs funcionales que, con contenido de calidad y una buena estrategia SEO, pueden avanzar casilleros cuando lo que se busca es un buen posicionamiento.
            Al mismo tiempo, son notables las limitaciones que tiene el uso de plantillas prediseñadas frente a el enorme abanico de opciones que ofrece el diseño y desarrollo web desde cero.</p>

            <p><b>Algunos servicios destacados de este trabajo fueron:</b></p>
            <p>Análisis de palabras clave, Creación de contenido textual enriquecido con imágenes y videos de alta calidad, Diseño de identidad Visual. Además, tuvimos la oportunidad de crear un de canal de YouTube con el fin de aumentar las posibilidades de posicionamiento.</p>
            

            <p>Si quieres visitar este sitio, te invito a que ingreses al siguiente link: <a className='adress' href="https://www.envasadoralvacio.com/">Envasadoras al Vacio</a></p>
            </div>
            <img className='logoeav' src={Imagen6}  alt="" />
            </div>

        <div className='galeriaEav'>

        
        <img className='eavgallery' src={Imagen2} alt="home_envasadoras_al_vacío" />
        <img className='eavgallery' src={Imagen3} alt="menu_envasadoras_al_vacío" />
        <img className='eavgallery' src={Imagen4} alt="reseñas_envasadoras_al_vacío" />
        <img className='eavgallery' src={Imagen5} alt="reseñas_envasadoras_al_vacío" />
        
        </div>

        <div className='ultimosTrabajos'>
        <h2>Trabajos Recientes</h2>
        </div>

        <Gallery/>

        </div>
    )
}

export { Portafolio }