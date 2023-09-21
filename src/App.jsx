import { useState } from "react";
import Home from './pages/home'
// import Shop from './pages/shop'
import About from './pages/about'
import router from './router.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

function App() {
  return (
    <HelmetProvider context={helmetContext}>

      
    <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
