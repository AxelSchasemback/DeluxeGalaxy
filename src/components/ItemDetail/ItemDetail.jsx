import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import "./ItemDetail.css"

export const ItemDetail = ({ producto }) => {
    const { nombre, marca, precio, descripcion, img, stock } = producto

    const [cart, setCart] = useState(false)

    const onAdd = () => {
        setCart(true)
    }

    return (
        <div className='containerDetail'>
            <h1 className='tituloDetail'>Estas Viendo {marca} {nombre}</h1>
            <div className='subContainer'>
                <img className='imagenDetail' src={img} alt={nombre} />
                <div className='containerDescripcion'>
                    <p className='tituloDetalle'>Detalles Del Producto</p>
                    <p className='detalle'>{descripcion}</p>
                    {cart ? (
                        <div className='buy'>
                            <Link className='linkCart' to='/cart'>
                            <button className='botonComprar'>Ir al Carrito</button>
                            </Link>
                            <span className='precioDetalle'>${precio}</span>
                        </div>
                    ) : (
                        <ItemCount stock={stock} precio={precio} boton={onAdd}/>
                    )}
                </div>
            </div>
        </div>
    )
}
