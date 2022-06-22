import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { bgLogin } from "../assets";
import { LoginEmail, LoginPhone } from "../components";
import { BsPhone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MidNav } from "../components";
import "./Login.css";
const Login = () => {
  useEffect(() => {
    document.title = "Login | Kiekky";
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
    console.log(tab);
  };

  return (
    <div>
      <MidNav className="lg:hidden block" />

      <div className="flex relative m-auto ">
        <div className="background w-2/5 hidden lg:block ">
          <img className=" h-full" src={bgLogin} alt="Login" />
        </div>

        <div className="container w-3/5 mx-auto lg:mx-auto  lg:w-1/3 border-1 box-border mt-[4rem] lg:mt-[10rem] ">
          <h1 className="welcome mb-5 text-xl text-center ">Welcome Back</h1>
          <div>
            <div className="mx-auto mb-6 ">
              <div
                className={`${
                  toggleState === 1
                    ? "input-option-tab em "
                    : "input-option-tab"
                } flex h-[3rem]  rounded-lg border-2 `}
              >
                <div
                  onClick={() => toggleTab(1)}
                  className={`${
                    toggleState === 1 ? "login-tab-active" : ""
                  }  py-[0.7rem] px-[23%]  w-1/2 self-center  `}
                >
                  <IconContext.Provider
                    value={{ color: "#6a52fd", className: "global-class-name" }}
                  >
                    <div>
                      <BiEnvelope size={"20px"} />
                    </div>
                  </IconContext.Provider>
                </div>
                <div
                  onClick={() => toggleTab(2)}
                  className={`${
                    toggleState === 2 ? "login-tab-active" : ""
                  }  py-[0.7rem] px-[23%]  w-1/2 self-center `}
                >
                  <IconContext.Provider
                    value={{ color: "#6a52fd", className: "global-class-name" }}
                  >
                    <div>
                      <BsPhone size={"20px"} />
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>

          {toggleState === 1 ? <LoginEmail /> : <LoginPhone />}

          <p className="text-center my-5 text-sm ">
            Don't have an account ?
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