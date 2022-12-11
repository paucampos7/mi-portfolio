import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        
            <nav className='navContainer'>
                <ul>
                    <li><NavLink className='menu' to= '/'>home</NavLink></li>
                    <li><a className='menu' href="#about">sobre mi</a></li>
                    <li><a className='menu' href="#servicio">servicios</a></li>
                    <li><a className='menu' href="#cv">cv</a></li>

                    {/* <li><a className='menu'href="#portfolio">portfolio</a></li> */}
                    <li><NavLink className='menu' to='portafolio'>portafolio</NavLink></li>

                    <li><NavLink className='menu' to='faq'>faq</NavLink></li>
                    <li><NavLink className='menu' to='contacto'>contacto</NavLink> </li>
                   
                    {/* <li><a className='menu' href="#contacto">contacto</a></li> */}
                    
                    
                </ul>

            </nav>
        
    )
}

export { Navbar }