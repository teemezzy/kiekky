import React from 'react';
import { Sidebar, UserNav, MobileNav, DatesComp } from '../components'


function Dates(props) {

    return (
        <div className="messages  mt-[6.3rem] bg-[#F9FAFA]">
            <UserNav />
            <div className="flex pt-8  bg-[#F9FAFA]">

                <div className=" hidden lg:block sidebar_prt  ">
                    <Sidebar />
                </div>

                <div className='lg:w-[980px] w-327px m-auto bg-[#F9FAFA]  '>
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