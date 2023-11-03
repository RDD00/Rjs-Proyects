import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetchId } from "../../helpers/mFetch"
import { ProductDetail } from "../ProductDetail/ProductDetail"

export const ProductDetailCont = () => {
    const [ product, setProduct ] = useState({})
    const { pid } = useParams()
    
    useEffect(()=>{
        mFetchId(pid)
        .then(result=>setProduct(result))
        .catch(error=>console.log(error))
    })


    
    return (
        <ProductDetail product={product}/>
  )
}

