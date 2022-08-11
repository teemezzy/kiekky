import React from 'react'
import { useState } from 'react';
import SubModalGold from './SubModalGold';


function SUb2({subid}) {

    const [open1000Modal, setOpen1000Modal] = useState(false);
    const close1000ModalHandler = () => setOpen1000Modal(false);
    
    const open1000ModalHandler = () => {
        setOpen1000Modal(true);

        console.log("sam");
    };

    const test1 = () => {
        console.log("working");
        setOpen1000Modal(true);
    }
  return (
    <div>
        {open1000Modal && <SubModalGold /> }
    
    <button
            onClick={test1}
            className="text-[#6A52FD] text-[14px] bg-white rounded-lg w-[222px] h-[48px] mt-[42px] mb-[27px]"
        >
            {subid} 
        </button>


        {/* <SubModalGold onClose={close1000ModalHandler} visible={open1000Modal} /> */}

    </div>
    

    
  )
}

export default SUb2