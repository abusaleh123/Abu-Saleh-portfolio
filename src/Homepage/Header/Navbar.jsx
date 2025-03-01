import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/1.png'
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { FiArrowDownRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Provider/AuthProvider";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation()

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const { theme, toggleTheme } = useContext(ThemeContext);
  
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
  const handleBackground = location.pathname === '/about' ? 'bg-purple-400' : ''



  const navStyle = (() => {
    if (location.pathname === "/") {
      return scrollPosition === 0
        ? "sm:absolute  top-0 z-10 md:bg-opacity-40 md:text-white w-10/12" 
        : "sticky top-0 z-50  bg-[black]/95 border-gray-600  shadow-2xl shadow-[#251540]  flex justify-center text-white mx-auto shadow-md";
    } else {
      return "bg-[#031B33] text-white";
    }
  })();

    return (
      <div className={`${navStyle} flex  justify-center mx-auto w-full  sticky top-0 z-50`}>
       
        <div className={`w-full   ${theme === 'dark' ? `  ${handleBackground}` : `bg-white border border-[#23D8FF] `}`}>
        <div className={`navbar  top-0 w-full md:w-9/12   mx-auto p-6 rounded-full ${theme === 'dark' ? '' : ' text-black' } `}>
        <div className="navbar-start">
        <div className="dropdown  z-10">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost border hover:bg-transparent w-fit lg:hidden"
        onClick={toggleDropdown}
      >
        {dropdownOpen ? (
          <IoCloseOutline className={`text-xl ${theme === 'dark' ? 'text-white': 'text-black'}`} />
        ) : (
          <CiMenuBurger className={`text-xl ${theme === 'dark' ? 'text-white': 'text-black'}`}  />
        )}
      </div>
      {dropdownOpen && (
        <ul
          style={{
            background: " #470A5F",
          }}
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100  text-white font-bold text-lg rounded-box z-[10] mt-3 w-52 p-2 shadow"
        >
          <NavLink className={'nav'} to={'/'}>Home</NavLink>
          <NavLink className={'nav'} to={'/about'}>About</NavLink>
          <div className="flex gap-1 items-center">
            <LuSunMedium className="text-2xl" />
            <div className="form-control w-fit">
              <label className="label cursor-pointer">
                <input
                  type="checkbox"
                  onChange={toggleTheme}
                  checked={theme === 'dark'}
                  className="toggle toggle-secondary"
                />
              </label>
            </div>
            <FaRegMoon className="text-xl" />
          </div>
        </ul>
      )}
    </div>
        <Link to={'/'} className="flex items-center  justify-center gap-0">
            <img className="md:w-16 w-10 rounded-full" src={logo}  alt="" />
       
        </Link>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:gap-6 lg:gap-8 px-3 lg:text-lg font-semibold">
        <NavLink  className={'nav md:text-xl pb-1'}  to={'/'}>Home</NavLink>
       <NavLink className={'nav md:text-xl pb-1'}  to={'/about'}>About</NavLink>
          </ul>
        </div> */}
     
          <div className="navbar-end gap-1 md:gap-4">
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:gap-6 lg:gap-8 px-3 lg:text-lg font-semibold">
        <NavLink  className={'nav md:text-xl pb-1'}  to={'/'}>Home</NavLink>
       <NavLink className={'nav md:text-xl pb-1'}  to={'/about'}>About</NavLink>
          </ul>
        </div>

          <div className="hidden md:inline-block">
         <div className="flex gap-1  items-center " >
         <LuSunMedium className={`text-xl ${theme === 'dark' ? '' : 'text-[#23D8FF]'} `} />
         <div className="form-control w-fit ">
    <label className="label cursor-pointer">
     
      <input type="checkbox"  onChange={toggleTheme}
                  checked={theme === 'dark'} className="toggle toggle-secondary" defaultChecked />
    </label>
  </div>
         <FaRegMoon className={`text-xl ${theme === 'dark' ? '' : 'text-[#23D8FF]'} `} />
         </div>
         </div>
                <button onClick={handleDownload}  
            
            style={{
              background: `linear-gradient(${isHovered ? "133deg" : "313deg"}, #2B1557 41%, #7D49E5 100%)`,
              border: theme === "dark" ? "none" : "2px solid #23D8FF",
              transition: "background 0.8s ease-in-out",

            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn btn-ghost 2xl:w-/4 text-lg rounded-full text-white"
                
                
                >Get Resume <FiArrowDownRight className="font-bold md:text-2xl " /> </button>
        </div>
    
       
      </div>
      </div>
      </div>
    );
};

export default Navbar;