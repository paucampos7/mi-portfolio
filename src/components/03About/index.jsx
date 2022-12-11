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
                        <p >Hola, mi nombre es <b className="nombre">Paula Campos</b></p>
                        <p>Soy diseñadora apasionada por el desarrollo y diseño web. Amo la dinámica de cada trabajo, en el que busco con diversos recursos solucionar las necesidades y deseos de mis clientes.</p>
                        <p>A demás del diseño, la calidad del contenido es vital para que un sitio web no solo sea atractivo, sino también interesante para el usuario. </p>
                        <p>Quienes eligieron mi servicio cuentan hoy con una plataforma funcional que los identifica y rinde sus beneficios.</p>
                        <p>Mi lema es entregar el trabajo en tiempo y forma, respetando el presupuesto y requerimientos de mis clientes.</p>
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