import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ProductLi from "../ProductLi/ProductLi"
import { Loading } from '../Loading/Loading'

const ProductLiCont = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()
  
  
  useEffect (()=>{
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'products')
    
    const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection
    
    getDocs(queryFilter)
    .then(resp => { setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))) })
    .catch(error => console.log(error))
    .finally(()=> setLoading(false))
  }, [cid])
  


  return (
    <>
      { loading ? 
          
          <Loading/>
          :
          <ProductLi products={products}/>
      }
    </>
    
  )
}

export default ProductLiCont

