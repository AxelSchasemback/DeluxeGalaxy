import { React, useState, useEffect } from 'react'
import Search from '../Search/Search';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const { id } = useParams()

    function consultPromise(confirm) {
        return new Promise((res, rej) => {
            if (confirm) {
                res(productos)
            } else {
                rej("reject")
            }

        })
    }


    const [productos, setProductos] = useState({})
    useEffect(() => {

        consultPromise(true)

        
        fetch("../json/data.json")
        .then((res) => res.json())
        
        .then((data) => {
            data = data.productos
            setProductos(data.find((producto) => producto.id === Number(id)))
        })
        
        
        .catch((error) => console.error(error))
        
        
    }, [id])
    
    return (
        <main className='mainContainerDetail'>
            <Search searchProd="Buscar Producto" />
            <div className='divContent'>
                <ItemDetail producto={productos} />
            </div>
        </main>
    )
}
