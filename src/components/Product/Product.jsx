import { useEffect } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ProductDetailCont } from "../ProductDetailCont/ProductDetailCont"

export const Product = ({product}) => {
    
  return (
    <div className="card w-25" key={product.id}> 
                  <img src={product.imageURL} className="card-img-top"/>
                  <div className="card-body">
                    <h1>{product.name}</h1>
                    <p>Descripción: {product.description}</p>
                    <p>Precio: {product.price}</p>

                    <div className="card-footer">
                      <button className="btn btn-outline-primary w-100" onClick={<ProductDetailCont/>}>Detalle</button>
                    </div>
                    
                  </div>
    </div>
  )
}
