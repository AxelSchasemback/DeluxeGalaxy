import React, { useState } from 'react'
import './ItemCartContainer.css'
import Search from '../Search/Search'
import { ItemCart } from '../ItemCart/ItemCart'
import { Loading } from '../Loading/Loading'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const ItemCartContainer = () => {

  const [load, setLoad] = useState(true)
  setTimeout(() => setLoad(false), 1500)
  const { cart, clear, totalProducts } = useCartContext()

  return (
    <main className='mainContainerCart'>
      <Search searchProd="Buscar Producto" />
      {load ? <Loading />
        :
        <div className='divContentCart'>
          < div className='cardContentCart'>
            {cart.length ?
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
                {cart.map(productos => <ItemCart productos={productos} key={productos.id} />)}
                <tr>
                  <td className='totalCart'>
                    <p className='totalTitle'>
                      Total: ${totalProducts()}
                    </p>
                  </td>
                </tr>
                <div className='buttonContext'>
                  <button className='clearCart' onClick={(() => clear())}> Vaciar Carrito</button>
                  <button className='buyCart' onClick={(() => clear())}> Comprar</button>
                </div>
              </table>
              :
              <>
                <h2 className='cartVacio'> no tienes producto en tu carrito <Link to='/Home'>Click Aquí</Link> para volver a ver los Productos</h2>
              </>}
          </div>
        </div>
      }
    </main >
  )
}
