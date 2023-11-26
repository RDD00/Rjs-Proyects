import React, { useEffect, useState } from 'react'
import ProductLi from "../ProductLi/ProductLi"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading'

const ProductLiCont = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()
  
  useEffect(()=>{
    // const dbFirestore = getFirestore() //traeme fireStore

    //traer uno
    // const queryDoc    = doc(dbFirestore, 'products', '7glLIkQcNYDx0DO0tdyv')
    // getDoc(queryDoc) //promesa
    // .then(response =>setProduct( {  id: response.id, ...response.data() } ))
    // .catch(error => console.log(error))
    // console.log(product)


    //traer muchos
    // const queryCollection = collection(dbFirestore, 'products')
    
    // getDocs(queryCollection)
    // .then(resp => setProducts(resp.docs.map(products => ({id: products.id, ...products.data() }) )))
    // .catch(error => console.log(error))
    // .finally(()=>setLoading(false))

    //filtrado
    const dbFirestore = getFirestore() //traeme fireStore
    const queryCollection = collection(dbFirestore, 'products')
    
    const queryFilter     = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection

    getDocs(queryFilter)
    .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data() }) )))
    .catch(error => console.log(error))
    .finally(()=>setLoading(false))
  }, [cid])

  console.log(cid)


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

