import React, { useState } from "react";
import SubModalBasic from "./SubModalBasic"
import SubModalGold from "./SubModalGold"
import SubModalPremium from "./SubModalPremium"

export const Button500 = ({ btnDetails, subid }) => {
  const [open500Modal, setOpen500Modal] = useState(false);
  const close500ModalHandler = () => setOpen500Modal(false);

  const handleClicksub = () => {
    console.log(`${subid} working sam`);

    open500ModalHandler();
  };
  const open500ModalHandler = () => {
    setOpen500Modal(true);

    // console.log(subscription.data[1].id)
  };

  return (
    <>
      <button
        onClick={handleClicksub}
        className="bg-[#6A52FD] text-[14px] text-white rounded-lg w-[222px] h-[48px] mt-[42px] mb-[27px]"
      >
        {btnDetails}
      </button>

      <SubModalBasic
        onClose={close500ModalHandler}
        visible={open500Modal}
        id500={subid}
      />
    </>
  );
};

// export default Button500;


export const Button1000 = ({ btnDetails, subid }) => {
    const [open1000Modal, setOpen1000Modal] = useState(false);
    const close1000ModalHandler = () => setOpen1000Modal(false);
    
    const open1000ModalHandler = () => {
        setOpen1000Modal(true);
    };
    return (
        <>
        <button
            onClick={open1000ModalHandler}
            className="text-[#6A52FD] text-[14px] bg-white rounded-lg w-[222px] h-[48px] mt-[42px] mb-[27px]"
        >
            {btnDetails}
        </button>
        <SubModalGold onClose={close1000ModalHandler} visible={open1000Modal} />
        </>
    );
}

export const Button1500 = ({ btnDetails, subid }) => {
    const [open1500Modal, setOpen1500Modal] = useState(false);
    const close1500ModalHandler = () => setOpen1500Modal(false);
    
    const open1500ModalHandler = () => {
        setOpen1500Modal(true);
    };
    return (
        <>
        <button
            onClick={open1500ModalHandler}
            className="bg-[#6A52FD] text-[14px] text-white rounded-lg w-[222px] h-[48px] mt-[42px] mb-[27px]"
        >
           {btnDetails}
        </button>
        <SubModalPremium onClose={close1500ModalHandler} visible={open1500Modal}  id1500={subid}/>
        </>
    );
}
