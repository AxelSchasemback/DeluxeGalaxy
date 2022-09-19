import { React, useState, useEffect } from 'react'
import Search from '../Search/Search';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Loading } from '../Loading/Loading';
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {
 
    const [productos, setProductos] = useState({})
    const [load, setLoad] = useState(true)
    setTimeout(() => setLoad(false), 1500)
    
    const { id } = useParams()
    
    useEffect(() => {
        const productdb = getFirestore()
        const prodcuctDoc = doc(productdb, 'productos', id)
        getDoc(prodcuctDoc)
        .then((res) => setProductos({ id:res.id, ...res.data()}))
    }, [id])

    return (
        <>
            <main className='mainContainerDetail'>
                <Search searchProd="Buscar Producto" />
                {load ? <Loading /> :
                    <div className='divContent'>
                        <ItemDetail producto={productos} />
                    </div>}
            </main>
        </>
    )
}
