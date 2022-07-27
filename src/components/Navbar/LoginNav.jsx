import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../assets'

function LoginNav() {
    return (
        <div>
            <div className="  fixed top-0 right-0 left-0 h-[6rem] px-[2rem] z-20 bg-white pb-5">
               <div className="my-[2rem] "> 
               <div className=" block lg:hidden">
                    <NavLink to="/">
                        <img src={Logo} alt="Kiekky_Logo" />
                    </NavLink>
                </div>
               </div>
                
            </div>
        </div>
    )
}

export default LoginNav