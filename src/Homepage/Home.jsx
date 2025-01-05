import React from 'react';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import HomeAbout from './HomeAbout';
import Skills from './Skils';
import Projects from './Projects';
import Contact from './Contact';




const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
          
        </div>
    );
};

export default Home;