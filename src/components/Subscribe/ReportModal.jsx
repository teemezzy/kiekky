import React from 'react';


function ReportModal({ visibleReport, onCloseReport }) {
    if (!visibleReport) return null;
    return (
        <div className='fixed inset-0  bg-black bg-opacity-20 z-50
        backdrop-blur-sm flex justify-center items-center'>
            <div className="bg-white lg:h-[22rem] lg:w-[30rem] ">
                <button className=' flex justify-between px-5 pt-3 ml-auto ' onClick={onCloseReport}> x </button>

                <div className="text-area px-[4rem]">
                    <p className='text-2xl pb-2 normal '>Report User</p>
                    <label htmlFor="">Reason </label>
                    <form action="" method="post">
                        <textarea placeholder='Enter message...' className='w-[100%] my-3 rounded-sm py-6 px-3 h-[7rem]  outline-none bg-[#F6F4FF]' type="te" name="" id="" />

                        <button onClick={onCloseReport} className=" text-white w-[100%] flex justify-center m-auto my-5 sm:mb-[4rem] rounded-md  py-3 bg-[#6A52FD] ">
                            Proceed
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default ReportModal;