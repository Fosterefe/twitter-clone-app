import React from 'react'
import { useEffect } from 'react'
import { useVerifyToken } from '../customHooks.js/mutationHooks';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('current_user'))
  const [ verifyJWT, {data, error, loading} ] = useVerifyToken();
  const token = user.jwt
  if(error) console.log(error.message)
  if(data) console.log(data)
  //if(data) navigate('/login');
/* 
  useEffect(() => {
    setTimeout(verifyJWT({ variables: { token } }), 20000)
  }, []) */
 

  return (
    <div>
      <h1>Welcome { user.user.username }</h1>
      { error && <p>{error.message}</p> }
    </div>
  )
}

export default Dashboard