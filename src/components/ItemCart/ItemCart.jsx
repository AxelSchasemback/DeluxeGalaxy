import React from 'react'
import './ItemCart.css'

export const ItemCart = ({ productos }) => {

   const { name, marca, cant, id, img, precio} = productos

   console.log(productos)

   return (
    < div className='cardContent' key={id}>
        <div className='allCards'>
            <div className='card'>
                <img src={img} alt="imagenPrueba" className="imgCard" />
                <button className='verProducto'>quitar producto</button>
                <div className='namePrice'>
                <span className='titleCard'>{marca} {name} </span>
                <span className="priceCard">${precio}</span>
                <span className='cantidad'>{cant}</span>
                </div>
            </div>
        </div>
    </div >
)
}
