import React from 'react'
import './Item.css'
import { Link} from 'react-router-dom'


export const Item = ({item}) => {

    return (
        < div className='cardContent' >
            <div className='allCards'>
                <div className='card'>
                    <Link className='link' to={`/detail/${item.id}`}>
                    <img src={item.img} alt="imagenPrueba" className="imgCard" />
                    <button className='verProducto'>Ver Producto</button>
                    </Link>
                    <div className='namePrice'>
                    <span className='titleCard'>{item.marca} {item.nombre} </span>
                    <span className="priceCard">${item.precio}</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
