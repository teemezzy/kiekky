import React, { useEffect } from "react";

import { NavLink } from "react-router-dom";

function Redirect() {
  return (
    <div className=" bg-[#E5E5E5] h-[100%] lg:w-[984px] w-[347px]">
      <div className="flex justify-center items-center m-auto  w-[250px]">
        <div className="">Account Already Setup</div>
        <div>
          <NavLink to="/login">Click here to Login</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Redirect;
