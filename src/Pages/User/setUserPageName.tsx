import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const setUserPageName = () => {
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
  return page
}

export default setUserPageName