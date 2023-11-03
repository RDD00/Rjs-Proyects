import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ProductLiCont from './components/ProductLiCont/ProductLiCont'
import { ProductDetailCont } from './components/ProductDetailCont/ProductDetailCont'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const onAdd = cant => {
  console.log('cantidad seleccionada: ' + cant)
}



function App() {

  return (
    <BrowserRouter>
    
      <NavBar/>

      <Routes>

        <Route path='/' element={<ProductLiCont/>} />
        <Route path='/category/:cid' element={<ProductLiCont/>}/>
        <Route path='/detail/:pid' element={<ProductDetailCont/>}/>

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>

      
    </BrowserRouter>
  )
}

export default App
