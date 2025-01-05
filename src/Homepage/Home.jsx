import React from 'react';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import HomeAbout from './HomeAbout';
import Skills from './Skils';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet';




const Home = () => {
   
    return (
        <div>
             <Helmet>
        <title>Home - Abu Saleh Noor</title>
    </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;