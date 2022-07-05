import React from 'react';
import {Sidebar, UserNav, MobileNav} from '../components'


function Messages(props) {
    
return (
        <div className="messages mt-[6.3rem] bg-[#F9FAFA]"> 
        <UserNav />
         <div className="flex ">

<div className="  hidden  lg:block sidebar_prt pt-8">
    <Sidebar />
    </div>
<div className='ml-[22rem] '>Messages</div>
</div>

<div className="mobile-nav">
  <MobileNav />
</div>
        </div>
       
    );
}

export default Messages;