import { useState } from 'react'

import './App.css'
import { Header} from './components/01Header/index'
import { Main } from './components/13Main/index'
import { Footer} from './components/12Footer/index'

import { Portafolio } from './pages/portafolio/index'
import { Faq } from './pages/Faq/index'
import { ContactoPage } from './pages/Contacto/Index'
import { ServiciosPage } from './pages/Servicios'
import { AboutPage } from './pages/About'
import { ResumePage } from './pages/Resume'

import {BrowserRouter,Routes, Route,} from 'react-router-dom'




function App() {
  

  return (
    <div className="App">
       
      
  <BrowserRouter>
     <Header/>
    
      <Routes>
        <Route path='/' element={<Main/>} />

        <Route path='/AboutPage' element={<AboutPage/>} />

        {/* <Route path='/ResumePage' element={<ResumePage/>} /> */}

        <Route path='/serviciosPage' element={<ServiciosPage/>}/>

        <Route path='/portafolio' element={<Portafolio/>}/> 

        <Route path='/faq' element={<Faq/>}/>

        <Route path='/contacto' element={<ContactoPage/>}/>
          

      </Routes>

  </BrowserRouter>
 

      
  <Footer/>
    </div>
  )
}

export default App
