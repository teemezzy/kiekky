import React from 'react';
import { Sidebar, UserNav, MobileNav, DatesComp } from '../components'


function Dates(props) {

    return (
        <div className="messages mt-[6.3rem] bg-[#F9FAFA]">
            <UserNav />
            <div className="flex ">

                <div className=" hidden lg:block sidebar_prt pt-8">
                    <Sidebar />
                </div>
                
                <div className='lg:w-[980px]  lg:h-[975px] w-327px m-auto  '>
                  <DatesComp />

                </div>
               
            </div>

            <div className="mobile-nav">
                <MobileNav />
            </div>
        </div>

    );
}

export default Dates;