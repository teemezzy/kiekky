import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiOutlineSave } from "react-icons/hi";
import { BsSafe } from "react-icons/bs";
import { BiIdCard } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";


export const sideList = [
 
  {
    id: 1,
    link: "Home",
    path: "/home",
    // icon: <MdDashboard />,
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
    // icon: <BsSafe />,
  },
  {
    id: 4,
    link: "Message",
    path: "/message",
    // icon: <BiIdCard />,
  },
  {
    id: 5,
    link: "Wallet",
    path: "/wallet",
    // icon: <BsCalculator />,
  },
  {
    id: 6,
    link: "Settings",
    path: "/settings",
    // icon: <BsCalculator />,
  },
 
];
