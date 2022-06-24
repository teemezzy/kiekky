import React from "react";
import { BsHouseDoor, BsGrid1X2 } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { FiHeart , FiLogOut  } from "react-icons/fi";
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
    icon: <BsGrid1X2 />,
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
    path: "/messages",
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
  {
    id: 7,
    link: "Logout",
    path: "/logout",
    icon: <FiLogOut />,
  },
 
];
