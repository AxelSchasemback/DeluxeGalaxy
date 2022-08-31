import React from 'react'
import { Item } from '../Item/Item'


export const ItemList = ({list}) => {
  return (
    <>
    {list.map((item) => 
        <Item item={item} key={item.id}/>
    ) }
    </>
  )
}
