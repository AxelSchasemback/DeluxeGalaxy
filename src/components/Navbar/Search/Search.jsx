import { ItemList } from '../../Productos/ItemList/ItemList'
import { useState, useEffect } from 'react'
import "./Search.css"
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../Firebase/firebase'


const Search = () => {

    const [productoBuscado, setProductoBuscado] = useState('')
    const [productos, setProductos] = useState([])

    const handlerInputChange = (e) => {
        setProductoBuscado(e.target.value.toLowerCase().trim())
        console.log(productoBuscado)
    }


    const getProducts = async (buscador) => {
        const document = collection(db, "Items")
        const coleccion = await getDocs(document)
        const ItemsProduct = coleccion.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
        const buscadorProductos = ItemsProduct.filter((prod) => prod.nombre.toLowerCase() === buscador)
        setProductos(buscadorProductos)
    }

    useEffect(() => {
        getProducts(productoBuscado)
    }, [productoBuscado])


    return (
        <>
            <div className='searchContent' >
                <span className="span-border"></span>
                <input className='search-input' type="text" placeholder="Busqueda" onChange={() => handlerInputChange} />
            </div>
            <main className='mainContainer'>
                <div className='divContent'>
                    <ItemList list={productos} />
                </div>
            </main>
        </>
    )
}

export default Search;

