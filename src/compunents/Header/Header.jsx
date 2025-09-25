import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div  >
            <h1>My Website</h1><br /><br />
            <Link to='/'>Home </Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contat</Link>
            <Link to='/user'>User</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    );
};

export default Header;