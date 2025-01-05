import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/1.png'
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { FiArrowDownRight } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../../Provider/AuthProvider";

const Navbar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleDownload = () => {
    const imageLink = document.createElement('a');
    imageLink.href = '/resume.png'; // Make sure to update the path
    imageLink.download = 'Abu_Saleh_Resume.png'; // The default filename when downloaded
    imageLink.click();
  };


    return (
      <div className="">
        <div className={`w-full py-6  ${theme === 'dark' ? 'header' : 'bg-white border border-[#23D8FF]'}`}> 
        <div className={`navbar sticky top-0 w-full md:w-11/12  mx-auto p-6 rounded-full ${theme === 'dark' ? 'bg-black' : ' text-black' } `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost w-fit lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
            style={{
              background: "linear-gradient(to top, #5350C3 0%, #8784F8 0%)",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent"
              }}
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-base-100 text-white font-bold text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <NavLink  className={'nav'}  to={'/'}>Home</NavLink>
          <NavLink className={'nav'}  to={'/about'}>About</NavLink>
          <div className="flex gap-1 items-center " >
         <LuSunMedium className="text-2xl" />
         <div className="form-control w-fit ">
    <label className="label cursor-pointer">
     
      <input type="checkbox"  onChange={toggleTheme}
                  checked={theme === 'dark'} className="toggle toggle-secondary" defaultChecked />
    </label>
  </div>
         <FaRegMoon className="text-xl" />
         </div>
   

            </ul>
          </div>
        <Link to={'/'} className="flex items-center  justify-center gap-0">
            <img className="md:w-16 w-10 rounded-full" src={logo}  alt="" />
       
        </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:gap-6 lg:gap-8 px-3 lg:text-lg font-semibold">
        <NavLink  className={'nav'}  to={'/'}>Home</NavLink>
       <NavLink className={'nav'}  to={'/about'}>About</NavLink>
          </ul>
        </div>
     
          <div className="navbar-end gap-1 md:gap-4">


          <div className="hidden md:inline-block">
         <div className="flex gap-1 items-center " >
         <LuSunMedium className="text-2xl" />
         <div className="form-control w-fit ">
    <label className="label cursor-pointer">
     
      <input type="checkbox"  onChange={toggleTheme}
                  checked={theme === 'dark'} className="toggle toggle-secondary" defaultChecked />
    </label>
  </div>
         <FaRegMoon className="text-xl" />
         </div>
         </div>
                <button onClick={handleDownload}  style={{
    background: theme === 'dark'
      ? `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`
      : '#d1d1d1',
    border: theme === 'dark' ? 'none' : '2px solid #23D8FF', backgroundColor: theme === 'dark' ? '': 'white'
  }} className={`btn md:text-xl ${theme === 'dark'? 'text-white' : 'text-[#23D8FF]'} md:px-9  btn-ghost border shadow-xl  `}>Get Resume <FiArrowDownRight className="font-bold md:text-2xl " /> </button>
        </div>
       
      </div>
      </div>
      </div>
    );
};

export default Navbar;