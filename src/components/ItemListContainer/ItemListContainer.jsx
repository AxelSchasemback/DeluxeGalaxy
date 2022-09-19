import { React, useState, useEffect } from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList'
import Search from '../Search/Search';
import { Loading } from '../Loading/Loading';
import './ItemListContainer.css'
import { SubNavbar } from '../SubNavbar/SubNavbar';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [productoCategoria, setProductoCategoria] = useState([])
    const [load, setLoad] = useState(true)
    setTimeout(() => setLoad(false), 2000)


    const { marca } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection(db, "productos");
        if (marca) {
            const productFilter = query(itemCollection, where('marca', '==', marca))
            getDocs(productFilter)
                .then((res) => setProductoCategoria(res.docs.map((product) => ({ id: product.id, ...product.data() }))))
                .catch((error) => console.error(error))
        }
        else {
            getDocs(itemCollection)
                .then((res) => setProductos(res.docs.map((product) => ({ id: product.id, ...product.data() }))))
                .catch((error) => console.error(error))
        }
    }, [marca])

    return (

        <main className='mainContainer'>
            <Search product={productos} />
            {load ? <Loading /> :
                <>
                    <h1 className='titleProduct'>Productos</h1>
                    <div className='divContent'>
                        <SubNavbar categoria={productos} />
                        {marca ? <ItemList list={productoCategoria} /> : <ItemList list={productos} />}
                    </div>
                </>
            }
        </main>
    )
}