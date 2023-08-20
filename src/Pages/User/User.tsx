import { useState, useEffect, memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Login from '../../Components/Login/Login';
import Register from '../../Components/Register/Register';
import Cookies from 'js-cookie';

const User = () => {
    // make effect that prevent going to this page if there is a token
    const navigate = useNavigate()
    const token = Cookies.get('authorization');
    const isAuth = (token && token?.length > 0) ? true : false;
    useEffect(() => {
        isAuth && navigate('/')
    }, [isAuth, navigate])

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