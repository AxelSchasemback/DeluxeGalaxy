import React, { useState } from 'react'
import './UserPerfil.css'
import { AiOutlineUser } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
import { useCartContext } from '../../../context/CartContext'

export const UserPerfil = () => {

  const navigate = useNavigate()
  const { user, logOut } = useAuth()
  const { clear } = useCartContext()
  const [log, setLog] = useState(false)
  const logClick = () => {
    setLog(true)
    setTimeout(() => setLog(false), 5000)
  }
const handleLogout = async() => {
  await logOut()
  clear()
  navigate('/login')
}

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
