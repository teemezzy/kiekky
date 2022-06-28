import React, {useEffect} from "react";
import { Sidebar } from "../components";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Logo } from '../assets'
import {BsBell,} from  "react-icons/bs";

function Dashboard({children}) {

    const pathname = useLocation();
useEffect(()=> {
    window.scrollTo(0,0)
},
     [pathname])


    return (
<div className=' bg-[#E5E5E5] h-[100%]'>
        
<div className="nav-home flex justify-between items-center p-7 bg-white">

<img src={Logo} alt="" />
<p><BsBell color="gray"/> </p>

</div>
        <div className=' flex'>
     
            <div className=" hidden lg:block sidebar_prt pt-8">
            <Sidebar />
            </div>
            <div className="pages">
            <main> {children}</main>
            </div>
        </div>  
        </div>
         );}
export default Dashboard;
