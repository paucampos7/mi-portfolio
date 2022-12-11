import React from 'react';


import './About.css'

const About = () => {
    return(
        <div id='about' className='aboutContainer'>

            <div className="linkytituloAbout">
                <a className="linkAbout" href="#head">sobre mi</a>
                <h3 className='subtituloAbout'>conóceme mejor</h3>
            </div>

            <div className="mepresento">
                    <div className="hi">
                        <p >Hola, soy <b className="nombre">Paula Campos</b></p> 
                        <p>Soy diseñadora y desarrolladora apasionada por el diseño web. Disfruto desarrollar sitios webs simples, limpios y elegantes que brinden valor real a usuario final.</p>
                        <p>Miles de clientes recibieron resultados excepcionales trabajando a mi lado.</p>
                        <p>Nuesto lema es entregar el trabajo en tiempo y forma, respetando el presupuesto y requerimientos de nuestros clientes.</p>
                    </div>

<div className='contieneExp'>
                    <div className="experiencia">
                    
                        <div>
                        <p className="veintidos">18</p>
                        </div>
                    
                        <div className="anios"><p>Años de <b className='exp'>Experiencia</b></p></div>
                    
                    </div>
                    </div>
                 </div>

    

                 <div className="sobremi">
                    <table>
                        <tr>
                            <th>Nombre</th>
                            <th>E-mail</th>
                            <th>Fecha de Nacimiento</th>
                            <th>Nacionalidad</th>
                        </tr>
                        <tr>
                            <td>Paula Campos</td>
                            <td>paucampos7@gmail.com</td>
                            <td>7 de Septiembre de 1985</td>
                            <td>Argentina</td>
                        </tr>
                        
                    </table>
                    
                </div>
                

        </div>
        
    )
}

export { About }