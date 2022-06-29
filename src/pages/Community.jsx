import React from 'react';
import {Sidebar, UserNav} from '../components'


function Community(props) {
    
return (
        <div className="messages mt-[6.3rem] bg-[#E5E5E5]"> 
        <UserNav />
         <div className="flex ">

<div className="  hidden  lg:block sidebar_prt pt-8">
    <Sidebar />
    </div>
<div className='ml-[22rem] '>Community</div>
</div>
        </div>
       
    );
}

export default Community;