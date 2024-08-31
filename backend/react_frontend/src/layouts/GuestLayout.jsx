import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const GuestLayout = () => {
// console.log(window.location.host.split(':')[0]);
  const {token} = useStateContext();

  if(token) {
    return <Navigate to='/' />
  }

  return (
    <div id='guestLayout'>
      <Outlet />
    </div>
  )
}

export default GuestLayout