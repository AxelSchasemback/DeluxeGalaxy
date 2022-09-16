import React from 'react'
import './ItemCartContainer.css'
import Search from '../Search/Search'
import { ItemCart } from '../ItemCart/ItemCart'
import { useCartContext } from '../../context/CartContext'

export const ItemCartContainer = () => {

  const { cart, clear } = useCartContext()

  return (
    <main className='mainContainerCart'>
      <Search searchProd="Buscar Producto" />
      <div className='divContentCart'>
        < div className='cardContentCart'>
          <table className='allCardsCart'>
            <thead className='tableHead'>
              <tr>
                <th className='thProducto'>
                  producto
                </th>
                <th className='thPrecio'>
                  precio
                </th>
                <th className='thCant'>
                  cantidad
                </th>
                <th className='thSubTotal'>
                  subtotal
                </th>
              </tr>
            </thead>
            {cart.length ?
              <>
                {cart.map(productos => <ItemCart productos={productos} key={productos.id} />)}
                <div className='buttonContext'>
                  <button className='clearCart' onClick={(() => clear())}> Vaciar Carrito</button>
                  <button className='buyCart' onClick={(() => clear())}> Comprar</button>
                </div>
              </>
              :
              <h2 className='cartVacio'> no tienes producto en tu carrito </h2>}
          </table>
        </div >
      </div>
    </main >
  )
}
