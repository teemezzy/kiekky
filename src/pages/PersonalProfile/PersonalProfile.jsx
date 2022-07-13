import React, { useState } from 'react';
import { Sidebar, UserNav, PPV, PersonalProfileInfo, User, PersonalInfo } from '../../components'

function PersonalProfile(props) {

    return (
        <div className="notifications bg-[#F9FAFA]">
            <UserNav />
            <div className="flex mt-[6rem] bg-[#F9FAFA] ">

                <div className="  fixed h-[100%] hidden lg:block sidebar_prt pt-8">
                    <Sidebar />
                </div>
                <div className='lg:ml-[20rem] lg:w-[60rem] '>

                    <PersonalProfileInfo />
<PersonalInfo/>
                </div>

            </div>
        </div>

    );
}

export default PersonalProfile;