import purpleBg from '../../src/assets/black-purple.jpg';
import aboutImage from '../../src/assets/about1.jpg';
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const HomeAbout = () => {
    return (
        <div style={{background: `linear-gradient(0deg, rgba(81,18,96,1) 2%, rgba(0,0,0,1) 92%)`}} className=" backdrop-blur-3xl py-12 bg-white/60 ">
           <div className='w-10/12 mx-auto'>
           <div className='flex justify-around'>
           <div className=''>
                <img className=' rounded-full relative h-72 w-72  lg:w-[450px] lg:h-[450px] border p-2 border-purple-500 mx-auto mt-6 object-cover ' src={aboutImage} alt="" />
                <h1 className="lg:text-9xl text-3xl text-white/90 absolute lg:top-10 w-4/12 lg:left-[830px] left-[230px] top-14 ">About Me <span className='absolute lg:top-28 top-8 right-8 lg:right-12'><FiArrowDownRight className='text-[#6F1160]' /></span> </h1>
            </div>

            <div className=''> 
               <p className='w-2/6 absolute lg:top-64 top-8 right-8 lg:right-80 '>
               As a passionate front-end developer, I’m <span className='text-white text-xl'>Abu Saleh Noor</span>, and I specialize in creating responsive, user-friendly websites. With expertise in HTML, CSS, JavaScript, React.js, and Tailwind CSS, I focus on building visually appealing and functional web experiences. I also have experience with backend technologies like Express, Node.js, and MongoDB, enabling me to build full-stack applications that are scalable and efficient. I’m always eager to learn and improve, staying updated with the latest web development trends and technologies. My goal is to create high-quality websites and applications that deliver exceptional user experiences
               </p>
               <Link to={'/about'} style={{background: `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`}} className='btn text-white text-lg btn-ghost tracking-wide   absolute lg:top-[470px] top-8 right-8 lg:right-[560px]'>See Details</Link>

            </div>
           </div>
           </div>
        </div>
    );
};

export default HomeAbout;