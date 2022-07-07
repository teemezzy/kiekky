import React , {useState} from 'react';
import ProfilePicture from './ProfilePicture'
import ProfilePost from './ProfilePost'

function UserInfo(props) {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (tab) => {
      setToggleState(tab);
      console.log(tab);
    };


    return (
        <div>
            <div className="  mx-6 mt-5 justify-center mb-5  sm:items-center lg:items-start sm:w-[100vw] lg:w-[60rem] ">
              <div
                className={`${
                  toggleState === 1
                    ? "input-option-tab em "
                    : "input-option-tab"
                } flex h-[3rem] space-x-5 `}
              >
                <div
                  onClick={() => toggleTab(1)}
                  className={`${
                    toggleState === 1 ? "login-tab-active2" : ""
                  }  py-[0.5rem] px-[3rem]  self-center  `}
                >
                  
                    <div>
                     <p>Post</p>
                    </div>
                </div>
                <div
                  onClick={() => toggleTab(2)}
                  className={`${
                    toggleState === 2 ? "login-tab-active2" : ""
                  }  py-[0.7rem]  px-[3rem] self-center `}
                >
                  
                    <div>
                      <p>Pictures</p>
                    </div>
                </div>
              </div>
            </div>

          {toggleState === 1 ? <ProfilePost /> : <ProfilePicture />}

        </div>
    );
}

export default UserInfo;