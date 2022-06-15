import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const CustomInput = (placeholder, getDetails, type) => {
  const { register } = useForm();
  return (
    <div>
      <input
        type={type}
        {...register({ getDetails }, { required: true })}
        placeholder={placeholder}
      />
    </div>
  );
};
