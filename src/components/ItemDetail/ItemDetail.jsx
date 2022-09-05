import React from 'react'
import "./ItemDetail.css"

export const ItemDetail = ({ producto }) => {
    const { nombre, marca, precio, descripcion, img } = producto
    return (
        <div className='containerDetail'>
            <h1 className='tituloDetail'>Estas Viendo {marca} {nombre}</h1>
            <div className='subContainer'>
                <img className='imagenDetail' src={img} alt={nombre} />
                <div className='containerDescripcion'>
                    <p className='tituloDetalle'>Detalles Del Producto</p>
                    <p className='detalle'>{descripcion}</p>
                    <div className='buy'>
                        <button className='botonComprar'>Comprar</button>
                        <span className='precioDetalle'>${precio}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
