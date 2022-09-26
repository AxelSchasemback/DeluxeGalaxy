import { React, useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList'
import Search from '../Search/Search';
import { Loading } from '../Loading/Loading';
import './ItemListContainer.css'
import { SubNavbar } from '../SubNavbar/SubNavbar';
import db from '../../Firebase/firebase';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [load, setLoad] = useState(true)
    setTimeout(() => setLoad(false), 2000)


    const { marca } = useParams()
    const getData = async (marca) => {
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

        <main className='mainContainer'>
            <Search product={productos} />
            {load ? <Loading /> :
                <>
                    <h1 className='titleProduct'>Productos</h1>
                    <div className='divContent'>
                        <SubNavbar categoria={productos} />
                        <ItemList list={productos} />
                    </div>
                </>
            }
        </main>
    )
}