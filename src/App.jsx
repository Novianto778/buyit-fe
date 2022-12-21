import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './features/auth/Login';
import PrivateRoutes from './common/components/PrivateRoutes';
import User from './pages/User';
import Dashboard from './pages/Dashboard';

const ROLES = {
    ADMIN: 'admin',
    CASHIER: 'cashier',
};

function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route
                    path="/"
                    element={
                        <PrivateRoutes
                            allowedRoles={[ROLES.ADMIN, ROLES.CASHIER]}
                        />
                    }
                >
                    <Route index element={<Navigate to="/dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="dashboard/user" element={<User />} />
                </Route>
                {/* <Route
                    path="/"
                    element={<PrivateRoutes allowedRoles={[ROLES.ADMIN]} />}
                ></Route>
                <Route
                    path="/"
                    element={<PrivateRoutes allowedRoles={[ROLES.CASHIER]} />}
                ></Route> */}
                <Route path="/login" element={<Login />} />
                {/* {ROUTES.map((route) => {
                    const { path, component, roles, children } = route;
                    return (
                        <Route path={path}>
                            {roles ? (
                                children ? (
                                    children.map((child) => {
                                        const { path, component, roles } =
                                            child;
                                        return (
                                            <PrivateRoutes
                                                path={path}
                                                element={component}
                                                allowedRoles={roles}
                                            />
                                        );
                                    })
                                ) : (
                                    <PrivateRoutes
                                        element={component}
                                        allowedRoles={roles}
                                    />
                                )
                            ) : (
                                <Route path={path} element={component} />
                            )}
                        </Route>
                    );
                })} */}
            </Routes>
        </>
    );
}

export default App;
