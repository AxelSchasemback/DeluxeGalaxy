import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

export const Category = () => {

    return (
        <div className='category'>
            <Link to="/category/Motorola">
                <span>Motorola</span>
            </Link>
            <Link to="/category/Samsung">
                <span>Samsung</span>
            </Link>
            <Link to="/category/Xiaomi">
                <span>Xiaomi</span>
            </Link>
            <Link to="/category/ZTE">
                <span>ZTE</span>
            </Link>
            <Link to="/category/TCL">
                <span>TCL</span>
            </Link>
        </div>
    )
}
