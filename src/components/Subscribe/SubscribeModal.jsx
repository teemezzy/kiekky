import React from 'react';
import { co } from '../../assets'

function SubscribeModal({ visible, onClose }) {
    if (!visible) return null;
    return (
        <div className='fixed inset-0  bg-black bg-opacity-20 z-50
        backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white lg:h-[22rem] lg:w-[30rem] ">
                <button className=' flex justify-between px-5 pt-3 ml-auto ' onClick={onClose}> x </button>

                <img className='mt-[-4rem]  lg:ml-[9rem] ml-[3rem] w-[auto] flex justify-center items-center h-[15rem] ' src={co} alt="" />

                <p className='flex justify-center'> Subscription Succesful</p>
                <button onClick={onClose} className=" text-white w-[90%] flex justify-center m-auto my-5 sm:mb-[4rem] rounded-md px-7 py-3 bg-[#6A52FD] ">
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default SubscribeModal;