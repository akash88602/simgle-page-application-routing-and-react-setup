import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post1 = useLoaderData();
    const {id,title,body}= post1 ;
    const navigte =useNavigate();
    const handleGoBack=()=>{
        navigte(-1)
    }
    console.log(post1)
    return (
        <div>
          <h1>Post details id : {id}</h1>
          <p>title : {title}</p>
          <p><small>{body}</small></p>


          <br />
          <button onClick={handleGoBack} >Go Back</button>
        </div>
    );
};

export default PostDetails;