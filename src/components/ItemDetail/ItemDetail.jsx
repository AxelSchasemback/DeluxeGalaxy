import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import "./ItemDetail.css"

export const ItemDetail = ({ producto }) => {
    const { nombre, marca, precio, id, descripcion, imgP, img1, img2, img3, stock } = producto

    const [goCart, setGoCart] = useState(false)
    const [imagen, setImagen] = useState(imgP)

    const selectedImg = (img) => {
        setImagen(img)
    }

    const { addItem } = useCartContext();


    const onAdd = (quantity) => {
        setGoCart(true)
        addItem(marca, nombre, id, precio, imgP, quantity)
    }



    return (
        <>
            <div className='containerDetail'>
                <h1 className='tituloDetail'>{marca} {nombre}</h1>
                <div className='subContainer'>
                    <div className='imagenContainer'>
                        <span onClick={(() => selectedImg(imgP))}>
                            <img className='imagen1' src={imgP} alt={nombre} />
                        </span>
                        {img1 &&
                            <span onClick={(() => selectedImg(img1))}>
                                <img className='imagen1' src={img1} alt={nombre} />
                            </span>}
                        {img2 &&
                            <span onClick={(() => selectedImg(img2))}>
                                <img className='imagen1' src={img2} alt={nombre} />
                            </span>}
                        {img3 &&
                            <span onClick={(() => selectedImg(img3))}>
                                <img className='imagen1' src={img3} alt={nombre} />
                            </span>}
                    </div>
                    <img className='imagenDetail' src={imagen} alt={nombre} />
                    <div className='containerDescripcion'>
                        <p className='tituloDetalle'>Detalles Del Producto</p>
                        <p className='detalle'>{descripcion}</p>
                        {goCart ? (
                            <div className='buy'>
                                <Link className='linkCart' to='/cart'>
                                    <button className='botonComprar'>Ir al Carrito</button>
                                </Link>
                                <span className='precioDetalle'>${precio}</span>
                            </div>
                        ) : (
                            <ItemCount stock={stock} precio={precio} boton={onAdd} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
