import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    const {id, title, body, userId} = post;
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(`friend/${userId}`)
    }
    return (
        <div>
            <h1>Every Post Details here:</h1>
            <h2>Title : {title}</h2>
            <p>Description: {body}</p> 
            <button onClick={handleNavigate}>Get Author</button> 
        </div>
    );
};

export default PostDetails;