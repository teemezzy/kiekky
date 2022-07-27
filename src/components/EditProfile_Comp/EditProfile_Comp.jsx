

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import {IoMdMale, IoMdFemale } from 'react-icons/io'



function EditProfile_Comp() {

    const [edit, setEdit] = useState([])
  const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => (console.log(data))


    useEffect(() => {
        axios.get("https://fakerapi.it/api/v1/books?_quantity=1").then((response) => setEdit(response.data.data))


    }, [])


    return (
        <div>
            <div className="images">

                {edit ? edit.map((edit, idx) => (
                    <div key={idx} className='lg:w-[984px] w-[352px] mt-[24px] bg-white rounded-lg m-auto '>

                        <NavLink to='/personal_profile'>  <p className=" px-8 pt-4 lg:px-[65px] lg:pt-[26px] ">
                            <BsArrowLeft color="gray" />
                        </p></NavLink>

                        <div className=" flex justify-center items-center lg:h-[286px] h-[150px] ">


                            <div className=''>
                                <img className='lg:w-[160px] w-[60px] h-[60px] lg:h-[160px] mb-[20px] m-auto rounded-full' src={edit.image} alt="edit_image" />
                                <button className=' lg:w-[209px] lg:h-[39px] w-[100px] h-[28px]  text-sm lg:text-base text-white bg-[#6a52fd] rounded-lg m-auto'>Edit Photo</button>
                            </div>
                        </div>


                    </div>
                )) : null}
            </div>


            <div className="form bg-white mt-[24px] rounded-xl lg:w-[984px] w-[352px]  lg:p-7 mb-[6rem] " >


                <div className="inner lg:w-[849px] w-[300px] m-auto  ">
                    <p className=' py-[32px]'>Profile Details</p>
                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <label htmlFor="">Full Name</label>
                        <input className=' mt-2 outline-none bg-[#F6F4FF] px-2 mb-[24px] rounded-lg lg:w-[849px] w-[300px] h-[44px] lg:h-[56px] '
                         {...register("fullName", { required: true })}  type="text" name="" id="" />

                        <label htmlFor="age">Age</label>
                        <input className=' mt-2 outline-none bg-[#F6F4FF] px-2 mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[300px] h-[44px] ' 
                        {...register("Age", { required: true })} type="text" name="age" id="" />

                        <label className='mt-[24px]' htmlFor="">Country</label>
                        <input className='mt-2 outline-none bg-[#F6F4FF] px-2 mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[300px] h-[44px] '
                         {...register("firstName", { required: true })} type="text" name="" id="" />

                        <label htmlFor="">City</label>
                        <input className=' mt-2 outline-none bg-[#F6F4FF] px-2 mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[300px] h-[44px] '
                         {...register("firstName", { required: true })} type="text" name="" id="" />

                        <label htmlFor="">Height</label>
                        <input className='bg-[#F6F4FF] outline-none px-2 mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[300px] h-[44px] '
                         type="text" name="" id="" />
                        <label htmlFor="">Profession</label>
                        <input className='mt-2 outline-none bg-[#F6F4FF] px-2 mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[300px] h-[44px] ' 
                          type="text" placeholder='' name="" id="" />

                       <div className='container  lg:w-[560px] '>
                        <p>Who are you looking for?</p>

                        <input
              className="opacity-0 w-[300px] lg:w-[]"
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
              <span className="  px-[1.4rem] ">
                <IoMdMale className=" h-[47px] lg:h-[62px]" />
              </span>
            </label>

            <input
              className="opacity-0 w-[300px] lg:w-[] "
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
              <span className="  px-[1.3rem] ">
                <IoMdFemale className=" h-[46px] lg:h-[61px]" />
              </span>
              
            </label>
            </div>

                        <label className='mt-[24px]' htmlFor="">Hobbies</label>
                        <input className='bg-[#F6F4FF] outline-none mt-2 p-4 mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[300px] h-[44px] ' placeholder='Type something'
                         {...register("firstName", { required: true })} type="text" name="" id="" />
                        <label htmlFor="">Bio</label>
                        <textarea className=' outline-none mt-2 bg-[#F6F4FF] p-4 mb-[24px] rounded-lg lg:w-[849px] lg:h-[124px] w-[300px] h-[100px]' placeholder='Type something'
                         {...register("Bio", { required: true })} name="" id="" cols="10" rows="10"></textarea>

                        <input className='lg:w-[849px] w-[300px] h-[44px] lg:mt-[40px] mt-[15px] lg:h-[54px] text-white bg-[#6a52fd] rounded-lg ' type="submit" value="Submit" />

                    </form>


                </div>
            </div>
        </div>
    );
}

export default EditProfile_Comp;

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, formState: { errors }, handleSubmit } = useForm();

//   const onSubmit = (data) => console.log(data);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label htmlFor="">Full Name</label>
//       <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] w-[240px] h-[30px] lg:h-[56px] '
//        {...register("firstName", { required: true })} />
//       {errors.firstName?.type === 'required' && "First name is required"}
      
//       <input {...register("mail", { required: "Email Address is required" })} />
//       <p>{errors.mail?.message}</p>
      
//       <input type="submit" />
//     </form>
//   );
// }
