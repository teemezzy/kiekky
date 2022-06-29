import React, {useState, useEffect} from 'react';
import {BiCamera, BiVideoPlus} from  "react-icons/bi";
import {val} from "../../assets";

import axios from "axios";



function Post() {
  const [display, setDisplay] = useState([])

  const url = 'https://fakerapi.it/api/v1/books?_quantity=1';

  useEffect(() => {
    axios.get(url)
    .then(response => setDisplay(response.data.data) )
  }, [])


    return (
        <div>
            <div className="post_box bg-white  rounded-lg border-2 items-center mb-9 ">
<div className="username flex items-center">
    <div className="img-container pt-5 pr-5 pl-5">

    {
        display ? display.map((display, idx )=> (
          <div key={idx} className='story-status '>

            <div className='bookstore-card-image'>
              <img className='mb-2 w-[4rem]  h-[4rem]  p-[1.5px] border-[#625fad] border-2 rounded-[50%] cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={display.image} alt="icon" />
            </div>
        </div>
        ) )
        : null
      }

    </div>
<p className='text-[gray] '>Whats new..</p>
  </div>
  
  <div className="but flex justify-end items-center mr-5 mb-5">
  <p className='mx-1'><BiCamera color="gray"/>  </p>
 <p className='mx-1'> <BiVideoPlus color="gray"/> </p> 
<button className='mx-1 flex px-6 py-1 bg-[#6a52fd] text-white rounded-lg '  type="submit">Post it!</button>
  </div>

</div>
        </div>
    );
}

export default Post;