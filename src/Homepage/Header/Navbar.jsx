import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/1.png'
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";
import { FiArrowDownRight } from "react-icons/fi";

const Navbar = () => {
  const handleDownload = () => {
    const imageLink = document.createElement('a');
    imageLink.href = '/resume.png'; // Make sure to update the path
    imageLink.download = 'Abu_Saleh_Resume.png'; // The default filename when downloaded
    imageLink.click();
  };


    return (
        <div className="w-full py-6 header"> 
        <div className={`navbar w-full md:w-11/12  mx-auto p-6 rounded-xl bg-black `}>
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


         <div className="flex gap-1 items-center" >
         <LuSunMedium className="text-2xl" />
         <div className="form-control w-fit">
    <label className="label cursor-pointer">
     
      <input type="checkbox" className="toggle toggle-secondary" defaultChecked />
    </label>
  </div>
         <FaRegMoon className="text-xl" />
         </div>
                <button onClick={handleDownload} style={{background: `linear-gradient(67deg, rgba(194,21,181,1) 9%, rgba(118,8,166,1) 100%)`}} className="btn text-xl text-white md:px-8 btn-ghost border shadow-xl shadow-purple-950 ">Get Resume <FiArrowDownRight className="font-bold text-2xl " /> </button>
        </div>
      
      </div>
      </div>
    );
};

export default Navbar;