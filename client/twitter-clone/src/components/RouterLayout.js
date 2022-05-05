import React from 'react'
import { Navigate } from 'react-router-dom';

function RouterLayout({ children, notFound }) {

  const current_user = localStorage.getItem('current_user'); 

  return (
    <>
        {
            current_user ? 
            children
            :
            <Navigate to='/login' />
        }
    </>
  )
}

export default RouterLayout