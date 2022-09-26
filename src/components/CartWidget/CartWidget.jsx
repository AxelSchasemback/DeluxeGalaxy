import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useCartContext } from '../../context/CartContext'


export const CartWidget = () => {

    const { cantTotal } = useCartContext()
    
    return (
        <>
        <Link className={cantTotal() > 0 ? 'linkCart' : 'linkNone'} to='/cart'>
            <div className='cartContent'>
                <AiOutlineShoppingCart className='cart' />
                <span className='cartCant'>{cantTotal()}</span>
            </div>
        </Link>
        </>
    )
}
