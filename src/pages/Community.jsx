import React, {useEffect, useState} from 'react';
import {Sidebar, UserNav, Status, HotPicks, Members, MobileNav} from '../components'

function Community(props) {
 


    
return (
        <div className="messages mt-[6.3rem] bg-[#F9FAFA]"> 
        <UserNav />
         <div className="flex ">

<div className=" hidden lg:block sidebar_prt pt-8">
    <Sidebar />
    </div>
<div className=' '>
  <Status />

  <HotPicks />
  <Members />
  Community</div>
</div>

<div className="mobile-nav">
  <MobileNav />
</div>
        </div>
       
    );
}

export default Community;