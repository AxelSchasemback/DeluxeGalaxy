import React from 'react'
import './Item.css'
import { Link} from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({item}) => {

    return (
        < div className='cardContent' >
            <div className='allCards'>
                <div className='card'>
                    <Link className='link' to={`/detail/${item.id}`}>
                    <img src={item.img} alt="imagenPrueba" className="imgCard" />
                    <button className='verProducto'>Ver Producto</button>
                    </Link>
                    <span className='titleCard'>{item.marca} {item.nombre} </span>
                    <span className="priceCard">${item.precio}</span>
                    <ItemCount stock={item.stock} addCart={(count) => {
                        console.log(`agregaste: \n marca: ${item.marca} \n nombre: ${item.nombre} \n precio: ${item.precio} \n cantidad: ${count}`)
                    }} />
                </div>
            </div>
        </div >
    )
}
