import { React, useState, useEffect } from 'react'
import "./ItemList.css"
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);


    useEffect(() => {
        fetch('./json/data.JSON')
            .then((response) => response.json())
            .then((data => {
                data = data.productos

                const productosJSX = data.map((item) =>
                    < div key={item.id} className='cardContent' >
                        <div className='allCards'>
                            <div className='card'>
                                <img src={item.img} alt="imagenPrueba" className="imgCard" />
                                <span className='titleCard'>{item.marca} {item.nombre} </span>
                                <span className="priceCard">${item.precio}</span>
                                <ItemCount stock={item.stock} addCart={(count) => {
                                    console.log(`agregaste: \n marca: ${item.marca} \n nombre: ${item.nombre} \n precio: ${item.precio} \n cantidad: ${count}`)
                                }} />
                            </div>
                        </div>
                    </div >)
                setProductos(productosJSX)
            }))
            .catch((error) => {
                console.error(error)
            })
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
        <>
            {consultPromise(true) && productos}
        </>
    )
}