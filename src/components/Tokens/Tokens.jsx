import React from "react";
import axios from "axios";
import { GiToken } from "react-icons/gi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect } from "react";
import { transaction } from "./Transaction";
import { FiDivide } from "react-icons/fi";

const Tokens = () => {
  return (
    <div>
      <div className="flex justify-around px-[53px] py-[65px] bg-white">
        <div className="border-2 w-64 h-36 pl-[22px] rounded-2xl bg-[#474749] text-white">
          <GiToken className="mt-[30.45px]" />
          <p className="font-bold mt-[34.75px] text-[22px]">5000</p>
          <div className="flex items-center w-[120px] justify-between pb-[33px]">
            <p className="font-normal text-[12px]">Token Balance</p>
            <div>
              <FaRegEyeSlash />
            </div>
          </div>
        </div>

        <div className="border-2 w-64 h-36 pl-[22px] rounded-2xl"></div>

        <div className="border-2 w-64 h-36 pl-[22px] rounded-2xl"></div>
      </div>

      <div>
        <p>My Transactions</p>

        <table className="border-2 w-[984px]">
          <thead className="flex order-0 justify-around text-center border-b-2">
            <div className="px-10">Date</div>
            <div className="px-10">Description</div>
            <div className="px-10">Recipient</div>
            <div className="px-10">Amount</div>
            <div className="px-10">Status</div>
          </thead>
          <tbody className="justify-evenly text-center ">
            {transaction.map((transactions) => (
              <tr
                className=" flex order-1 justify-around text-center border-b-2"
                key={transactions.id}
              >
                <th className="px-10 text-left">{transactions.date}</th>
                <th className="px-10 text-left"> {transactions.description} </th>
                <th className="px-10 text-left">{transactions.recipient}</th>
                <th className="px-10 text-left">{transactions.amount}</th>
                <th>{transactions.status}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tokens;
