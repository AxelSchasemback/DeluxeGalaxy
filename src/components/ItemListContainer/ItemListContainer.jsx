import { React, useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'



const productos = [
    { "id": 0, "nombre": "Motorola G71", "precio": 79999, "stock": 12, "img": "https://celularapagos.com/wp-content/uploads/2022/04/moto-G71-azul.png" },

    { "id": 1, "nombre": "Motorola G60", "precio": 65999, "stock": 10, "img": "https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G60s_Frente_min_39c217a159.png" },

    { "id": 2, "nombre": "Motorola G22", "precio": 50000, "stock": 15, "img": "https://tienda.movistar.com.ar/media/catalog/product/cache/29ccbb5c02aec1862b4f5a57a55d0f2f/g/2/g22-negro-frente_2.png" },

    { "id": 3, "nombre": "motorola G51", "precio": 60000, "stock": 12, "img": "https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G51_Azul_frente_min_f97b2b7415.png" },
];

function consultPromise(confirm) {
    return new Promise((res, rej) => {
        if (confirm) {
            res(productos)
        } else {
            rej("reject")
        }

    })
}

export const ItemListContainer = () => {
    const [Productos, setProductos] = useState([])

    useEffect(() => {
        consultPromise(true)
            .then(data => {
                setProductos(data)
            })
            .catch(error => {
                console.error(error)
            })


    }, [])

return (
    <>
        <ItemList list={Productos}/>
    </>
)
}


// useEffect(() => {
//     fetch('./json/data.JSON')
//         .then((response) => response.json())
//         .then((data => {
//             data = data.productos

//             const productosJSX = data.map((item) =>
//                 < div key={item.id} className='cardContent' >
//                     <div className='allCards'>
//                         <div className='card'>
//                             <img src={item.img} alt="imagenPrueba" className="imgCard" />
//                             <span className='titleCard'>{item.marca} {item.nombre} </span>
//                             <span className="priceCard">${item.precio}</span>
//                             <ItemCount stock={item.stock} addCart={(count) => {
//                                 console.log(`agregaste: \n marca: ${item.marca} \n nombre: ${item.nombre} \n precio: ${item.precio} \n cantidad: ${count}`)
//                             }} />
//                         </div>
//                     </div>
//                 </div >)
//             setProductos(productosJSX)
//         }))
//         .catch((error) => {
//             console.error(error)
//         })
// }, [])