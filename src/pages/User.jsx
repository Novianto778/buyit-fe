import React from 'react';
import { Link } from 'react-router-dom';
import UserPage from '../features/users/UserPage';

const User = () => {
    return (
        <>
            <UserPage />
            <Link to="/dashboard">Home</Link>
        </>
    );
};

export default User;
