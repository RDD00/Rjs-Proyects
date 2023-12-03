
import { Link } from "react-router-dom"

export const Product = ({product}) => {
    
  return (
    <div className="card m-3 w-25" key={product.id}> 
      <img src={product.imageUrl} className="card-img-top"/>
      <div className="card-body">
        <h1>{product.name}</h1>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>

        <div className="card-footer">
          <Link to={`/detail/${product.id}`}>
            <button className="btn btn-outline-primary w-100">Detalle</button>
          </Link>
                                                
        </div>
                                              
      </div>
    </div>
  )
}
