import { useEffect, useState } from "react"
import WidgetFunction from "../WidgetFunction/WidgetFunction"
import { mFetch } from "../../helpers/mFetch"
import { Link } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Product } from "../Product/Product"


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
          products.map((product) => <Product key={product.id} product={product}/>)
          }
        </div>  
        
    </>
  )
}

export default ProductLi