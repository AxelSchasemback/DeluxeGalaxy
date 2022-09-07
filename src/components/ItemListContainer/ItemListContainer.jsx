import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList'
import Search from '../Search/Search';
import './ItemListContainer.css'
import { SubNavbar } from '../SubNavbar/SubNavbar';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [productoCategoria, setProductoCategoria] = useState([])
    const { marca } = useParams()

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

    const getCategory = () => new Promise((res, rej) => {
        setProductoCategoria(productos.filter((buscar) => buscar.marca === marca))
    })

    useEffect(() => {
        getCategory()
            .then((producto) => setProductoCategoria(producto))
            .catch((error) => console.error(error))
    }, [marca])

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
            <h1 className='titleProduct'>Productos</h1>
            <div className='divContent'>
                <SubNavbar categoria={productos} />
             {marca ? <ItemList list={productoCategoria}/> : <ItemList list={productos} />}   
            </div>
        </main>
    )
}