import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FileUploader } from "react-drag-drop-files";

const KYC = () => {
  const [file, setFile] = useState(null);
  const fileTypes = ["JPG", "PNG", "PDF", "JPEG"];
  const handleChange = (file) => {
    setFile(file);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let userdata = {
      full_name: data.full_name,
      email: data.email,
      username: data.username,
      phone: data.phone,
      password: data.password,
      city: data.city,
      country: data.country,
    };

    dispatch(userdata);
  };
  return (
    <div className="bg-white">
      <div className="w-[625px] m-auto bg-white">
      <p className='pt-[47px] pb-[24px]'>Please verify your identity</p>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="flex flex-col mb-4">
          <label htmlFor="full_name" className="text-[15px]">
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Firstname and Lastname (Surname)"
            className={` bg-[#F6F4FF] py-1 pl-4 ${
              errors.full_name &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("full_name", {
              required: true,
              pattern: {
                value: /[A-Za-z]/,
                message: "Sorry this can only handle names with characters",
              },
            })}
          />
          {errors.full_name && (
            <p className="text-red-600 text-xs">Full Name is required</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="username" className="text-[15px]">
            Date Of Birth:
          </label>
          <input
            type="text"
            placeholder="Date Of Birth"
            className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
              errors.dob &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("dob", { required: true })}
          />
          {errors.dob && (
            <p className="text-red-600 text-xs">Date of Birth is required</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-[15px]">
            Nationality
          </label>
          <input
            type="email"
            placeholder="Enter Nationality"
            className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
              errors.nationality &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("nationality", { required: true })}
          />
          {errors.nationality && (
            <p className="text-red-600 text-xs">Nationality is required</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="text-[15px]">
            Phone Number:
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
              errors.phone &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs">Phone Number is required</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="text-[15px]">
            Country of Residence:
          </label>
          <input
            type="tel"
            placeholder="Country"
            className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
              errors.phone &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("country", { required: true })}
          />

          {errors.country && (
            <p className="text-red-600 text-xs">Country is needed</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="text-[15px]">
            City:
          </label>
          <input
            type="tel"
            placeholder="City"
            className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
              errors.phone &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("city", { required: true })}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="text-[15px]">
            Phone Number:
          </label>
          <input
            type="tel"
            placeholder="Phone Number"
            className={`border-2 bg-[#F6F4FF] py-1 pl-4 ${
              errors.phone &&
              "focus:border-red-600 focus:ring-red-600 border-red-600"
            }`}
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs">Phone Number is required</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="" className="text-[15px]">
            Document Type:
          </label>
          <select
            {...register("document_type")}
            defaultValue={"default"}
            name="document_type"
            id="document_type"
            className="border-2 bg-[#F6F4FF] py-1 pl-4 w-full"
          >
            <option
              value={"default"}
              placeholder="Select Document Type"
              disabled
              className="text-[15px]"
            >
              Select Document Type
            </option>
            <option value="document_type">Driver License</option>
            <option value="document_type">Passport</option>
            <option value="document_type">National ID</option>
            <option value="document_type">Voter's Card</option>
          </select>
        </div>

        <div>
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            className="border-2"
          />
          <p>{file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p>
        </div>

        <input
          type="submit"
          value="Save"
          className="border-2 mt-5 w-full bg-[#6A52FD] py-2 pl-4 rounded-xl text-white"
        />
      </form>
      </div>
    </div>
  );
};

export default KYC;
