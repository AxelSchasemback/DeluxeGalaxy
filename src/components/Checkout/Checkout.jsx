import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import Search from '../Search/Search'
import './Checkout.css'
import { addDoc, collection} from 'firebase/firestore'
import db from '../../Firebase/firebase'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {

    const navegacion = useNavigate()

    const { cart, totalProducts, clear } = useCartContext()
    const [userId, setUserId] = useState()
    const [buyer, setBuyer] = useState({ Nombre: '', Email: '', Telefono: '' })

    const {Nombre, Email, Telefono} = buyer

    const handleInputChange = (e)  => {
        setBuyer(({
            ...buyer, 
            [e.target.name]: e.target.value
        }))
    }

    const generateOrder = async(data) => {
        try {
            
            const col = collection(db,"order")
            const order = await addDoc( col, data )
            setUserId( order.id )
            clear()

        } catch(error) {
            console.error(error)
        }      
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cart.map((e) => { return{ id: e.id, marca: e.marca, nombre: e.name, precio: e.precio, cant: e.cant }})
        const dia = new Date()
        const total = totalProducts()
        const data = {buyer, items, dia, total}
        console.log(data)
        generateOrder(data)
    }

    const cancel = () => {
        clear()
        navegacion('/cart')
    }

    return (
        <main className='mainContainerCart'>
            <Search searchProd="Buscar Producto" />
            {userId ?
            <h6 className='ordenCompra'> Su Orden de Compra es <span>{userId}</span></h6>
            :
            <form className='formContainer' onSubmit={handleSubmit}>
                <h2 className='segundoTitulo'>Completa tus Datos</h2>
                <div className='datosContainer'>
                    <div className='contInput'>
                        <h3 className='subTitulo'>Nombre y Apellido:</h3>
                        <input className='Fnombre input' type="text" name='Nombre' placeholder='Nombre y Apellido' value={Nombre} onChange={handleInputChange} />
                    </div>
                    <div className='contInput'>
                        <h4 className='subTitulo'>Correo Electronico:</h4>
                        <input className='Fmail input' type="text" name='Email' placeholder='Email@example.com' value={Email} onChange={handleInputChange} />
                    </div>
                    <div className='contInput'>
                        <h5 className='subTitulo'> Numero Telefono:</h5>
                        <input className='Fphone input' type="text" name='Telefono' placeholder='Telefono' value={Telefono} onChange={handleInputChange} />
                    </div>
                    <input className='finalBuy' type="submit" value="Finalizar Compra"/>
                    <button className='cancelBuy' onClick={cancel}>Cancelar Compra</button>
                </div>
            </form> }
        </main>
    )
}
