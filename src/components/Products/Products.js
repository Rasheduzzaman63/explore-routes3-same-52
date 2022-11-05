import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Post from '../Post/Post';

const Products = () => {
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h1>This is products page: {posts.length}</h1>
            {
                posts.map(post => <Post
                key={post.id}
                post ={post}
                ></Post>)
            }
        </div>
    );
};

export default Products;