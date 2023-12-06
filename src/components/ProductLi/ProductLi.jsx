import { useEffect, useState } from "react"
import WidgetFunction from "../WidgetFunction/WidgetFunction"
import { mFetch } from "../../helpers/mFetch"
import { Link, useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { Product } from "../Product/Product"


const ProductLi = ({products}) => {

  return (
    <>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {
          products.map(product => <Product key={product.id} product={product}/>)
          }
        </div>  
        
    </>
  )
}

export default ProductLi