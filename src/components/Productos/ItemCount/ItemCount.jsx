import { React, useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({ stock, precio, boton }) => {
    //depenediendo la cantidad del stock del producto vamos a poder sumar o restar la cantidad de Count

    const [count, setCount] = useState(1)

    // count no puede ser menor ni mayor al stock asignado al producto
    const addCant = () => {
        if (count < stock) { setCount(count + 1) }
    }

    const remCant = () => {
        if (count > 1) { setCount(count - 1) }
    }

    return (
        <div className='itemCount-container'>
            <p className='stock'>stock: {stock}</p>
            <div className='itemCount'>
                <button className='res' onClick={() => remCant()}>
                    -
                </button>
                <h2>{count}</h2>
                <button className='sum' onClick={() => addCant()}>
                    +
                </button>
            </div>
            <div className='buy'>
                <button className='botonComprar' onClick={(() => boton(count))}> Comprar </button>
                <span className='precioDetalle'>${precio}</span>
            </div>
        </div>
    )
}
