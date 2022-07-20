import React, { useState } from 'react';
import ReportModal from './ReportModal';

function Block({ visibleBlock, onCloseBlock }) {
    const [showMyReport, setShowMyReport] = useState(false);
    const handleOnCloseReport = () => setShowMyReport(false)


    if (!visibleBlock) return null;
    return (
        <div className='fixed  '>
            <div className="fixed lg:h-[10rem] lg:w-[14rem] w-[251px] h-[185px] shadow lg:top-48 top-[7rem] right-6 lg:left-0 lg:right-12 m-auto z-20 py-3  rounded-lg bg-white">
                <button className=' flex justify-between px-2 pb-1 ml-auto ' onClick={onCloseBlock}> x </button>

                <div className="text text-[#828282] cursor-pointer">
                    <p className='flex hover:text-[#6a52fd] hover:bg-[#F6F4FF] py-3 border-t-[1px]'> <p className='px-4'>Block</p></p>
                    <p className='flex hover:text-[#6a52fd] hover:bg-[#F6F4FF] py-3 border-y-[1px]' onClick={() => setShowMyReport(true)}> <p className='px-4'>Report</p></p>
                </div>

            </div>
            <ReportModal visibleReport={showMyReport} onCloseReport={handleOnCloseReport} />

        </div>
    );
}

export default Block;