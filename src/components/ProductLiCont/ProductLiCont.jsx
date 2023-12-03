import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"
import ProductLi from "../ProductLi/ProductLi"
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

const ProductLiCont = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()
  
  useEffect(()=>{

    const dbFirestore = getFirestore() //traeme fireStore
    const queryCollection = collection(dbFirestore, 'products')
    
    const queryFilter     = cid ? query(queryCollection, where("category", "==", cid)) : queryCollection

    getDocs(queryFilter)
    .then(resp => {setProducts( resp.docs.map( product => ({id: product.id, ...product.data()}) ))})
    .catch(error => console.log(error))
    .finally(()=>setLoading(false))
  }, [cid])

  const handleAddProduct = () => {
    setProducts([
      ...products,
      // {id: products.length+1, name:}
    ])
  }


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

