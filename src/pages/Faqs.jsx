import React,{useState} from "react";
import IoIosArrowDown from "react-icons/io";
import Faq from "../assets";
import data from "./data";

const Faqs = () => {
  const [active, setActive] = useState ('')
  const handleClick = () => {
    setActive(active)
  };

  return (
    <div>
      <div>
        <img src={Faq} alt="faq-img" />
      </div>
      <div>
        {data.map((data) => (
          <div key={data.id}>
            <div>
              {/* {data.title} <span onClick={handleClick}>{? active {data.icon} : {data.iconn}}</span> */}
            </div>
            <div>{data.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
