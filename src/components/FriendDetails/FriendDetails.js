import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = ({friendId}) => {
    const details = useLoaderData();
    return (
        <div>
            <h2>This page is Friend details</h2>
            <h3>Name: {details.name}</h3>
            <p>Phone: {details.phone}</p>
        </div>
    );
};

export default FriendDetails;