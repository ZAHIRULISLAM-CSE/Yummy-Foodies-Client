import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Loader from '../loader/Loader';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
     return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;