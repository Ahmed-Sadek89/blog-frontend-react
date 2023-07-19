import { useState, useEffect, memo } from 'react'
import { useLocation } from 'react-router-dom'
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';

const User = () => {
    const location = useLocation();
    const [page, setPage] = useState('');
    useEffect(() => {
        if (location.pathname === '/login') {
            setPage('login');
        }
        if (location.pathname === '/register') {
            setPage('register');
        }
    }, [location, page])
  return (
    <div className='user'>
        <h3>{page}</h3>
        <div className="user-content">
            {
                page === "login" && <Login />
            }
            {
                page === "register" && <Register />
            }
        </div>
    </div>
  )
}

export default memo(User)