import { createBrowserRouter } from "react-router-dom";
import Home from "../Homepage/Home";
import Base from "../Base/Base";
import About from "../Pages/About";
import ProjectDetails from "../Pages/ProjectDetails";


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
        },
        {
          path: '/project/:id',
          element: <ProjectDetails></ProjectDetails>,
          loader: ({params}) => fetch(`https://abu-saleh-portfolio-server.vercel.app/project/${params.id}`)
        }
    ]
  }
])

export default router;