import banner from '../../assets/file1.png';
import git from '../../assets/pngwing.com.png'
import facebook from '../../assets/facebook-removebg-preview.png'
import LinkedIn from '../../assets/Linkedin.png'
import { useContext, useState } from 'react';
import { ThemeContext } from '../../Provider/AuthProvider';
import { BackgroundLines } from '@/components/ui/background-lines';

import { motion } from 'framer-motion';
import { MovingBorderDemo } from '@/components/All/MovingBorder';
import { BackgroundBeamsDemo } from '@/components/All/BackGround';

const Banner = () => {
const {theme} = useContext(ThemeContext)
  const [isHovered, setIsHovered] = useState(false);
const handleDownload = () => {
  const fileId = '1LGv_iJ78yksVtfsrEX3LGbSW4_9H-EKP'; 
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  const a = document.createElement('a');
  a.href = downloadLink;
  a.download = 'Abu_Saleh-Resume.pdf'; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a); 
};
    return (
   
     

  <div className={` lg:h-screen text-white lg:pt-52 ${theme === 'dark' ? 'header ' : 'bg-white text-black'}`}>
         <div className='w-9/12  mx-auto'>
          <div className='flex md:flex-row flex-col'>
            {/* Text */}

            <div className='flex'>
            <div className='z-30 mt-10'>
              <h1 className="text-4xl font-bold text-[#DDDDDD]">I am Abu-Saleh </h1>
              <h1 className="text-7xl mt-6 tracking-wide leading-tight font-bold developer-text">Next-Level Web <br /> Developer.</h1>
              <p className="text-2xl text-[#DDDDDD] leading-9 w-7/12 mt-4">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                <button
                onClick={handleDownload}
                style={{
              background: `linear-gradient(${isHovered ? "133deg" : "313deg"}, #2B1557 41%, #7D49E5 100%)`,
              border: theme === "dark" ? "none" : "2px solid #23D8FF",
              transition: "background 0.8s ease-in-out",

            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn btn-ghost 2xl:w-/4 text-lg rounded-full text-white mt-8">Get Resume</button>
            </div>
              <motion.h1
              animate={{
                  
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6, 
                repeat: Infinity, 
                repeatType: "loop", 
                ease: "easeInOut", 
              }}
              className="text-[400px] hidden md:block absolute top-48 text-[#271643] font- left-[750px] banner-text ">HI</motion.h1>

              
            </div>

      <div className=' md:w-4/12 '>
      <img className=' md:w-fit md:relative shadow-2xl shadow-[#261541] z-40 md:right-32 rotate-6 hover:rotate-0 transition-all duration-500 bg-[#0F1112] border border-[#9c72ee] hover:border-[#8852F7] hover:border-4 rounded-xl' src={banner} alt="" />
      </div>
          </div>

     </div>
        </div>

    );
};

export default Banner;