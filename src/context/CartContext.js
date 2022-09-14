import { React, createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (marca, name, id, quantity) => {
        if (isInCart(id)) {
            setCart([...cart, { marca: marca, name: name, id: id, cant: quantity }])
        }
        else {
            setCart([{ marca: marca, name: name, id: id, cant: quantity }])
        }
    }

    console.log(cart)

    const clear = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id)

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    const totalProducts = () => cart.reduce((total, product) => total + product.quantity, 0)

    return (
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
            totalProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider 