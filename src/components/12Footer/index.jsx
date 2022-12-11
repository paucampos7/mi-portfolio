import React from 'react';
import './footer.css'

const Footer = () => {
    return(
    <div className='footerContainer'>
    
    <div className="foot">
        <p>Copyrigt © 2023 <a className="linksimple" href="#">paucampos</a> Todos los derechos reservados</p>
        </div>

        <div className="foot">
        <p>Designed by <a className="linksimple" href="#">PauCampos</a></p>
        </div>
    
     
    </div>
    )
}

export { Footer }