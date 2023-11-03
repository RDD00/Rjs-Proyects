import React, { useEffect, useState } from 'react'
import ProductLi from "../ProductLi/ProductLi"
import { mFetch } from '../../helpers/mFetch'
import { useParams } from 'react-router-dom'

const ProductLiCont = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {cid} = useParams()


  useEffect(()=>{
    if(cid){
      mFetch()
      .then(result => setProducts(result.filter(product=> product.category === cid)))
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
    }else{
      mFetch()
      .then(result => setProducts(result))
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
    }
  }, [cid])
  // console.log(products)


  return (
    <div className='d-flex justify-content-center align-items-center'>
      { loading ? <h1 className="d-flex justify-content-center">Cargado...</h1>
        :
        <ProductLi products={products}/>
      }
    </div>
    
  )
}

export default ProductLiCont
