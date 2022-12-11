import React from 'react';
import './Faq.css'
const Faq = () => {
    return(
<div className='faqContainer'>
 <h1 className='tituloContact'>preguntas frecuentes</h1>

 <div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      ¿Trabajan a distancia?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Claro que sí</strong> La tecnología está de nuestro lado, no importa el lugar del mundo en el que estés, podemos coordinar nuestra reunión por el medio que prefieras. Por lo general, para el primer encuentro, las video-llamadas son ideales.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ¿Cómo envío mi material?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong>La documentación debe enviarse siempre por e-mail.</strong> El correo electrónico es el medio más eficaz y seguro para el envío de material, ya que nos permite conservar la calidad de los archivos, y queda todo registrado para ambas partes con fecha de envío. En caso que parte de tu trabajo no esté realizado en un soporte digital, lo conveniente es que puedas escanearlo o procura sacar una foto con buena iluminación y enfoque.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ¿Cómo subimos el sitio a 'la Nube'?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>¡Buena Pregunta!</strong> Para poner tu website en funcionamiento, son necesarias dos cosas: un HOSTING y un DOMINIO.
        El primero es el 'espacio' en la nube que ocupará tu página, y el segundo, es la dirección de tu sitio.
        Estos son servicios externos que puedes conseguir por tu cuenta ó podemos asesorarte al respecto. Por lo general son pagos, y se renuevan anualmente. El costo dependerá de diferentes factores, como por ejemplo el tipo de dominio que elijas (.com, .edu, .online, etc).
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ¿Cómo podemos acordar una reunión?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>¡Eso es muy simple!</strong> Sólo dirígete al siguiente link, dejanos tus datos y consulta, y nos comunicaremos a la brevedad.
      </div>
    </div>
  </div>
</div>

<div className='maspreguntas'>
<a className='otrapregunta' href="/contacto"><button className='pregunta'>Tengo otra pregunta </button></a>

</div>


</div>
    )
}

export { Faq }