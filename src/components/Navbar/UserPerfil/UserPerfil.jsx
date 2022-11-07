import React, { useState } from 'react'
import './UserPerfil.css'
import { AiOutlineUser } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { useCartContext } from '../../../context/CartContext'

export const UserPerfil = () => {

  const navigate = useNavigate()                   //funcion de navegacion de pagina
  const { user, logOut } = useAuth()              //traemos funciones del context Auth
  const { clear } = useCartContext()               //funcion para borrar carrito del cartcontext
  const [log, setLog] = useState(false)           //se guarda el estado del boton
  const logClick = () => {                        //pequea funcion para cambiar el estado log a True por 5 segundos
    setLog(true)
    setTimeout(() => setLog(false), 5000)
  }
const handleLogout = async() => {               //funcion para cerrar sesion del usuario, vaciar el carrito y redireccionarlo para iniciar sesion
  await logOut()                  
  clear()
  navigate('/login')
}


//Se ejecuta el ternario dependiendo si inicion sesion el usuario o no
  return (
    <>
      <button className='perfil' onClick={(() => logClick())}>
        <AiOutlineUser className='userIcon' />
      </button>
      {user ?
      <button className={log ? 'linkLogout' : 'linkNone'} onClick={(() => handleLogout())}>logout
      </button>
      :
      <Link className={log ? 'linkLogin' : 'linkNone'} to='/login'>login
      </Link>
      }
      
    </>
  )
}
