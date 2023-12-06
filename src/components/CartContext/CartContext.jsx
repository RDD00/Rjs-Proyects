import { createContext, useContext, useState } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext (CartContext)


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {

      const productIndex = cartList.findIndex(p => p.id == product.id)
      if (productIndex == -1){
        setCartList([ ...cartList,
                      product
                    ])
        
      }else{
        cartList[productIndex].cant += product.cant
        setCartList([...cartList])
      }
    }

    const removePCart = (prodID) => {
      setCartList((prevCartList) => prevCartList.filter(((product) => product.id !== prodID)))
    }

    const numWidget = () => {
      
        return cartList.reduce((total, { cant }) => total + cant, 0)}

    const emptyCart = () => {setCartList([])}

    const totalPrice = () => cartList.reduce((total, productObj) => total = total + (productObj.cant * productObj.price), 0)
    
    return (
        <CartContext.Provider value={{cartList, addToCart, emptyCart, totalPrice, removePCart, numWidget}}>
          {children}
        </CartContext.Provider>
  )
}
