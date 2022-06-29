import React from 'react';
import {Sidebar, UserNav} from '../components'


function Dates(props) {
    
return (
        <div className="messages mt-[6.3rem] bg-[#E5E5E5]"> 
        <UserNav />
         <div className="flex ">

<div className="  hidden  lg:block sidebar_prt pt-8">
    <Sidebar />
    </div>
<div className='ml-[22rem] '>Dates</div>
</div>
        </div>
       
    );
}

export default Dates;