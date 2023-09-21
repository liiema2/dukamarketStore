import React from 'react'
import Header from '../components/ui/header'
// import Footer from '../components/ui/home/pooter'
// import Footer from "../../../components/ui/home/footer";
import Footer from "../components/ui/footer";
import { Route, Routes,Outlet } from "react-router-dom";
export default function index() {
  return (
    <div>
        <Header></Header>

   
             <Outlet />

        <Footer></Footer>
    </div>
  )
}
