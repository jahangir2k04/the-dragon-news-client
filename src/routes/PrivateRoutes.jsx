import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if (loading) {
        const show = <div className="position-relative">
            <Spinner className='mt-5 position-absolute top-50 start-50 translate-middle' animation="border" variant="primary" />
        </div>
        return show;
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;


/**
 * 1. check user is logged in or not 
 * 2. if user is logged in , then allow them to visit the route
 * 3. ELSE redirect them to the login page
 * 4. set the private route
 * */ 