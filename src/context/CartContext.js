import { React, createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (marca, name, id, quantity, img, precio) => {
        if (isInCart(id)) {
            const findCart = cart.find(producto => producto.id === id)
                findCart.cant = findCart.cant + quantity
                setCart([...cart])
        }
        else {
            setCart([...cart, { marca: marca, name: name, id: id, cant: quantity, img: img, precio: precio }])
        }
    }

    console.log(cart)

    const clear = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id)

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    const totalProducts = () => cart.reduce((total, product) => total + (product.cant * product.precio), 0)

    console.log(totalProducts)
    return (
        <CartContext.Provider value={{
            cart,
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