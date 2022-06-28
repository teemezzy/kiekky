import React from 'react';
import {Sidebar} from '../components'

function Messages(props) {
    return (
        <div className="flex bg-[#E5E5E5]">
        <div className="  hidden lg:block sidebar_prt pt-8">
            <Sidebar />
            </div>
        <div>Messages</div>
      </div>
    );
}

export default Messages;