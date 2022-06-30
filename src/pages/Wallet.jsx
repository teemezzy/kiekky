import React from 'react';
import {Sidebar, UserNav} from '../components'


function Wallet(props) {
    
return (
        <div className="messages mt-[6.3rem] bg-[#F9FAFA]"> 
        <UserNav />
         <div className="flex ">

<div className="  hidden  lg:block sidebar_prt pt-8">
    <Sidebar />
    </div>
<div className='ml-[22rem] '>Wallet</div>
</div>
        </div>
       
    );
}

export default Wallet;