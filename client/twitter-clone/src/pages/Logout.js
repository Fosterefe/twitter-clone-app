import React from 'react'
import { Navigate } from 'react-router-dom';

function Logout() {
    localStorage.removeItem('current_user');

    return <Navigate to='/' />
}

export default Logout