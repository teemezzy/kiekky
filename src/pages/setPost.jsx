import React, { useCallback, useState } from "react";
import axios from "axios";
import { BiEdit } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { createPost } from "../Redux/features/createPost/createPostSlice";
import { useForm } from "react-hook-form";
import { UserNav } from "../components";

function SetPost() {
  const {
    register,
    formState: { errors },
    reset,
    resetField,
    handleSubmit,
  } = useForm();

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("images", data.images[0]);
    const Uploads = formData.get("images");
    const postData = {
      body: data.body,
      images: Uploads,
      moneytize: 1,
      amount: data.amount,
      // base_image: data.images[0],
      video: data.video,
    };
    console.log(Uploads);
    console.log(data.images[0]);
    // console.log(image);
    console.log(postData);
    dispatch(createPost(postData));
    // reset()
  };
  return (
    <div className=" bg-[#F9FAFA] h-screen m-auto flex ">
      <UserNav />

      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="post"
        className="lg:w-[90%] h-full mt-[7.5rem] m-auto">
        <div className="  m-auto justify-between lg:flex rounded-lg ">
          <div className="posts lg:w-[800px] w-[352px] rounded-lg bg-white lg:h-[55vh] ">
            <div className=" pb-3 flex justify-between w-[320px] border-b-[0.5px] lg:w-[700px]   pt-9 m-auto">
              <div className="text-[#6a52fd] flex items-center space-x-1">
                <BiEdit size="1.2rem" /> <span> Post </span>{" "}
              </div>
              <NavLink to="/feeds">
                {" "}
                <button className=" text-[#BDBDBD] "> x </button>
              </NavLink>
            </div>

            <div className="text lg:w-[700px] m-auto w-[313px] ">
              <textarea
                className="outline-none  text-[#212121] bg-[#F6F4FF] w-[313px] lg:w-[700px] h-[132px] p-7 rounded-lg my-6"
                type="text"
                placeholder="Whats new.."
                name=""
                id=""
                {...register("body")}
              />
            </div>

            <div className="img lg:w-[700px] w-[313px] m-auto ">
              <div className="text-[#6a52fd] flex items-center space-x-1">
                <BsImage size="1.2rem" /> <span> Media </span>{" "}
              </div>
            </div>
            <div className="img lg:w-[700px] w-[313px] py-5 lg:py-0 m-auto lg:mt-7">
              <input
                className="lg:w-[700px] m-auto"
                type="file"
                accept="image"
                alt=""
                {...register("images")}
                name="images"
                id="files"
                multiple
              />
            </div>
          </div>

          <div className="lg:w-[424px] lg:h-[280px] w-[352px] bg-white rounded-lg mt-8 lg:mt-0 pt-[24px] ">
            <div className=" lg:w-[360px] w-[352px] m-auto ">
              <p className="lg:w-[250px] w-[312px] m-auto lg:m-0 ">
                Who Can See This Post
              </p>
              <input
                {...register("public")}
                className=" accent-[#6a52fd] "
                name="subs"
                id="Public"
                type="radio"
                value="Public"
              />
              <label htmlFor="Public" className="mt-[16px] ">
                Public
              </label>
              <br />
              <div>
                {toggle ? (
                  <div>
                    <input
                      className="my-[26px] accent-[#6a52fd]"
                      {...register("moneytize", { required: true })}
                      type="radio"
                      name="subs"
                      id="subscribers"
                      value="subscribers"
                      onClick={handleClick}
                    />
                    <label htmlFor="Subscribers" className="my-[16px]">
                      Subscribers
                    </label>
                  </div>
                ) : (
                  <div>
                    <input
                      className="my-[26px] accent-[#6a52fd]"
                      {...register("moneytize", { required: true })}
                      type="radio"
                      name="subs"
                      id="subscribers"
                      value="subscribers"
                      onClick={handleClick}
                    />
                    <label htmlFor="Subscribers" className="my-[16px]">
                      Subscribers
                    </label>
                  </div>
                )}
              </div>
              <div>
                {toggle && (
                  <div className=" w-[312px] m-auto">
                    <p>Set Token for Non-Subscribers</p>
                    <input
                      type="text"
                      placeholder="Enter Token"
                      className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-none ${
                        errors.amount &&
                        "focus:border-red-600 focus:ring-red-600 border-red-600 border-[0.5px]"
                      }`}
                      {...register("amount", {
                        required: true,
                        pattern: {
                          value: /\b(0?[1-9]|1[0-9]|2[0-5])\b/g,
                          message: "token must not be more than 25 tokens",
                        },
                      })}
                    />
                    {errors.amount && (
                      <p className="text-red-600 text-xs">
                        {" "}
                        Token must not be more than 25 tokens
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className=" flex lg:mt-[10px] py-7 lg:py-0 justify-between lg:w-[300px]  w-[313px] m-auto ">
                <div className="">
                  <input
                    className="text-sm w-[141px] h-[39px]
                             bg-[#6a52fd] text-white rounded-lg cursor-pointer"
                    type="submit"
                    value="Post It!"
                  />
                </div>

                <input
                  className=" w-[141px] text-sm h-[39px]
                             text-[#6a52fd] border-[#6a52fd] border-[0.5px] rounded-lg cursor-pointer"
                  type="button"
                  onClick={() => reset()}
                  value="Delete"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SetPost;
