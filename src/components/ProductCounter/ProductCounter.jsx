import { useCounter } from '../hooks/useCounter'




export const ProductCounter = ({initial=1, stock=10, onAdd}) => {
    
    const {count, handleAdd, handleSubstract} = useCounter(initial,stock)

    const handleOnAdd = () =>{
        onAdd(count)
    }

  return (
    <div>
        <div>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={handleAdd} className='btn btn-outline-primary m-1'>+</button>
            <button onClick={handleSubstract} className='btn btn-outline-primary m-1'>-</button>
            <button onClick={handleOnAdd} className='btn btn-outline-primary m-1'>Añadir al Carrito</button>
        </div>
    </div>
  )
}
