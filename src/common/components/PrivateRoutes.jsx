import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useUserStore from '../../store/userStore';

const PrivateRoutes = ({ allowedRoles }) => {
    const { user } = useUserStore();

    const isAuthenticated = user?.roles?.some((role) =>
        allowedRoles.includes(role)
    );
    const location = useLocation();
    return (
        <>
            {isAuthenticated ? (
                <Outlet />
            ) : (
                <Navigate
                    to={{ pathname: '/login', state: { from: location } }}
                    replace
                />
            )}
        </>
    );
};

export default PrivateRoutes;
