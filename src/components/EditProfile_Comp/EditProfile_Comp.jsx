

import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from 'react-router-dom';



function EditProfile_Comp() {

    const [edit, setEdit] = useState([])
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => (console.log(data))


    useEffect(() => {
        axios.get("https://fakerapi.it/api/v1/persons?_quantity=1").then((response) => setEdit(response.data.data))


    }, [])


    return (
        <div>
            <div className="images">

                {edit ? edit.map((edit, idx) => (
                    <div key={idx} className='lg:w-[984px] w-[327px] mt-[24px] bg-white rounded-lg  '>

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


            <div className="form bg-white mt-[24px] rounded-xl lg:w-[984px] w-[327px] lg:h-[1193px] h-[850px] " >


                <div className="inner lg:w-[849px] w-[240px] m-auto  ">
                    <p className=' py-[32px]'>Profile Details</p>
                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                        <label htmlFor="">Full Name</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] w-[240px] h-[30px] lg:h-[56px] ' type="text" name="" id="" />
                        <label className='mt-[24px]' htmlFor="">Country</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[240px] h-[30px]  ' type="text" name="" id="" />
                        <label htmlFor="">City</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[240px] h-[30px] ' type="text" name="" id="" />
                        <label htmlFor="">Who are you looking for?</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[240px] h-[30px] ' type="text" name="" id="" />
                        <label htmlFor="">Bio</label>
                        <textarea className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[124px] w-[240px] h-[60px]' name="" id="" cols="10" rows="10"></textarea>
                        <label htmlFor="age">Age</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[240px] h-[30px]  ' type="text" name="age" id="" />

                        <label htmlFor="">Height</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[240px] h-[30px] ' type="text" name="" id="" />
                        <label htmlFor="">Profession</label>
                        <input className='bg-[#F6F4FF] mb-[24px] rounded-lg lg:w-[849px] lg:h-[56px] w-[240px] h-[30px] ' type="text" placeholder='' name="" id="" />

                        <input className='lg:w-[849px] w-[240px] h-[35px] lg:mt-[40px] mt-[20px] lg:h-[54px] text-white bg-[#6a52fd] rounded-lg ' type="submit" value="Submit" />






                    </form>


                </div>
            </div>
        </div>
    );
}

export default EditProfile_Comp;