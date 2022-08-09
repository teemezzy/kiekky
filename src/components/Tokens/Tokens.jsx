import React, { useState, useEffect } from "react";
import TopUpTokenModal from "./TopUpTokenModal";
import TransferTokenModal from "./TransferTokenModal";
import { GiToken } from "react-icons/gi";
import { IoAdd } from "react-icons/io5";
import { FaRegEyeSlash, FaRegPaperPlane } from "react-icons/fa";
import { transaction } from "./Transaction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getTokenBalance, reset } from "../../Redux/features/token/tokenSlice";

const Tokens = () => {
  const [openModal, setOpenModal] = useState(false);
  const [accountModal, setAccountModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const accountModalOpen = () => setAccountModal(true);
  const accountModalClose = () => setAccountModal(false);
  const dispatch = useDispatch();
  const { userbalance, isError, message } = useSelector(
    (state) => state.wallet
  );
  // console.log(userbalance);

  useEffect((data) => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getTokenBalance(data));
    if (userbalance) {
      dispatch(reset());
    };
  }, [ userbalance.data, isError, message, dispatch ]);

  return (
    <div>
      <div className="flex lg:flex-row flex-col lg:justify-around px-[53px] py-[65px] bg-white lg:w-full w-[352px">
        <div className="border-2 w-64 h-36 pl-[22px] rounded-lg bg-[#474749] text-white">
          <GiToken className="mt-[30.45px]" />
          {userbalance.map((userBalance, index) => (
            <div
              key={index}
              className="font-bold mt-[34.75px] text-[22px]"
            >
              {userBalance.data}
            </div>
          ))}
          <div className="flex items-center w-[120px] justify-between pb-[33px]">
            <p className="font-normal text-[12px]">Token Balance</p>
            <div>
              <FaRegEyeSlash />
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div
          onClick={openModalHandler}
          className=" inner-content1 rounded-2xl hidden lg:block "
        >
          <div className=" bg-white w-64 h-36 pl-[22px] rounded-lg flex flex-col justify-center items-center">
            <div className="w-[32px] h-[32px] rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center mb-[10px]">
              <IoAdd />
            </div>
            <p>Top Up Token</p>
          </div>
        </div>

        <div
          onClick={accountModalOpen}
          className=" inner-content1 rounded-2xl hidden lg:block "
        >
          <div className=" bg-white w-64 h-36 pl-[22px] rounded-lg flex flex-col justify-center items-center">
            <div className="w-[32px] h-[32px] rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center mb-[10px]">
              <FaRegPaperPlane />
            </div>
            <p>Transfer Token</p>
          </div>
        </div>

        {/* Mobile */}
        <div className=" lg:hidden block mt-5">
          <div className="flex justify-around">
            <div
              onClick={openModalHandler}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[32px] h-[32px] rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
                <IoAdd />
              </div>
              <p className="pt-[10px]">Top Up Token</p>
            </div>

            <div
              onClick={accountModalOpen}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-[32px] h-[32px] rounded-full text-[#6A52FD] bg-[#F6F4FF] flex justify-center items-center">
                <FaRegPaperPlane />
              </div>
              <p className="pt-[10px]">Transfer Token</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[80px] w-[347px] lg:w-full ">
        <p className="text-2xl font-semibold mb-[24px] text-[#212121]">
          My Transactions
        </p>

        <table className=" lg:w-[984px] w-[347px]">
          <thead className="border-b-2 border-[#F2F2F2] bg-[#F5F3FF]">
            <tr className="flex order-0 items-center justify-around text-center h-[46px]">
              <th className="lg:w-28 w-8 text-left lg:text-[16px] text-[12px] text-[#212121]">
                Date
              </th>
              <th className="lg:w-28 w-14 text-left lg:text-[16px] text-[12px] text-[#212121]">
                Description
              </th>
              <th className="lg:w-28 w-14 text-left lg:text-[16px] text-[12px] text-[#212121]">
                Recipient
              </th>
              <th className="lg:w-28 w-12 text-left lg:text-[16px] text-[12px] text-[#212121]">
                Amount
              </th>
              <th className="lg:w-28 w-14 text-left lg:text-[16px] text-[12px] text-[#212121]">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="justify-evenly text-center bg-white">
            {transaction.map((transactions) => (
              <tr
                className=" flex order-1 h-[46px] items-center justify-around text-center border-b-2 border-[#F2F2F2]"
                key={transactions.id}
              >
                <td className="lg:w-28 w-8 text-left lg:text-[16px] text-[12px] text-[#4F4F4F]">
                  {transactions.date}
                </td>
                <td className="lg:w-28 w-14 text-left lg:text-[16px] text-[12px] text-[#4F4F4F]">
                  {transactions.description}
                </td>
                <td className="lg:w-28 w-14 text-left lg:text-[16px] text-[12px] text-[#4F4F4F]">
                  {transactions.recipient}
                </td>
                <td className="lg:w-28 w-12 text-left lg:text-[16px] text-[12px] text-[#4F4F4F]">
                  {transactions.amount}
                </td>
                <td className="lg:w-28 w-14 text-left lg:text-[16px] text-[12px] text-[#4F4F4F]">
                  {transactions.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TopUpTokenModal onClose={closeModalHandler} visible={openModal} />
      <TransferTokenModal onClose={accountModalClose} visible={accountModal} />
    </div>
  );
};

export default Tokens;
