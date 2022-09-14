import React from 'react'
import './ItemCartContainer.css'
import Search from '../Search/Search'
import  { ItemCart }  from '../ItemCart/ItemCart'
import { useCartContext } from '../../context/CartContext'

export const ItemCartContainer = () => {

    const { cart } = useCartContext()
  console.log(cart)
  return (
    <main className='mainContainerCart'>
    <Search searchProd="Buscar Producto" />
    <div className='divContentCart'>
        {cart.map((productos) => {
            <ItemCart productos={productos} key={productos.id} />
        })}
    </div>
</main>
  )
}
