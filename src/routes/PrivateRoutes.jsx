import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const loaction = useLocation();
    console.log(location);
    if(loading){
       return <Loading/> 
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={loaction.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivateRoutes;