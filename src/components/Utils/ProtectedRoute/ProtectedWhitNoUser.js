import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'

export const ProtectedWhitNoUser = ({children}) => {

    const { user } = useAuth()

    if (!user) return <Navigate to='/login'/>

  return (
    <>{children}</>
  )
}
