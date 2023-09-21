

import { createBrowserRouter,Navigate } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./Layout"
import Shop from "./pages/Shop"
import About from "./pages/about"
import Cms from "./pages/cms"
import Create from "./components/form"
import Edit from "./components/form/edit.jsx"
import All from "./components/form/all"
// import headerHome from "./seo/home.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Navigate to="home" />, 
        index: true
      },
      {
        path: "home",
        element: <Home />,
        index: true,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "admin",
    element: <Cms />, 
    children: [
      {
        path: "create",
        element: <Create></Create>, 
      
      },
      {
        path: "",
        // element: <All></All>, 
        element: <Navigate to="all" />, 
      },
      {
        path: "edit/:id",
        element: <Edit></Edit>, 
      
      },
      
    
    
      {
        path: "all",
        element: <All></All>, 
      
      }

      // {
      //   path: "",
      //   element: <Navigate to="create" />, 
      //   index: true, 
      
      // },
     ] 
  },
]);

  export default router;