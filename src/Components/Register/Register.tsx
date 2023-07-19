import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
  return (
    <>
        <input type='file' placeholder='username' />
        <input type='text' placeholder='username' />
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <button onClick={() => navigate('/')}>Register</button>
        <p>
            <span>Do you have account?</span>
            <span onClick={() => navigate('/login')}>Login</span>
        </p>
    </>
  )
}

export default Register