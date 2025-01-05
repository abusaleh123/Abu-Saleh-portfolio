import purpleBg from '../../src/assets/black-purple.jpg';
import aboutImage from '../../src/assets/about1.jpg';
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../Provider/AuthProvider';

const HomeAbout = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={` backdrop-blur-3xl ${theme === 'dark' ? 'headerr bg-white/60' : 'bg-white border border-t-[#23D8FF]'} md:py-12 py-16   `}>
           <div className='xl:w-10/12 lg:w-11/12 w-full mx-auto'>
           <div className='flex md:flex-row flex-col-reverse gap-4 justify-between '>
           <div className='w-2/4  mx-auto md:mx-0'>
                <img className=' md:rounded-full rounded-xl w-fit  lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] border p-2 border-purple-500  mt-6 object-cover ' src={aboutImage} alt="" />
              
            </div>
            <div className='w-full'> 
            <h1 className={`xl:text-9xl lg:text-6xl text-center md:text-start mb-4 md:mb-0  w-full text-4xl ${theme === 'dark' ? 'text-white/90' : 'text-[#23D8FF]'}  `}>About Me <span className=''></span> </h1>
               <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} mb-4 md:mb-4 px-2`}>
               As a passionate front-end developer, I’m <span className={`${theme === 'dark' ? 'text-white' : 'text-[#23D8FF]'} md:text-xl`}>Abu Saleh Noor</span>, and I specialize in creating responsive, user-friendly websites. With expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I focus on building visually appealing and functional web experiences. I also have experience with backend technologies like Express, Node.js, and MongoDB, enabling me to build full-stack applications that are scalable and efficient. <span className='hidden md:inline-block'>I’m always eager to learn and improve, staying updated with the latest web development trends and technologies. My goal is to create high-quality websites and applications that deliver exceptional user experiences</span>
               </p>
             <div className='flex justify-center md:justify-start'>
             <Link to={'/about'} style={{
    background: theme === 'dark'
      ? `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`
      : '#d1d1d1',
    border: theme === 'dark' ? 'none' : '2px solid #23D8FF', backgroundColor: theme === 'dark' ? '': 'white'
  }} className={`btn ${theme === 'dark' ? 'text-white ' : 'text-[#23D8FF]'} w-fit text-lg btn-ghost tracking-wide `}>See Details</Link>
             </div>

            </div>
           </div>
           </div>
        </div>
    );
};

export default HomeAbout;