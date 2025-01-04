import { createBrowserRouter } from "react-router-dom";
import Home from "../Homepage/Home";
import Base from "../Base/Base";
import About from "../Pages/About";


const router = createBrowserRouter([
  {
    path: '/',
    element:  <Home></Home>
  },
  {
    path: '/',
    element: <Base></Base>,
    children: [
        {
            path: '/about',
            element: <About></About>
        }
    ]
  }
])

export default router;