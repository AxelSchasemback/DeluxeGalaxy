import { Item } from '../../Productos/Item/Item'
import { useState, useEffect } from 'react'
import "./Search.css"
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../Firebase/firebase'


const Search = () => {

    const [productoBuscado, setProductoBuscado] = useState('')
    const [productList, setProductList] = useState([])

    const handlerInputChange = (e) => {
        setProductoBuscado(e.target.value.toLowerCase().trim())
    }


    const getProducts = async (productoBuscado) => {
        const document = collection(db, "productos")
        const coleccion = await getDocs(document)
        const productos = coleccion.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
        const buscadorProductos = productos.filter((prod) => prod.nombre.match(productoBuscado))
        setProductList(buscadorProductos)
    }

    useEffect(() => {
        getProducts(productoBuscado)
    }, [productoBuscado])
    
    console.log(productoBuscado)

    return (
        <>
            <div className='searchContent' >
                <span className="span-border"></span>
                <input className='search-input' type="text" placeholder="Busqueda"
                    onChange={(() => handlerInputChange)} />
            </div>
            {
                productList.map((items) => <Item item={items} key={items.id} />)
            }
        </>
    )
}

export default Search;

