import { ProductCounter } from "../ProductCounter/ProductCounter"

export const ProductDetail = ({product}) => {
    
    const onAdd = cant => {
        console.log('Cantidad seleccionada: ', cant)
    }

    // console.log(product)
  return (
    <div className="row">
            <div className="col-6 mt-5">
                <img src={product.imageUrl} alt="" className="img-fluid"/>
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
