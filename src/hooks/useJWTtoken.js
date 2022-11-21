import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useJWTtoken = (email) => {
    const navigate = useNavigate();
    const [token, setToken] = useState('')
    useEffect(() => {
        fetch(`https://doctors-portal-server-six-phi.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accesstoken', data.accessToken);
                    setToken(data.accessToken)
                    navigate('/')
                }
            })
    }, [email])
    return [token]
}

export default useJWTtoken;