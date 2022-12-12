import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {



    return(
        
    <nav className='navContainer'>
    <ul>
        <li><NavLink className='menu' to= '/'>home</NavLink></li>
                    
                  
        <li><NavLink className='menu' to='AboutPage'>conoceme</NavLink></li>
  

        <li><NavLink className='menu' to='serviciosPage'>servicios</NavLink></li>

                    
        <li><NavLink className='menu' to='portafolio'>portafolio</NavLink></li>

        <li><NavLink className='menu' to='faq'>faq</NavLink></li>
                    
        <li><NavLink className='menu' to='contacto'>contacto</NavLink> </li>
                    
    </ul>

    <GoThreeBars className='hamburguesa'/>

            </nav>
        
    )
}

export { Navbar }