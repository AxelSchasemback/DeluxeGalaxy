import { React, createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (marca, name, id, precio, imgP, quantity) => {
        if (isInCart(id)) {
            const findCart = cart.find(producto => producto.id === id)
                findCart.cant = findCart.cant + quantity
                setCart([...cart])
        }
        else {
            setCart([...cart, { marca: marca, name: name, id: id, precio: precio, imgP: imgP, cant: quantity }])
        }
    }

    const clear = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id)

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))
    
    const cantTotal = () => cart.reduce((cantidad, product) => cantidad + product.cant, 0)

    const totalProducts = ( ) => cart.reduce((total, product) => total + ( product.cant * product.precio ), 0)

    return (
        <CartContext.Provider value={{
            cart,
            clear,
            isInCart,
            removeItem,
            addItem,
            cantTotal,
            totalProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider 