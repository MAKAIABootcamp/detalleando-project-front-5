import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({ isAuthenticate, isTypeSeller }) => {
  return (
    <div>{isAuthenticate ? <Navigate to={!isTypeSeller ? "/home" : "/homeseller"} /> : <Outlet />}</div>
  )
}

export default PublicRouter