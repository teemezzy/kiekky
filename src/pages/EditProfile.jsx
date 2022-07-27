import React from 'react'
import { Sidebar, UserNav, EditProfile_Comp, MobileNav } from '../components'




function EditProfile() {
  return (
    <div className="notifications h-screen bg-[#F9FAFA]">
      <UserNav />
      <div className="flex mt-[6rem] mb-[5rem] bg-[#F9FAFA] ">

        <div className="   h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className='w-[352px] lg:w-[984px] m-auto'>
          <EditProfile_Comp />
        </div>
        <MobileNav />
      </div>
    </div>
  );
}

export default EditProfile;

