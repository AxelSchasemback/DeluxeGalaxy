import React from 'react'

export const ItemCart = ({ producto }) => {

   const { nombre, marca, cantidad} = producto

  return (
    <div>
        <h1>tu Carrito</h1>
        <table>
            <tr>
                <th><h2>{marca} {nombre}</h2></th>
            </tr>
            <tr>
                <td></td>
                <td>{cantidad}</td>
            </tr>
        </table>
    </div>
  )
}
