import React, { useState } from 'react';
import ReportModal from './ReportModal';

function Block({ visibleBlock, onCloseBlock }) {
    const [showMyReport, setShowMyReport] = useState(false);
    const handleOnCloseReport = () => setShowMyReport(false)


    if (!visibleBlock) return null;
    return (
        <div className=' '>
            <div className="fixed absolute lg:h-[10rem] lg:w-[14rem]  top-[40rem] shadow left-0 right-48 m-auto z-20 py-3 px-3 mr-5 bg-white">
                <button className=' flex justify-between px-2 pb-1 ml-auto ' onClick={onCloseBlock}> x </button>

                <div className="text text-[#828282] cursor-pointer">
                    <p className='flex hover:text-[#6a52fd] hover:bg-[#F6F4FF] py-3 border-t-[1px]'> Block</p>
                    <p className='flex hover:text-[#6a52fd] hover:bg-[#F6F4FF] py-3 border-y-[1px]' onClick={() => setShowMyReport(true)}> Report</p>
                </div>

            </div>
            <ReportModal visibleReport={showMyReport} onCloseReport={handleOnCloseReport} />

        </div>
    );
}

export default Block;