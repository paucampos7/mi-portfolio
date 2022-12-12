import { useState } from 'react'

import './App.css'
import { Header} from './components/01Header/index'
import { Main } from './components/13Main/index'
import { Footer} from './components/12Footer/index'

import {BrowserRouter,Routes, Route,} from 'react-router-dom'

import { Home,AboutPage,ServiciosPage,Portafolio, Faq, ContactoPage,Error404 } from './pages/index' 



function App() {
  

  return (
    <div className="App">
       
      
  <BrowserRouter>

     <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutPage' element={<AboutPage/>} />
        <Route path='/serviciosPage' element={<ServiciosPage/>}/>
        <Route path='/portafolio' element={<Portafolio/>}/> 
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/contacto' element={<ContactoPage/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>

  </BrowserRouter>
 
  <Footer/>
    </div>
  )
}

export default App
