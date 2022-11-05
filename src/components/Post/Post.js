import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const handleNavigate = ()=>{
       navigate(`/products/${id}`);
    }
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <p>Details: {body}</p>
            <Link to={`/products/${id}`}>
                <button>ShowDetails</button>
            </Link>
            <button onClick={handleNavigate}>ShowDetails2</button>
        </div>
    );
};

export default Post;