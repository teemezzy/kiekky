import React from "react";
import { Sidebar } from "../components";
function Wallet(props) {
  return (
    <div className="flex bg-[#E5E5E5]">
       <div className=" fixed hidden lg:block sidebar_prt pt-8">
            <Sidebar />
            </div>

      <div>Wallet</div>
    </div>
  );
}

export default Wallet;
