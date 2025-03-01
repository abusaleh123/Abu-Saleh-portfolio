import React from 'react';
import Navbar from './Header/Navbar';
import Banner from './Header/Banner';
import HomeAbout from './HomeAbout';


import Contact from './Contact';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
import { SparklesPreview } from '@/components/All/Projectss';
import { WorkSkil } from '@/components/All/WorkSkill';
import { BackgroundBeamsDemo } from '@/components/All/BackGround';





const Home = () => {
   
    return (
        <div>
             <Helmet>
        <title>Home - Abu Saleh Noor</title>
    </Helmet>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <BackgroundBeamsDemo></BackgroundBeamsDemo>
            <HomeAbout></HomeAbout>
         <WorkSkil></WorkSkil>
            <SparklesPreview></SparklesPreview>
            {/* <Projects></Projects> */}
            <Contact></Contact>
            <Footer></Footer>
          
        </div>
    );
};

export default Home;