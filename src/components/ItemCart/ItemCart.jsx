import React from 'react'
import './ItemCart.css'
import { useCartContext } from '../../context/CartContext'

export const ItemCart = ({ productos }) => {

    const { name, marca, cant, id, img, precio } = productos

    const { removeItem } = useCartContext()

    const totalSuma = precio * cant

    return (
        <tr className='cardCart' key={id}>
            <div className='tableData show'>
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
                    <span className='subTotal'> ${totalSuma}</span>
                </td>
                <button className='show quitarProducto' onClick={(() => removeItem(id))}>x</button>
            </div>
        </tr>
    )
}
