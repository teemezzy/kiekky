import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { useForm } from 'react-hook-form'
import {createPost} from '../../Redux/features/createPost/createPostSlice'
import axios from "axios";

function Post() {
  const [display, setDisplay] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = data =>{
    console.log(data);
dispatch(createPost())
    
  } 
  const dispatch = useDispatch()


  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setDisplay(response.data.data));
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg items-center mb-9 pb-[1px] w-[327px] lg:w-[672px] max-w-Full ">
        <div className="flex items-center">
          <div className="img-container pt-5 pr-5 pl-5">
            {display
              ? display.map((display, idx) => (
                <div key={idx} className="story-status ">
                  <div className="post-image">
                    <img
                      className=" w-[4rem] h-[4rem]  p-[2.7px]  cursor-pointer hover:scale-110 transition transform duration-200 ease-out rounded-full"
                      src={display.image}
                      alt="icon"
                    />
                  </div>
                </div>
              ))
              : null}
          </div>
          <p className="text-[gray] ">Whats new..</p>
        </div>

        <div className="but flex justify-end items-center mr-5 space-x-5 mb-5">
          <p className='text-xl'><BiCamera color="gray" />  </p>
          <p className='text-xl'> <BiVideoPlus color="gray" /> </p>
          <button className='flex px-6 py-[6px] text-sm h-[2rem] bg-[#6a52fd] text-white rounded-lg ' type="submit">Post it!</button>
        </div>

      </div>

      <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
        <input {...register("Post")} />
        <p>{errors.Post?.message}</p>
        <input type="submit" value="" />
      </form>


    </div >
  );
}

export default Post;
