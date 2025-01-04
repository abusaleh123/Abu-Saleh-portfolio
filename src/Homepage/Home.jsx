import React from 'react';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import App from '../App';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <App></App> */}
        </div>
    );
};

export default Home;