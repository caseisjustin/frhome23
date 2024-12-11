import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useSelector((state) => state.user);

    return (
        <>
            {isAuthenticated ? element : <Navigate to="/login" />}
        </>
    );
};

export default PrivateRoute;
