import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext/CartContext"

export const CartCont = ({product}) => {
  
    // const {cartList, vaciarCarrito] = useCartContext()
    const [isId, setIsId] = useState({})

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email:''
    })

    const {cartList, emptyCart, totalPrice } = useCartContext()

    const handleOrders = (evt) => {

        evt.preventDefault()
        const order = {}
        order.buyer = {name: 'román', phone: '01-2345-6789', email: 'r@gmail.com'}
        order.items = cartList.map((id, price, name, cant) => ( { id: id, price: price, name: name, cant: cant} ))
        order.total = totalPrice()

        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')
        addDoc(queryCollection, order)
        .then(({id}) => setIsId(id))
        .catch(error => console.log(error))
        .finally(setFormData(
            
        ))

        // podemos: 1- crear un fomulario (cree productos) - dash admin
        //          for - suben muchos productos


        /// update - actualizar eNxKY1gWVXU65kjCkL7v
        // const queryDoc = doc(db, 'products', 'eNxKY1gWVXU65kjCkL7v')
        
        // updateDoc(queryDoc, {
            //     stock: '90'
            // })
            // .then(()=>console.log('producto actualizado'))
            // .catch(err => console.log(err))
            
            
        // escritura por lotes
        // const batch = writeBatch(db)

        // const queryUpdateProduct1 = doc(db, 'products', 'eNxKY1gWVXU65kjCkL7v')
        // const queryUpdateProduct2 = doc(db, 'products', 'dq0aoBUvNky8JbowPmYC')

        // batch.update(queryUpdateProduct1, {stock: 50})
        // batch.update(queryUpdateProduct2, {stock: 90})

        // batch.commit()

        // console.log('Enviando orden: ', order)
    }



    const finishOrder = () => {
        const order = {
            buyer: {name: 'román', phone: '01-2345-6789', email: 'r@gmail.com'},
            items: [{}, {}],
            total: '',
        }
    }

    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.name
        })
    }

    return (
        <>
            {isId ==! '' && <h2>El id de la compra es {isId}</h2>}
            {cartList.length === 0 ?
            <>
                <h2>No hay productos en el carrito</h2>    
                <Link to='/'></Link>
            </>
            :


            <div>
                { cartList.map(product =>   <div key={product.id}>
                                                <img src={product.imageUrl} alt={product.description}/>
                                                <p>{product.name}</p>
                                                <p>{product.price}</p>
                                                <p>{product.cant}</p>

                                                <button >X</button>

                                            </div>)

                }
                Precio Total: {totalPrice()}
                {/* <br />

                <button onClick={emptyCart}>
                    Vaciar Carrito
                </button>
                <br />

                <form onSubmit={handleOrders}>
                    <label >Ingresar nombre:</label>
                    <input type="text" name="name" required onChange={handleOnChange} value={formData.name} /><br />
                    <label>Ingresar Teléfono: </label>
                    <input type="number" name="phone" required onChange={handleOnChange} value={formData.phone}/>
                    <label>Ingresar Email:</label>
                    <input type="text" name="email"required onChange={handleOnChange} value={formData.email}/>

                    <button onClick={finishOrder}>Terminar Compra</button>


                </form> */}
            </div>}

        </>
  )
}
