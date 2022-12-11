import React from 'react';
import './header.css'

import { Navbar } from '../00Navbar';
import { Logo } from '../000Logo';
import { SocialMedia } from '../000SocialMedia';




const Header = () => {
    return(
        <div id='head' className='headerContainer'>
           
           
            <Logo/>
            <Navbar/>
            <SocialMedia/>
            
            

        </div>
    )
}

export { Header }