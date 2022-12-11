import React from 'react';
import './SocialMedia.css';
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";


const SocialMedia = () => {
    return(
        <div className='socialmedia'>
            
        <a className="icono" target='_blank' href="https://www.instagram.com/paucampos7/?hl=es-la" ><AiFillInstagram /></a>

        <a className="icono" target='_blank' href="https://github.com/paucampos7" ><AiFillGithub /></a>

        <a className="icono" target='_blank' href="https://www.linkedin.com/in/paucampos-digital-design-dev" ><AiFillLinkedin  /></a>

       
        </div>
    )
}

export { SocialMedia }