import logo from '.././assets/1.png'
import facebook from '.././assets/facebook.png'
import github from '.././assets/pngwing.com.png'
import LinkedIn from '.././assets/Linkedin.png'
import { useContext } from 'react';
import { ThemeContext } from '../Provider/AuthProvider';


const Footer = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <footer style={{background: `${theme === 'dark' ?  ' #180B17 ' : ' '}`}} className={`footer ${theme === 'dark' ? '' : 'border border-[#23D8FF] bg-slate-300'} footer-center  text-primary-content p-10`}>
  <aside>
    <img className='w-28 rounded-xl' src={logo} alt="" />
    <p className={`font-bold md:text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'} tracking-wider`}>
     Abu Saleh Noor Portfolio
     
    </p>
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com/mdabusalehnoor9" target='_blank'>
        <img className='w-10' src={facebook} alt="" />
      </a>
      <a href="https://github.com/abusaleh123" target='_blank'>
      <img className='w-12' src={github} alt="" />
      </a>
      <a>
      <img className='w-10' src={LinkedIn} alt="" />
      </a>
    </div>
    <p className={`md:text-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}> Copyright © {new Date().getFullYear()} - All right reserved by Abu Saleh Noor</p>
  </aside>

</footer>
        </div>
    );
};

export default Footer;