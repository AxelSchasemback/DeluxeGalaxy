import React from 'react'
import "./ItemList.css"

export const ItemListContainer = ({titulo}) => {
    return (
        <h1 className='title'>
            {titulo}
        </h1>
    )
}
