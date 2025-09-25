import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Users from '../Users/Users';

const User = () => {
   const users = useLoaderData();
   console.log(users)
    return (
        <div>
           <h2>Our User : {users.length}</h2>
           <div className='grid grid-cols-3 gap-5'>
            {
              users.map(users =><Users users={users} key={users.id}></Users>)
            }
           </div>
        </div>
    );
};

export default User;
