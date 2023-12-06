import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ProductLiCont from './components/ProductLiCont/ProductLiCont'
import { ProductDetailCont } from './components/ProductDetailCont/ProductDetailCont'
import { CartCont } from './components/CartCont/CartCont'
import { CartContextProvider } from './components/CartContext/CartContext'

import 'bootstrap/dist/css/bootstrap.min.css';


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
