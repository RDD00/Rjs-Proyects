import { useEffect } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ProductDetailCont } from "../ProductDetailCont/ProductDetailCont"

export const Product = (product) => {
    
  return (
    <div className="card w-25" key={products.id}> 
                  <img src={products.imageURL} className="card-img-top"/>
                  <div className="card-body">
                    <h1>{products.name}</h1>
                    <p>Descripción: {products.description}</p>
                    <p>Precio: {products.price}</p>

                    <div className="card-footer">
                      <button className="btn btn-outline-primary w-100" onClick={<ProductDetailCont/>}>Detalle</button>
                    </div>
                    
                  </div>
    </div>
  )
}
