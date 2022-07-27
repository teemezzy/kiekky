import React from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '../../assets'

function LoginNav() {
    return (
        <div>
            <div className=" fixed top-0 right-0 left-0 h-[11rem]  w-[340px] m-auto bg-white pb-5">
               <div className="my-[3rem] "> 
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