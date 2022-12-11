import React from 'react';
import './Logo.css'
import logoweb from '../../assets/logoweb.png'

const Logo = () => {
    return(
        <div className='logoContainer'>

            <img className='logo' src={logoweb} alt="" />
        </div>
    )
}

export { Logo }