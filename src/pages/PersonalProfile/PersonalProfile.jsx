import React from 'react';
import { Sidebar, UserNav, PPV, PersonalProfileInfo, User, PersonalInfo, MobileNav } from '../../components'

function PersonalProfile(props) {

    return (
        <div className="notifications bg-[#F9FAFA] ">
            <UserNav />
            <div className="flex mt-[6rem] bg-[#F9FAFA] ">

                <div className="  fixed h-[100%] hidden lg:block sidebar_prt pt-8">
                    <Sidebar />
                </div>
                <div className='lg:ml-[20rem] w-[100vw] '>
                    <div className="sub-section border-2 lg:w-[97%] sm:w-[90%] m-auto ">
                        <PersonalProfileInfo />
                        <PersonalInfo />
                    </div>

                </div>

            </div>
            <MobileNav />
        </div>

    );
}

export default PersonalProfile;