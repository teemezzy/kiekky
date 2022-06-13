import React from "react";
import { NavLink } from "react-router-dom";

const CustomButton = ({ buttonDetails }) => {
  return (
    <div>
      <button type="button" className="w-44 h-14 button text-base">
        <NavLink to="/register">{buttonDetails}</NavLink>
      </button>
    </div>
  );
};

export default CustomButton;

export const CustomLogin = ({ loginDetails }) => {
  return (
    <button type="button">
      <NavLink to="/login">{loginDetails}</NavLink>
    </button>
  );
};
