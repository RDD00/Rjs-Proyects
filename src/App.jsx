import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './components/NavBar/NavBar'
import ProductLiCont from './components/ProductLiCont/ProductLiCont'
import { ProductDetailCont } from './components/ProductDetailCont/ProductDetailCont'
import { CartCont } from './components/CartCont/CartCont'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './components/CartContext/CartContext'

const onAdd = cant => {
  console.log('cantidad seleccionada: ' + cant)
}



function App() {

  return (
    <CartContextProvider>
        <BrowserRouter>
        
          <NavBar/>

          <Routes>

            <Route path='/' element={<ProductLiCont/>} />
            <Route path='/category/:cid' element={<ProductLiCont/>}/>
            <Route path='/detail/:pid' element={<ProductDetailCont/>}/>
            <Route path='/cart' element={<CartCont/>}/>
            <Route path='*' element={<Navigate to='/'/>}/>

          </Routes>

          
        </BrowserRouter>
    </CartContextProvider>

  )
}

export default App
