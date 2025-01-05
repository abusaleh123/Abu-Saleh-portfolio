import { Outlet } from "react-router-dom";
import Navbar from "../Homepage/Header/Navbar";
import Footer from "../Homepage/Footer";



const Base = () => {
    return (
        <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Base;