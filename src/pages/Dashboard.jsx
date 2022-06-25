import React , {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {Sidebar} from '../components';
import { Routes, Route, useParams, Navigate } from "react-router-dom";

import Dates from './Dates'
import  Messages from './Messages'
import Wallet from './Wallet'
import Settings from './Settings'
import Home from './Home'


function Dashboard({children}) {

    const pathname = useLocation();
useEffect(()=> {
    window.scrollTo(0,0)
},
     [pathname])


    return (
        <div className=' flex bg-[#E5E5E5] h-[100%]'>
            <div className="  sidebar_prt pt-8">
            <Sidebar />

            </div>

            <div className="pages">
{/* 
            <Routes> 
                <Route exact path="/" element={<Navigate to= "/home" />} />
                        <Route path="/home" element={<Home />} />

                        <Route path="/dates" element={<Dates />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/wallet/*" element={<Wallet />} />
                    </Routes> */}
            </div>
            <main> {children}</main>
        </div>  
         );}
export default Dashboard;



