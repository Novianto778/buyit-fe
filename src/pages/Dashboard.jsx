import React from 'react';
import { Link } from 'react-router-dom';
import useUserStore from '../store/userStore';

const Dashboard = () => {
    const { user } = useUserStore();
    if (user?.roles.includes('admin')) {
        return (
            <div>
                <h1 className="text-red-500">Dashboard Admin</h1>
                <Link to="user">Go to user page</Link>
            </div>
        );
    }

    if (user?.roles.includes('cashier')) {
        return <h1 className="text-red-500">Dashboard Cashier</h1>;
    }
};

export default Dashboard;
