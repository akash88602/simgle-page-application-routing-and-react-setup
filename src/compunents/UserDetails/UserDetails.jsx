import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user1 = useLoaderData();
    const {name,website}=user1;
    return (
        <div>
            <h1>Details about : {name}</h1>
            <p>Website : {website}</p>
        </div>
    );
};

export default UserDetails;