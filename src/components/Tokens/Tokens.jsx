import React from "react";
import axios from "axios";
import { GiToken } from "react-icons/gi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect } from "react";
import { transaction } from "./Transaction";
// import { FiDivide } from "react-icons/fi";
// import { card } from "../../assets/card.png";

const Tokens = () => {
  return (
    <div>
      <div className="flex justify-around px-[53px] py-[65px] bg-white lg:w-full w-[327px]">
        <div className = "border-2 w-64 h-36 pl-[22px] rounded-2xl bg-[#474749] text-white">
          <GiToken className="mt-[30.45px]" />
          <p className="font-bold mt-[34.75px] text-[22px]">5000</p>
          <div className="flex items-center w-[120px] justify-between pb-[33px]">
            <p className="font-normal text-[12px]">Token Balance</p>
            <div>
              <FaRegEyeSlash />
            </div>
          </div>
        </div>

        <div className=" inner-content1 rounded-2xl hidden lg:block"> 
        <div className="  bg-white w-64 h-36 pl-[22px] rounded-2xl"></div> 
        </div>

        <div className=" inner-content1 rounded-2xl hidden lg:block">
          <div className="bg-white w-64 h-36 pl-[22px] rounded-2xl"></div>
        </div>
      </div>

      <div className="mt-[80px] w-[327px] lg:w-full ">
        <p className="text-2xl font-semibold mb-[24px]">My Transactions</p>

        <table className=" lg:w-[984px] w-[327px]">
          <thead className="flex order-0 h-[46px] items-center justify-around text-center border-b-2 border-[#F2F2F2] bg-[#F5F3FF]">
            <th className="lg:w-28 text-left">Date</th>
            <th className="lg:w-28 text-left">Description</th>
            <th className="lg:w-28 text-left">Recipient</th>
            <th className="lg:w-28 text-left">Amount</th>
            <th className="lg:w-28 text-left">Status</th>
          </thead>
          <tbody className="justify-evenly text-center bg-white">
            {transaction.map((transactions) => (
              <tr
                className=" flex order-1 h-[46px] items-center justify-around text-center border-b-2 border-[#F2F2F2]"
                key={transactions.id}
              >
                <td className="lg:w-28 text-left">{transactions.date}</td>
                <td className="lg:w-28 text-left">{transactions.description} </td>
                <td className="lg:w-28 text-left">{transactions.recipient}</td>
                <td className="lg:w-28 text-left">{transactions.amount}</td>
                <td className="lg:w-28 text-left">{transactions.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tokens;
