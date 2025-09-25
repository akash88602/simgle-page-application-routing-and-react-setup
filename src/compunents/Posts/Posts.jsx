import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';


const Posts = () => {
    const posts =useLoaderData();
    console.log(posts)
    return (
  <div>
      <h1>Post : {posts.length}</h1>
      <div className="grid grid-cols-3 gap-4">
      {
        posts.map(post =>
        <Post post={post} key={post.id}></Post>
    )
      }
      
      </div>
    </div>
    );
};

export default Posts;