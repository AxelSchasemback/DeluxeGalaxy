import React from 'react'
import "./ItemList.css"
import { ItemCount } from '../ItemCount/ItemCount'



export const ItemListContainer = ({ title, img, titleCard, price }) => {
    const addCart = (count) => {  
        console.log(`agregaste: \n nombre: ${titleCard} \n precio: ${price} \n cantidad: ${count}`)
    }
    return (
        <div className='cardContent'>
            <h1 className='title'> {title} </h1>
            <div className='allCards'>
                <div className='card'>
                    <img src={img} alt="imagenPrueba" className="imgCard" />
                    <span className='titleCard'> {titleCard} </span>
                    <span className="priceCard">{price}</span>
                    <ItemCount stock={7} addCart={addCart}/>
                </div>
            </div>
        </div>
    )
}
