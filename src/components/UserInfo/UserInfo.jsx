import React , {useState} from 'react';
import Info from '../Info/Info'
import About  from '../About/About'

function UserInfo(props) {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) => {
      setToggleState(tab);
      console.log(tab);
    };


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
            </div>

          {toggleState === 1 ? <Info /> : <About />}

        </div>
    );
}

export default UserInfo;