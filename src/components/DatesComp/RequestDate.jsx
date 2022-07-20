
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'
import {heart} from '../../assets'
import { NavLink } from "react-router-dom";



function Apply() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=21";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (

    <div className="scale-width ">
      <div className=" notify flex flex-col items-center justify-center  lg:w-[980px] w-[327px] m-auto lg:h-[900px] h-[600px] bg-white ">

      <img
          className='lg:w-[350px] w-[116px] '
          src={heart}
         alt=''
          />
        
<p>You have no dates Request</p>
<p className="text-[#BDBDBD] text-sm mt-[10px] ">Meet members now</p>
<NavLink to='/request_dates'>
<button className="bg-[#6a52fd] rounded-md mt-[30px] text-[white] lg:w-[259px] w-[163px] h-[50px] "> + New Date Request</button>
</NavLink>
         

        </div>
      </div>
    
  );
}

export default Apply;
