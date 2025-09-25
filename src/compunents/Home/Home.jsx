import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is the home components</h2>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;