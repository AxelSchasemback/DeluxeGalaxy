import React from 'react'
import './CartWidget.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CartWidget = () => {
    return (
        <div className='cartContent'>
                <AiOutlineShoppingCart className='cart'/>
                <span className='cartCant'>0</span>
        </div>
    )
}
