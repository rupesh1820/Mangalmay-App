import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/Contact";
import Sandhya from "../pages/Sandhya";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "sandhya", element: <Sandhya /> },
    ],
  },
]);

export default router;
