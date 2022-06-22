import React from "react";
import { BsHouseDoor } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { BiWallet} from "react-icons/bi";


export const sideList = [
 
  {
    id: 1,
    link: "Home",
    path: "/home",
    icon: <BsHouseDoor />,
  },

  {
    id: 2,
    link: "Community",
    path: "/community",
    // icon: <HiOutlineSave />,
  },

  {
    id: 3,
    link: "Dates",
    path: "/dates",
    icon: <FiHeart />,
  },
  {
    id: 4,
    link: "Messages",
    path: "/message",
    icon: <BiEnvelope />,
  },
  {
    id: 5,
    link: "Wallet",
    path: "/wallet",
    icon: <BiWallet />,
  },
  {
    id: 6,
    link: "Settings",
    path: "/settings",
    icon: <FiSettings />,
  },
 
];
