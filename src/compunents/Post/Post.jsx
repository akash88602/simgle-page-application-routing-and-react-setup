import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post;
    const navigate = useNavigate();
    const handleShowDetail=()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='border-2 p-5'> 
            <h4>Post of Id : {id}</h4>
            <p>{title}</p> <br />
            <NavLink to={`/post/${id}`}>Details</NavLink><br />
            <button onClick={handleShowDetail} >click to seee details</button>
        </div>
    );
};

export default Post;