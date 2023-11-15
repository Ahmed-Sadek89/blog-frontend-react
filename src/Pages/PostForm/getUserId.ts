import React from 'react'
import { getDecodedToken } from '../../assets/getDecodedToken'
import Cookies from 'js-cookie';

const getUserId = () => {
    const token = Cookies.get("authorization") || '';

    const user = getDecodedToken(token)

    return user.id

}

export default getUserId