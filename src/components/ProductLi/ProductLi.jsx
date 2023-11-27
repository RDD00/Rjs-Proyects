import { useEffect, useState } from "react"
import WidgetFunction from "../WidgetFunction/WidgetFunction"
import { mFetch } from "../../helpers/mFetch"
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"


const ProductLi = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'products')
      
    getDocs(queryCollection)
    .then(resp => setProducts(resp.docs.map(products => ({id: products.id, ...products.data() }) )))
    .catch(error => console.log(error))
  },[])

  return (
    <>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {
          products.map((product) =>       <div className="card m-3 w-25" key={product.id}> 
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
        
        </div>  
        
    </>
  )
}

export default ProductLi