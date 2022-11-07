import { React, useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList'
import { Loading } from '../../Utils/Loading/Loading';
import './ItemListContainer.css'
import { Category } from '../Category/Category';
import db from '../../../Firebase/firebase';

export const ItemListContainer = () => {                
    const [productos, setProductos] = useState([])      //Guardamos los productos traidos de la bbd
    const [load, setLoad] = useState(true)              //simulacion Loading
    setTimeout(() => setLoad(false), 2000)


    const { marca } = useParams()

    const getData = async (marca) => {

                //llamada a la bbd colecion Item, donde se alojan todos los productos
                //tenemos un ternario, por defecto tenemos todos los porudcots guardados en la constante
                //en caso de que el useParams sea verdadero se ejecuta el query, para traer los productos de esta marca y guardarlos en al constante
        const itemCollection = marca ? query(collection(db, "Items"), where("marca", "==", marca))
            : collection(db, "Items")
        const call = await getDocs(itemCollection)
        const result = call.docs.map((item) => item = { id: item.id, ...item.data() })
        setProductos(result)
    }
    useEffect(() => {
        getData(marca)
    }, [marca])

    return (
        <>
            <main className='mainContainer'>
                {load ? <Loading /> :
                    <>
                        <h1 className='titleProduct'>Productos</h1>
                        <div className='divContent'>
                            <Category categoria={productos} />
                            <ItemList list={productos} />
                        </div>
                    </>
                }
            </main>
        </>
    )
}