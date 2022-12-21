import React from 'react';
import { useUsers } from './queries';

const UserPage = () => {
    const { data, isLoading } = useUsers();
    console.log(data);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Userpage</h1>
            <button>Home</button>
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>{user?.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
