import { useCartContext } from "../CartContext/CartContext"


export const CardWidget = () => {

  const {numWidget} = useCartContext()
  
  return (
    <div>
        <p> <strong>{numWidget()}</strong> 🛒</p> 
    </div>
  )
}
