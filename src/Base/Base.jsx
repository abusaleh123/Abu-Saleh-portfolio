import { Outlet } from "react-router-dom";
import Navbar from "../Homepage/Header/Navbar";



const Base = () => {
    return (
        <div>
          <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Base;