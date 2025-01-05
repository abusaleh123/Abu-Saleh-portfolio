import axios from 'axios';
import bg from '../../src/assets/details.jpg'; // Make sure this path is correct
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../Provider/AuthProvider';

const Projects = () => {
const {theme } = useContext(ThemeContext)

  const [projects, setProjects] = useState([])
useEffect(() => {
  axios.get('https://abu-saleh-portfolio-server.vercel.app/projects')
  .then(res => {
    console.log(res.data);
    setProjects(res.data)
  })
},[])

  return (
    <div
    
      style={{
        backgroundImage: `${theme === 'dark' ? `url(${bg})` : ''}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: `${theme === 'dark' ? '' : 'white'}`
      
      }}
    >
    <div className='w-10/12 mx-auto text-center pb-16'>
      <div className="relative z-10 text-white p-8">
        <h1 className="text-7xl"> My Projects</h1>
      </div>

        <div className='grid  md:grid-cols-2 lg:grid-cols-3  gap-6'>
          {
            projects.map(project => <div className={`text-start h-full ${theme === 'dark ' ? 'border-none': 'border  border-[#23D8FF]'}  pb-4 rounded-xl backdrop-blur-2xl  bg-white/20`} key={project._id}>
              <img className='rounded-xl' src={project.image} alt="" />
              <h1 className={`text-3xl px-1 lg:pl-2 mt-3  ${theme === 'dark' ? 'text-white' : 'text-[#23D8FF]'}`}>{project.name}</h1>
              <p className={`text-lg ${theme === 'dark' ? '' : 'text-black'} lg:pl-2 px-1 h-28`}>{project.short_description}</p>
              <Link to={`/project/${project._id}`} style={{
    background: theme === 'dark'
      ? `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`
      : '#d1d1d1',
    border: theme === 'dark' ? 'none' : '2px solid #23D8FF', backgroundColor: theme === 'dark' ? '': 'white'
  }} className={`btn  btn-ghost mx-auto text-lg  ${theme === 'dark'? 'text-white' : 'text-[#23D8FF]'} tracking-wide border-none md:w-11/12 w-2/4 flex justify-center`}> Details</Link>
            </div>)
          }
        </div>



      </div>
    </div>
  );
};

export default Projects;
