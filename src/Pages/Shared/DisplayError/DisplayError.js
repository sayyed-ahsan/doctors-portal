import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Navbar from '../Navbar/Navbar';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <p className='text-red-500'>Something went wrong!!!</p>
                <p className='text-red-400'>{error.statusText || error.message}</p>
                <h4 className="text-3xl"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4>
            </div>
        </div>
    );
};

export default DisplayError;