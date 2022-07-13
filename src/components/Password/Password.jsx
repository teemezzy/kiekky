import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const Password = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let userdata = {
      
      password: data.password,
      
    };

    dispatch((userdata));
  };

  return (
    <div className='w-[605px] h-[596px] bg-white px-[70.5px] '>
      
      <form onSubmit={handleSubmit(onSubmit)} className="py-[79px]">

      <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
               Old Password:
              </label>
              <input
                type="password"
                placeholder="Enter Old Password"
                className={` bg-[#F6F4FF] py-1 pl-4 ${
                  errors.password &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
                New Password:
              </label>
              <input
                type="password"
                placeholder=" Enter New Password"
                className={` bg-[#F6F4FF] py-1 pl-4 ${
                  errors.password &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="" className="text-[15px]">
               Confirm New Password:
              </label>
              <input
                type="password"
                placeholder="Confirm New Password"
                className={` bg-[#F6F4FF] py-1 pl-4 ${
                  errors.password &&
                  "focus:border-red-600 focus:ring-red-600 border-red-600"
                }`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <input
              type="submit"
              value="Save Changes"
              className="border-2 mt-5 w-full bg-[#6A52FD] py-2 pl-4 rounded-xl text-white"
            />

      </form>
    </div>
  )
}

export default Password