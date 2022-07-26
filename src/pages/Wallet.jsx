import React, { useState } from "react";
import {
  Sidebar,
  UserNav,
  Tokens,
  Subscriptions,
  KYC,
  Vouchers,
  RequestPayment,
  Referrals,
  MobileNav,
} from "../components";

const Wallet = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (tab) => {
    setToggleState(tab);
  };

  const activeTabs =
    "text-[#6A52FD] text-[16px] py-[16.5px] w-[167px] m-auto text-center bg-white cursor-pointer outline-none";
  const tabs =
    "text-[#BDBDBD] w-[157px] text-[16px] text-center m-auto cursor-pointer outline-none";

  const activePayout =
    "lg:w-[255px] w-[270px] text-[#6A52FD] text-[16px] py-[16.5px] px-[53px]  m-auto text-center bg-white cursor-pointer outline-none";

  const activeContent = " ";
  const content = "bg-white w-full hidden p-[20px]";

  return (
    <div className="mt-[6.3rem] bg-[#F9FAFA] pb-[117px]">
      <UserNav />
      <div className="flex">
        <div className="hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className="mt-10 lg:w-[984px] m-auto">
          {/* Title For TabMenu */}
          <div className=" lg:w-[58.9rem] w-[327px] overflow-x-scroll lg:overflow-x-auto scale mt-10">
            <div className="flex lg:w-auto w-[200vw]">
              <div
                className={toggleState === 1 ? (tabs, activeTabs) : tabs}
                onClick={() => toggleTab(1)}
              >
                Token
              </div>
              <div
                className={toggleState === 2 ? (tabs, activeTabs) : tabs}
                onClick={() => toggleTab(2)}
              >
                Subscription
              </div>
              <div
                className={toggleState === 3 ? (tabs, activeTabs) : tabs}
                onClick={() => toggleTab(3)}
              >
                KYC
              </div>
              <div
                className={
                  toggleState === 4 ? (tabs, activeTabs, activePayout) : tabs
                }
                onClick={() => toggleTab(4)}
              >
                Request Payout
              </div>
              <div
                className={toggleState === 5 ? (tabs, activeTabs) : tabs}
                onClick={() => toggleTab(5)}
              >
                Referrals
              </div>
              <div
                className={toggleState === 6 ? (tabs, activeTabs) : tabs}
                onClick={() => toggleTab(6)}
              >
                Voucher
              </div>
            </div>
          </div>

          {/* The content within each box  */}
          <div
            className={toggleState === 1 ? (content, activeContent) : content}
          >
            <Tokens />
          </div>
          <div
            className={toggleState === 2 ? (content, activeContent) : content}
          >
            <Subscriptions />
          </div>
          <div
            className={toggleState === 3 ? (content, activeContent) : content}
          >
            <KYC />
          </div>
          <div
            className={toggleState === 4 ? (content, activeContent) : content}
          >
            <RequestPayment />
          </div>
          <div
            className={toggleState === 5 ? (content, activeContent) : content}
          >
            <Referrals />
          </div>
          <div
            className={toggleState === 6 ? (content, activeContent) : content}
          >
            <Vouchers />
          </div>
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Wallet;
