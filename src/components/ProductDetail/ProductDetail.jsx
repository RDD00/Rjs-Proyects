import { ProductCounter } from "../ProductCounter/ProductCounter"

export const ProductDetail = ({product}) => {
    
    const onAdd = cant => {
        // <div className="row">
        //     <div className="row-6 mt-5">
        //         <img src={product.imageUrl} alt={product.description} className="img-fluid"/>
        //     </div>

        //     <div className="row-6 mr-5">
        //         <p>Category: {product.category}</p>
        //         <p>Precio: {product.price}</p>
        //         <p>Nombre: {product.name}</p>
        //     </div>
                
        // </div>
        addToCart({...product, cant})
    }

    // console.log(product)
  return (
    <div className="row">
            <div className="col-6 mt-5">
                <img src={product.imageUrl} alt={product.description} className="img-fluid"/>
            </div>
            <div className="col-6 text-center mt-5">

                <p>Nombre: {product.name}</p>
                <p>Category: {product.category}</p>
                <p>Precio: {product.price}</p>
                <ProductCounter initial={1} stock={5} onAdd={onAdd}/>
            </div>            
        </div>
  )
}
