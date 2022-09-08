import { React, useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({ stock, precio, boton }) => {
    const [count, setCount] = useState(1)

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
                <button className='botonComprar' onClick={(() => boton())}> Comprar </button>
                <span className='precioDetalle'>${precio}</span>
            </div>
        </div>
    )
}
