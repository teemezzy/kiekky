import React from "react";
import { BsHouseDoor, BsGrid1X2 } from "react-icons/bs";
import { FiHeart , FiLogOut  } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";


export const sideList2 = [
 
  {
    id: 1,
    link: "Home",
    path: "/feeds",
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
  
];
