import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './components/NavBar/NavBar'
import Titulo from './components/Titulo/Titulo'
import ProductLiCont from './components/ProductLiCont/ProductLiCont'
import './App.css'
import './components/NavBar/NavBar.css'
import './components/ProductLiCont/ProductLiCont.css'
import './components/Titulo/Titulo.css'

function App() {

  return (
    <>
      <NavBar/>
      <Titulo tituloApp='Local de Ropa' subTituloApp='Variedad de ropa para todos' />
      <ProductLiCont/>
    </>
  )
}

export default App
