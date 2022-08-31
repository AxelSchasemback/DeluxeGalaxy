import React from 'react'
import './Item.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({item}) => {
    return (
        < div className='cardContent' >
            <div className='allCards'>
                <div className='card'>
                    <img src={item.img} alt="imagenPrueba" className="imgCard" />
                    <span className='titleCard'>{item.nombre} </span>
                    <span className="priceCard">${item.precio}</span>
                    <ItemCount stock={item.stock} addCart={(count) => {
                        console.log(`agregaste: \n nombre: ${item.nombre} \n precio: ${item.precio} \n cantidad: ${count}`)
                    }} />
                </div>
            </div>
        </div >
    )
}
