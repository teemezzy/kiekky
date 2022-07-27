import React from 'react';
import { success } from '../../assets'

function SubscribeModal({ visible, onClose }) {
    if (!visible) return null;
    return (
        <div className='fixed inset-0  bg-black bg-opacity-20 z-50
        backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white lg:h-[22rem] lg:w-[30rem] w-[348px] rounded-lg ">
                <button className=' flex justify-between px-5 pt-3 ml-auto text-[#BDBDBD] ' onClick={onClose}> x </button>

                <img className='w-[10rem] m-auto ' src={success} alt="" />

                <p className='flex justify-center'> Subscription Succesful</p>
                <button onClick={onClose} className=" text-white w-[80%] flex justify-center m-auto my-5 sm:mb-[4rem] rounded-md px-7 py-3 bg-[#6A52FD] ">
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default SubscribeModal;