import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

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

    dispatch(userdata);
  };

  return (
    <div className="lg:w-[42.125rem] w-[340px] h-[596px] lg:m-0 m-auto bg-white">
      <p className="pt-[56px] text-[#828282] text-[15px] font-extralight lg:w-[464px] w-[282px] m-auto">
        You can change your password by filling the form
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="py-[29px] lg:w-[464px] w-[282px] m-auto">
        <div className="flex flex-col mb-4 ">
          <label htmlFor="" className="text-[15px] mb-2">
            Old Password:
          </label>
          <input
            type="password"
            placeholder="Enter Old Password"
            className={` bg-[#F6F4FF] py-[10px] px-5 rounded-lg ${
              errors.password &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-4 ">
          <label htmlFor="" className="text-[15px] mb-2">
            New Password:
          </label>
          <input
            type="password"
            placeholder=" Enter New Password"
            className={` bg-[#F6F4FF] py-[10px] px-5 rounded-lg  ${
              errors.password &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-4 lg:w-[464px] w-[282px] m-auto">
          <label htmlFor="" className="text-[15px] mb-2">
            Confirm New Password:
          </label>
          <input
            type="password"
            placeholder="Confirm New Password"
            className={` bg-[#F6F4FF] py-[10px] px-5 rounded-lg ${
              errors.password &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        <input
          type="submit"
          value="Save Changes"
          className="border-2 mt-5 bg-[#6A52FD] py-[10px] rounded-lg text-white lg:w-[464px] w-[282px] m-auto "
        />
      </form>
    </div>
  );
};

export default Password;
