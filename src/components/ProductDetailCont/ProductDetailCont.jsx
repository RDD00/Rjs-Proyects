import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductDetail } from "../ProductDetail/ProductDetail"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { Loading } from "../Loading/Loading"

export const ProductDetailCont = () => {
    const [ product, setProduct ] = useState({})
    const [loading, setLoading] = useState(true)
    const { pid } = useParams()
    
    useEffect(()=>{
        const dbFirestore = getFirestore() //traeme fireStore
    
        //traer uno
        const queryDoc    = doc(dbFirestore, 'products', pid)
        getDoc(queryDoc) //promesa
        .then(response =>setProduct( {  id: response.id, ...response.data() } ))
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))

      }, [pid])


      


    
    return (
      <>
      {loading ?
        <Loading/>
      :
        <ProductDetail product={product}/>}
      </>
  )
}

