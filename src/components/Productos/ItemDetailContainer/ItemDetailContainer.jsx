import { React, useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { Loading } from '../../Utils/Loading/Loading';
import './ItemDetailContainer.css'
import db from '../../../Firebase/firebase';

export const ItemDetailContainer = () => {
 
    const [productos, setProductos] = useState({})     //guardamos el producto traido
    const [load, setLoad] = useState(true)             //simulacion de Loading
    setTimeout(() => setLoad(false), 1500)
    
    const { id } = useParams()
    
    const getSelected = async (id) => {             //la id traida por el useParams
        const prodcuctDoc = doc(db, 'Items', id)    //llamada a la bbd en la coleccion de Items(productos), buscamos la id del producto y lo traemos
        const res = await getDoc(prodcuctDoc)
        const result = { id: res.id, ...res.data()}
        setProductos(result)
    } 
    
    useEffect(() => {                               
        getSelected(id)
    }, [id])

    return (
        <>
            <main className='mainContainerDetail'>
                {load ? <Loading /> :
                    <div className='divContent'>
                        <ItemDetail producto={productos} />
                    </div>}
            </main>
        </>
    )
}
