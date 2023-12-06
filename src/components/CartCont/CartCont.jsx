import { addDoc, collection, getFirestore} from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext/CartContext"
import { CartP } from "../CartP/CartP"

export const CartCont = () => {
  
    const [isId, setIsId] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const {cartList, emptyCart, totalPrice} = useCartContext()

    const handleOrders = (evt) => {

        evt.preventDefault()
        const order = {}
        
        order.buyer = formData
        order.items = cartList.map(({id, price, name, cant}) => ( { id: id, price: price, name: name, cant: cant} ))
        order.total = totalPrice()

        const db = getFirestore()
        
        const queryCollection = collection(db, 'orders')
        
        addDoc(queryCollection, order)
        .then(({id}) => setIsId(id))
        .catch(error => console.log(error))
        .finally(() => {
            setFormData({
                name:'',
                phone:'',
                email:''
            })
            emptyCart()
        })

    }


    const handleOnChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }


    

    return (
        <>
            {isId !== '' && <h2>El id de la compra es: {isId}</h2>}
            {cartList.length === 0 ?
            <>
                <h2>No hay productos en el carrito</h2>    
                <Link to='/'>¡Vaya a comprar!</Link>
            </>
            :


            <div>
                { 
                    cartList.map((product) => <CartP key={product.id} product={product}/>)
                }

                {totalPrice() != 0 && <h3>Precio total: ${totalPrice()}</h3>}
                <br />

                <button onClick={emptyCart}>
                    Vaciar Carrito
                </button>
                <br />

                <form onSubmit={handleOrders}>
                    <label >Ingresar nombre:</label>
                    <input className="form-control" type="text" name="name" required onChange={handleOnChange} value={formData.name} /><br />
                    <label>Ingresar Teléfono: </label>
                    <input className="form-control" type="number" name="phone" required onChange={handleOnChange} value={formData.phone}/><br />
                    <label>Ingresar Email:</label>
                    <input className="form-control" type="email" name="email" required onChange={handleOnChange} value={formData.email}/><br />

                    <button>Terminar Compra</button>


                </form>
            </div>
            }

        </>
  )
}
