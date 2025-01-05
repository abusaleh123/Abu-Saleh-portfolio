import banner from '../../assets/file1.png';
import git from '../../assets/pngwing.com.png'
import facebook from '../../assets/facebook-removebg-preview.png'
import LinkedIn from '../../assets/Linkedin.png'
import { useContext } from 'react';
import { ThemeContext } from '../../Provider/AuthProvider';

const Banner = () => {
const {theme} = useContext(ThemeContext)
    const handleDownload = () => {
        const imageLink = document.createElement('a');
        imageLink.href = '/resume.png'; // Make sure to update the path
        imageLink.download = 'Abu_Saleh_Resume.png'; // The default filename when downloaded
        imageLink.click();
      };
    return (
        <div className={`${theme === 'dark' ? 'header' : 'bg-white text-black'}`}>
        <div className='w-8/12 mx-auto text-white  '>
            <div className='flex md:flex-row flex-col-reverse justify-center   gap-4 items-center'>
            <div className={` space-y-2 ${theme === 'dark' ? ' ' : 'text-[#23D8FF]' }`}> 
            <p className="lg:text-5xl md:text-3xl  text-2xl font-bold  mb-4">Hello ! I'm</p>
                {/* <span className='text text-2xl'>Hi I'm</span> */}
                <h1  className={`2xl:text-9xl xl:text-7xl md:w-5/6 md:text-6xl text-4xl lg:text-6xl xl:w-full  2xl:w-[700px]  ${
    theme === 'dark' 
      ? 'text-purple-400  banner-name' 
      : 'text-[#23D8FF] font-Rubik Microbe'
  }`}>Abu Saleh Noor</h1>
                <p className="md:text-2xl text-xl text">A Web Developer</p>
                <p className={`${theme === 'dark' ? 'text-gray-500' : 'text-[#23D8FF]/50'} w-3/4`}>Creative front-end web developer crafting responsive, interactive, and user-friendly designs with modern, optimized, and accessible solutions.</p>

                    <div>
                        <p className="text-xl mb-4">Find With Me</p>
                       <div className='flex items-center gap-2'>
                    <a href="https://github.com/abusaleh123" target='_blank'>
                    <img  className='w-16 p-2 border border-purple-600 rounded-full' src={git} alt="" />
                    </a>
                   <a href="https://www.facebook.com/mdabusalehnoor9" target='_blank'>
                   <img  className='w-16 p-2 border border-purple-600 rounded-full' src={facebook} alt="" />
                   </a>
               
                      <img  className='w-16 p-2 border border-purple-600 rounded-full' src={LinkedIn} alt="" />

            
                       </div>
                    </div>
                  <div className='py-4'>
                  <button onClick={handleDownload}  style={{
    background: theme === 'dark'
      ? `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`
      : '#d1d1d1',
    border: theme === 'dark' ? 'none' : '2px solid #23D8FF', backgroundColor: theme === 'dark' ? '': 'white'
  }}  className={'btn btn-ghost  2xl:w-1/4 text-lg rounded-xl  '}>Get Resume</button>
                  </div>

            </div>
            <div className='  flex  mx-auto justify-center items-center'>
                <img  className='w-full' src={banner} alt="" />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;