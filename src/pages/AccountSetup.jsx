import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { MidNav } from "../components";
import { bgLogin, woman, male } from "../assets";
import "./AccountSetup.css";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";


function AccountSetup() {
  useEffect(() => {
    document.title = "Account SetUp | Kiekky";
  }, []);
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, errors) => {
    console.log(data);
  };

  return (
    <div className="flex relative m-auto ">
      <MidNav className="lg:hidden block" />
      <div className="background w-2/5 hidden lg:block ">
        <img className=" h-full" src={bgLogin} alt="Login" />
      </div>
      <div className="container w-4/5 md:w-1/2 m-auto lg:mx-auto  lg:w-1/3 border-1 box-border mt-[4rem] lg:mt-[10rem] ">
        <h1 className="welcome text-3xl pt-[3rem] mb-2 font-bold ">
          Account Set Up
        </h1>
        <p className="text-sm mb-5 text-[gray]">
          Kindly provide the required details to set up your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label>1. Gender</label>
          <p className="text-sm mb-5 text-[gray]">
            Check one option that reflects your gender
          </p>

          <div className="gender_select flex flex-col mb-8 ">
            <input type="radio" name="gender" id="test2" value="I am a man" />
            <label
              className=" flex flex-row items-center justify-between mb-4 outline-none text-[gray] rounded-md pl-5 bg-[#F6F4FF] "
              htmlFor="test2"
            >
              I am a man
              <span className="  px-[1.3rem] py-[0.6rem] ">
                <IoMdMale className="w-full h-[1.7rem]" />
              </span>
            </label>

            <input type="radio" name="gender" id="test" value="I am a woman" />
            <label
              className="flex flex-row items-center justify-between outline-none mb-5 text-[gray] rounded-md  pl-5 bg-[#F6F4FF] "
              htmlFor="test"
            >
              I am a woman
              <span className="  px-[1.3rem] py-[0.6rem] ">
                <IoMdFemale className="w-full h-[1.7rem]" />
              </span>
            </label>
          </div>

          <label className="">2. Preference</label>
          <p className="text-sm mb-5 text-[gray]">What are you looking for</p>

          <div className="gender_select flex flex-col ">
            <input
              className="opacity-0"
              type="checkbox"
              name="genderM"
              id="test4"
              value="I am a man"
            />
            <label
              className=" flex flex-row items-center justify-between mb-4 outline-none text-[gray] rounded-md pl-5  bg-[#F6F4FF] "
              htmlFor="test4"
            >
              I am a man
              <span className="  px-[1.3rem] py-[0.6rem] ">
                <IoMdMale className="w-full h-[1.7rem]" />
              </span>
            </label>

            <input
              className="opacity-0"
              type="checkbox"
              name="genderF"
              id="test3"
              value="I am a woman"
            />
            <label
              className=" flex items-center flex-row justify-between outline-none mb-5 text-[gray] rounded-md pl-5 bg-[#F6F4FF] "
              htmlFor="test3"
            >
              I am a woman
              <span className="  px-[1.3rem] py-[0.6rem] ">
                <IoMdFemale className="w-full h-[1.7rem]" />
              </span>
              
            </label>
          </div>

          <button className=" text-white w-full mt-10 mb-4 rounded-md py-3 px-auto bg-[#6A52FD] ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountSetup;
