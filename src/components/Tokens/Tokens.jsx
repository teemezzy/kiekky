import React from "react";
import axios from "axios";
import { GiToken } from "react-icons/gi";
import { FaRegEyeSlash } from "react-icons/fa";
import { useEffect } from "react";
import { transaction } from "./Transaction";

const Tokens = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://my-money-exchanger.p.rapidapi.com/list",
      headers: {
        "X-RapidAPI-Key": "33f4d5d5a1mshb026919c34c25e6p11ef50jsn5b95ce8a30bf",
        "X-RapidAPI-Host": "my-money-exchanger.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

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
        {transaction.map((transactions) => (
          <div className="flex justify-around text-left" key={transactions.id}>
            <div> {transactions.date} </div>
            <div> {transactions.recipient} </div>
            <div> {transactions.amount} </div>
            <div> {transactions.status} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokens;
