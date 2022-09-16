import React from 'react'
import './ItemCart.css'
import { useCartContext } from '../../context/CartContext'

export const ItemCart = ({ productos }) => {

    const { name, marca, cant, id, img, precio } = productos

    const { removeItem, totalProducts } = useCartContext()

    return (
        <tr className='cardCart' key={id}>
            <div className='tableData'>
                <td className='tdProducto'>
                    <img src={img} alt="imagenPrueba" className="imgCardCart" />
                    <span className='titleCardCart'>{marca} {name} </span>
                </td>
                <td className='tdPrecio'>
                    <span className="priceCardCart">${precio}</span>
                </td>
                <td className='tdCant'>
                    <span className='cantidad'>{cant}</span>
                </td>
                <td className='tdSubTotal'>
                    <span className='subTotal'> $99999</span>
                </td>
                <button className='quitarProducto show' onClick={(() => removeItem(id))}>x</button>
            </div>
            <td className='totalCart'>
                <p className='totalTitle'>
                    Total: ${totalProducts()}
                </p>
            </td>
        </tr>
    )
}
