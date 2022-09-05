import React from 'react'
import './Navbar.css';
import { Link} from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget';


function Navbar() {
  return (
      <div className='containerNav'>
      <header className='header'>
        <nav className="nav-bar">
          <Link className='linkHome' to="/home">
          <span className="logo">Deluxe.Arg</span>
          </Link>
          <div>
            <ul className="seccion">
              <Link className='linkHome' rel="stylesheet" to="/Home">
              <li className='secc-list'>Productos</li>
              </Link>
              <li className='secc-list'>Combos</li>
              <li className='secc-list'>Mi cuenta</li>
              <li className='secc-list'>Ayuda</li>
            </ul>
          </div>
          <CartWidget/>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;



