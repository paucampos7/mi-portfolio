import React from 'react';
import './Formulario.css'


const Formulario = () => {
    return(
        

<div className='formulario'>
    <h3 className='quieres'>¿Quieres un presupuesto?</h3>
 
    <form action="">
                
    <label>Ingresa tu Nombre:</label>
    <input type="text" name='Nombre' required/>

    <label>Ingresa tu E-mail:</label>
    <input type="e-mail" name='e-mail' required/>

    <label> ¿Cómo puedo ayudarte?</label>
    <textarea className='comentario' name="Comentario"> Escribe aquí tu consulta</textarea>

    <button className="enviar" type="submit">Enviar</button>

    </form>
    
</div>

    )
}

export { Formulario }