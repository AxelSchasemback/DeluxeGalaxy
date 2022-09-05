import { React, useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import Search from '../Search/Search';
import './ItemListContainer.css'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        consultPromise(true)

        fetch("./json/data.JSON")


            .then((res) => res.json())


            .then((data) => {
                data = data.productos
                setProductos(data)
            })

            .catch((error) => console.error(error))

    }, [])


    function consultPromise(confirm) {
        return new Promise((res, rej) => {
            if (confirm) {
                res(productos)
            } else {
                rej("reject")
            }

        })
    }
    return (

        <main className='mainContainer'>
            <Search searchProd="Buscar Producto" />
            <div className='divContent'>
                <ItemList list={productos} />
            </div>
        </main>
    )
}