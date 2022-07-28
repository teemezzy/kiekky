import React, { useState } from "react";
import EditPlan from "./EditPlan";
import { MdOutlineArrowBack } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const SetSubscription = () => {
  const [sub, setSub] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const upgradeHandler = () => {
    if (sub === false) {
      setSub(true);
    } else {
      setSub(false);
    }
    window.scrollTo(0, 0)
  };

  const onClick = () => {
    if (sub === true) {
      setSub(false);
     
    } 
    window.scrollTo(0, 0)
  };

  return (
    <>
      {!sub && (
        <div className="lg:w-[984px] w-[347px] m-auto lg:h-[684px] h-[900px] bg-white">
          <div className="lg:w-[903px] w-[300px] m-auto">
            <h2 className="text-[18px] font-semibold pt-[39px] mb-[12px]">
              Set the price for your subscriptions
            </h2>
            <p className="text-[#828282] w-[300px] lg:w-[903px]">
              Offer a subscription and your subscribers can view your photos and
              videos for a set price. You can also offer several months as a
              package or a discounted subscription to attract new subscribers or
              to win back old subscribers. Buyers pay you on a monthly basis and
              get access to all published content. Important: Subscribers expect
              you to post high quality photos and videos on a regular basis.
            </p>
          </div>

          <div className="bg-[#FFF0EF] inner-content rounded-md lg:px-[35px] px-[22px] lg:pb-[33px] lg:pt-[31px] pt-[33px] pb-[31px]  lg:mt-[45px] mt-[30px] lg:w-[903px] w-[300px] mb-[150px] m-auto">
            <h2 className="text-[#EF3D39] lg:mb-[14px] mb-[16px] text-lg font-semibold">
              Upgrade your account
            </h2>
            <p className="text-[#828282] lg:w-[807px] w-[256px]">
              Please be aware that you can only enable subscriptions if you have
              a verified profile and bank connection. We will check your
              information and send you a confirmation email as soon as this
              process has been completed.
            </p>
            <button
              onClick={upgradeHandler}
              className="bg-[#EB5757] text-[14px] lg:mt-[24px] mt-[39px] text-white py-[8.5px] rounded-md px-[45.5px]"
            >
              Upgrade {sub}
            </button>
          </div>
        </div>
      )}

      {sub && (
        <div className="lg:w-[984px] w-[347px] m-auto lg:h-[750px] h-[2170px] bg-white">
          <div
            className=" lg:px-10 w-5 px-[24px] text-[#000000] pt-[39px] lg:pt-[39px]"
            onClick={onClick}
          >
            <MdOutlineArrowBack />
          </div>

          <div className="lg:w-[903px] w-[300px] m-auto">
            <h2 className="text-[18px] font-semibold mt-10 mb-[12px]">
              Set the price for your subscriptions
            </h2>
            <p className="text-[#828282] ">
              Offer a subscription and your subscribers can view your photos and
              videos for a set price. You can also offer several months as a
              package or a discounted subscription to attract new subscribers or
              to win back old subscribers. Buyers pay you on a monthly basis and
              get access to all published content. Important: Subscribers expect
              you to post high quality photos and videos on a regular basis.
            </p>

            <div className=" lg:w-[903px] w-[300px] mt-[51px] ">
              <div className="mb-[25px]">
                <h2 className="text-[18px] font-bold">Plans</h2>
                <p className="text-[#828282] mt-[13px]">
                  Choose what to offer your subscribers
                </p>
              </div>

              <div className="flex lg:flex-row flex-col justify-between items-center lg:h-[340px] h-[1450px] mb-[81px]">
                <div className="lg:w-[202px] w-[262px] bg-[#F6F4FF] px-[24px] rounded-lg">
                  <h3 className="pt-[26px] text-[24px] font-bold text-[#6A52FD]">
                    100 Token
                  </h3>
                  <p className="mt-[24px] text-[#828282]">1 Month</p>
                 
                    <p className="flex items-center mt-[19px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                  <button
                  onClick={openModalHandler}
                    type="button"
                    className="rounded-xl mt-[35px] mb-[27px] py-[9px] px-[41px] text-white bg-[#6A52FD] lg:w-[153px] w-[201px]"
                  >
                    Edit Plan
                  </button>
                </div>
                <div className="lg:w-[202px] w-[262px] bg-[#F6F4FF] px-[24px] rounded-lg">
                  <h3 className="pt-[26px] text-[24px] font-bold text-[#6A52FD]">
                    100 Token
                  </h3>
                  <p className="mt-[24px] text-[#828282]">3 Month</p>
                 
                    <p className="flex items-center mt-[19px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                  <button
                  onClick={openModalHandler}
                    type="button"
                    className="rounded-xl mt-[35px] mb-[27px] py-[9px] px-[41px] text-white bg-[#6A52FD] lg:w-[153px] w-[201px]"
                  >
                    Edit Plan
                  </button>
                </div>
                <div className="lg:w-[202px] w-[262px] bg-[#F6F4FF] px-[24px] rounded-lg">
                  <h3 className="pt-[26px] text-[24px] font-bold text-[#6A52FD]">
                    100 Token
                  </h3>
                  <p className="mt-[24px] text-[#828282]">6 Month</p>
                 
                    <p className="flex items-center mt-[19px]">
                      <span className="mr-[10px]">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className="mr-[10px]">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className="mr-[10px]">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                  <button onClick={openModalHandler} type="button" className="rounded-xl mt-[35px] mb-[27px] py-[9px] px-[41px] text-white bg-[#6A52FD] lg:w-[153px] w-[201px]">
                    Edit Plan
                  </button>
                </div>
                <div className="lg:w-[202px] w-[262px] bg-[#F6F4FF] px-[24px] rounded-lg">
                  <h3 className="pt-[26px] text-[24px] font-bold text-[#6A52FD]">
                    100 Token
                  </h3>
                  <p className="mt-[24px] text-[#828282]">12 Month</p>
                 
                    <p className="flex items-center mt-[19px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                    <p className="flex items-center mt-[17px]">
                      <span className=" mr-[10px] ">
                        <TiTick />
                      </span>
                      View All Post
                    </p>
                  <button onClick={openModalHandler}
                    type="button"
                    className="rounded-xl mt-[35px] mb-[27px] py-[9px] px-[41px] text-white bg-[#6A52FD] lg:w-[153px] w-[201px] "
                  >
                    Edit Plan
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

<EditPlan onClose={closeModalHandler} visible={openModal} />
    </>
  );
};

export default SetSubscription;
