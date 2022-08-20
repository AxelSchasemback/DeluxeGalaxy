import React from 'react'
import './Navbar.css';
// import Search from '../Search/Search';
import { CartWidget } from '../CartWidget/CartWidget';

function Navbar() {
  return (
      <div className='containerNav'>
      <header className='header'>
        <nav className="nav-bar">
          <span className="logo">Deluxe.Arg</span>
          {/* <img className='logo' src="./img/deluxeLogo.png" alt="logo" /> */}
          <div>
            <ul className="seccion">
              <li className='secc-list'>Productos</li>
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



