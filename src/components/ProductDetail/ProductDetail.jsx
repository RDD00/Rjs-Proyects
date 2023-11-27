import { useState } from "react"
import { useCartContext } from "../CartContext/CartContext"
import { ProductCounter } from "../ProductCounter/ProductCounter"
import { Link } from "react-router-dom"

export const ProductDetail = ({product}) => {
    const [isCount, setIsCount] = useState(true)
    const {addToCart} = useCartContext()

    const onAdd = cant => {
        console.log('cantidad seleccionada', cant)
        addToCart({...product, cant})
        setIsCount(false)
    }

    // console.log(product)
  return (
    <div className="row">
            <div className="col-6 mt-5">
                <img src={product.imageUrl} alt={product.description} className="img-fluid"/>
            </div>
            <div className="col-6 text-center mt-5">

                <p>Nombre: {product.name}</p>
                <p>Categoría: {product.category}</p>
                <p>Precio: ${product.price}</p>
                {
                        isCount ? 
                            <ProductCounter initial={1} stock={5} onAdd={onAdd}/> 
                        : 
                            <>
                                <Link className="btn btn-outline-dark " to='/cart'>Ir al cart</Link>
                                <Link className="btn btn-outline-dark " to='/'>Ir al Home</Link>
                            </>
                    }
            </div>            
        </div>
  )
}
