import React, { useState } from 'react';
import ReportModal from './ReportModal';

function Block({ visibleBlock, onCloseBlock }) {
    const [showMyReport, setShowMyReport] = useState(false);
    const handleOnCloseReport = () => setShowMyReport(false)


    if (!visibleBlock) return null;
    return (
        <div className='relative  '>
            <div className=" lg:h-[10rem] lg:w-[14rem] w-[251px] right-0 top-[-102rem] lg:top-[-44rem] absolute h-[185px] shadow  m-auto z-20 py-3  rounded-lg bg-white">
                <button className=' flex justify-between px-2 pb-1 ml-auto ' onClick={onCloseBlock}> x </button>

                <div className="text text-[#828282] cursor-pointer">
                    <p className='flex hover:text-[#6a52fd] hover:bg-[#F6F4FF] '> <p className=' w-full mx-3 border-t-[1px] px-4 py-3  '>Block</p></p>
                    <p className='flex hover:text-[#6a52fd] hover:bg-[#F6F4FF] ' onClick={() => setShowMyReport(true)}> <p className='  w-full border-y-[1px] px-4 py-3 mx-3'>Report</p></p>
                </div>

            </div>
            <ReportModal visibleReport={showMyReport} onCloseReport={handleOnCloseReport} />

        </div>
    );
}

export default Block;