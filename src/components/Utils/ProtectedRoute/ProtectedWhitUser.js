import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

export const ProtectedWhitUser = ({children}) => {

    const { user } = useAuth()

    if (user) return <Navigate to='/Home'/>

  return (
    <>{children}</>
  )
}