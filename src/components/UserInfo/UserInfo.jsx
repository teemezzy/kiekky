import React, { useState } from 'react';
import Info from '../Info/Info'
import About from '../About/About'

function UserInfo(props) {


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
    console.log(tab);
  };

  const activeTabs = " text-[#6a52fd] bg-white "
  const tabs = "  text-[#BDBDBD] bg-[#F9FAFA] ";

<<<<<<< HEAD
    return (
        <div>
            <div className="mt-5 m-auto lg:w-[984px] w-[347px]">
              <div
                className={`${
                  toggleState === 1
                    ? "input-option-tab em "
                    : "input-option-tab"
                } flex h-[3rem]`}
              >
                <div
                  onClick={() => toggleTab(1)}
                  className={`${
                    toggleState === 1 ? "login-tab-active1" : ""
                  }  py-[0.7rem] px-[23%]  w-1/2 self-center  `}
                >
                  
                    <div>
                     <p>Info</p>
                    </div>
                </div>
                <div
                  onClick={() => toggleTab(2)}
                  className={`${
                    toggleState === 2 ? "login-tab-active1" : ""
                  }  py-[0.7rem] px-[23%]  w-1/2 self-center `}
                >
                  
                    <div>
                      <p>About</p>
                    </div>
                </div>
              </div>
=======
  const activeContent = " ";
  const content = "  hidden  cursor-pointer ";

  return (
    <div>
      <div className="  mt-5 m-auto lg:w-[984px] w-[327px] ">
        <div
          className={`${toggleState === 1
              ? activeTabs : tabs
            } flex h-[3rem]  `}
        >
          <div
            onClick={() => toggleTab(1)}
            className={`${toggleState === 1 ? activeTabs : tabs
              }  py-[0.7rem] px-[23%]  w-1/2 self-center  `}
          >

            <div>
              <p  >Info</p>
>>>>>>> 254a8c89575cf83c1b09ebac8f550609c7b83717
            </div>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className={`${toggleState === 2 ? activeTabs : tabs
              }  py-[0.7rem] px-[23%]  w-1/2 self-center `}
          >

            <div>
              <p className='' >About</p>
            </div>
          </div>
        </div>
      </div>

      <div className={toggleState === 1 ? (content, activeContent) : content}>
        <Info />
      </div>

      <div className={toggleState === 2 ? (content, activeContent) : content}>
        <About />
      </div>



    </div>
  );
}

export default UserInfo;