import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
