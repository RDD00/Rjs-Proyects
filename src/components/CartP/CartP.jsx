import React from 'react'
import { useCartContext } from '../CartContext/CartContext'

export const CartP = ({product}) => {

    const {removePCart} = useCartContext()

    const handleRemovePCart = (prodID) => {
        removePCart(prodID)
    }

  return (
    <div className="w-50 flex-row" key={product.id}>
        <div className="w-50">
            <img src={product.imageUrl} alt={product.description}/>
        <div/>

        <div>
            <p>Nombre: {product.name}</p>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.cant}</p>
        </div>

            <button onClick={() => handleRemovePCart(product.id)}>X</button>

        </div>
    </div>
  )
}
