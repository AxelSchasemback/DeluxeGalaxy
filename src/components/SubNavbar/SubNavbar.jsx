import React from 'react'
import './SubNavbar.css'
import { Link } from 'react-router-dom'

export const SubNavbar = () => {

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
            <Link to="/category/Apple">
                <span>Apple</span>
            </Link>
            <Link to="/category/Huawei">
                <span>Huawei</span>
            </Link>
            <Link to="/category/TCL">
                <span>TCL</span>
            </Link>
        </div>
    )
}