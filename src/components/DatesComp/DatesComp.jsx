import React, { useState, useEffect } from 'react';
import RequestDate from './RequestDate'
import Apply from './Apply'


function DatesComp(props) {

  useEffect(() => {
    document.title = "Dates | Kiekky";
  }, []);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const activeTabs = " text-[#6a52fd] bg-white "
  const tabs = "  text-[#BDBDBD] bg-[#F9FAFA] ";

  const activeContent = " ";
  const content = "  hidden  cursor-pointer ";

  return (
    <div>
      <div className="  mt-5  lg:w-[980px] w-[352px] ">
        <div  className={`${toggleState === 1  ? activeTabs : tabs  } flex h-[3rem]  `}   >
          <div
            onClick={() => toggleTab(1)}
            className={`${toggleState === 1 ? activeTabs : tabs
              }  py-[1.5rem] px-[3%] lg:px-[19%]  w-1/2 self-center  `}
          >

            <div className='text-center '>
              <p>Apply for Dates</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={`${toggleState === 2 ? activeTabs : tabs
              }  py-[1.5rem] px-[5%] lg:px-[17%]  w-1/2 self-center `}
          >

            <div className='text-center '>
              <p>Date Request</p>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 1 ? (content, activeContent) : content}>
        <Apply />
      </div>

      <div className={toggleState === 2 ? (content, activeContent) : content}>
        <RequestDate />
      </div>


    </div>
  );
}

export default DatesComp;