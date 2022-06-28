import React, {useEffect, useState} from 'react';
import {val, elena} from '../../assets';
import { BsArrowLeft, BsArrowRight} from  "react-icons/bs";
import './Status.css';
import axios from 'axios';
import Stories from 'react-insta-stories'

function Status() {
    // const storys = [ "data:image/jpeg;base64,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"];
   
    const [story, setStory] = useState([])

  const url = 'https://fakerapi.it/api/v1/books?_quantity=5';

  useEffect(() => {
    axios.get(url)
    .then(response => setStory(response.data.data) )
  }, [])

//   console.log(story)
    return (
        <div>
            <div className="status flex w-[90vw] space-x-5 overflow-x-scroll  px-4 pt-10 mb-8  ">
 <p className="flex items-center "><BsArrowLeft color="gray"/> </p>

{/* <Stories 
stories = {storys} /> */}
{/* 
<div className=" mx-5">
<img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>
<div  className='mx-5'>
<img className=' mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Valerie</p>
</div>
<div className='mx-5' >
<img  className=' mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>


<div className='mx-5' >
<img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>
<div className='mx-5' >
<img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div>
<div className='mx-5' >
<img className='mb-2 w-[4rem] h-[4rem]' src={val} alt="" /> 
<p>Ecstacy</p>
</div> */}


{
        story ? story.map((story, idx )=> (
          <div key={idx} className='story-status '>

            <div className='bookstore-card-image'>
              <img className='mb-2 w-[4.5rem] h-[4.rem]  p-[1.5px] border-[#625fad] border-2 rounded-[50%] cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={story.image} alt="icon" />
            </div>
  
            <div>
              <h5 className="text-sm w-14 truncate"> {story.title} </h5>  
            </div>
        </div>
        ) )
        : null
      }

<p className="flex items-center"> <BsArrowRight color="gray" /> </p> 

</div > 
        </div>
    );
}

export default Status;