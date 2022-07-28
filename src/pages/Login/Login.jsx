import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { bgLogin } from "../../assets";
import { LoginEmail, LoginPhone } from "../../components";
import { BsPhone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LoginNav } from "../../components";
import "./Login.css";
const Login = () => {
  useEffect(() => {
    document.title = "Login | Kiekky";
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const activeTabs = " text-[#6a52fd] bg-white rounded-lg "
  const tabs = "  text-[#999999]   ";

  const activeContent = " ";
  const content = "  hidden  cursor-pointer ";

  return (
    <div className='h-[80%]'>
      <LoginNav/>

      <div className="flex relative m-auto o ">
        <div className=" w-2/5  hidden lg:block ">
          <img className="h-full " src={bgLogin} alt="Login" />
        </div>

        <div className=" w-[352px] m-auto object-contain lg:w-1/3 mt-[8rem] lg:mt-[10rem] ">
          <h1 className="welcome mb-5 text-xl text-center ">Welcome Back</h1>
          <div>
            <div className="mx-auto mb-6 ">
              <div
                className={`${toggleState === 1
                    ? activeTabs : tabs
                  } flex h-[60px]  rounded-lg border-[1px] bg-[#F4F4F4] `}
              >
                <div
                  onClick={() => toggleTab(1)}
                  className={`${toggleState === 1 ? activeTabs : tabs
                    }  w-[176px] lg:w-[260px] flex justify-center items-center `}
                >
                    
                    <div>
                      <BiEnvelope size={"20px"} />
                    </div>
                </div>
                <div
                  onClick={() => toggleTab(2)}
                  className={`${toggleState === 2 ? activeTabs : tabs
                    } w-[176px] lg:w-[260px] flex justify-center items-center `}
                >     <div>
                      <BsPhone size={"20px"} />
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* {toggleState === 1 ? <LoginEmail /> : <LoginPhone />} */}

          <div className={toggleState === 1 ? (content, activeContent) : content}>
        <LoginEmail />
      </div>

      <div className={toggleState === 2 ? (content, activeContent) : content}>
        <LoginPhone />
      </div>

          <p className="text-center my-5 text-sm ">
            Don't have an account?
            <Link to="/register" className="mx-1 text-[#6A52FD]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;