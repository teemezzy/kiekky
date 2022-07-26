
import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Info(props) {
  const [story, setStory] = useState([]);
  const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setStory(response.data.data));
  }, []);

  return (
    <div className=' lg:mr-[59px] '>
      <p className="lg:block  hidden"> </p>
      <div className=" hidden pt-2 rounded-md bg-white h-[536px] w-[248px] lg:block">
        {story
          ? story.map((story, idx) => (
              <div key={idx} className=" ">
                <div className="image  space-y-6 w-[186px] m-auto ">
               <p className='text-[#6a52fd] font-thin '>Bio</p>

               <div className='data'>
                <p>Profession</p>
                <p className='text-[#828282] text-sm'>Data Analyst</p>

               </div>

               <div className='data'>
                <p>Language</p>
                <p className='text-[#828282] text-sm'>English</p>

               </div>

               <div className='data'>
                <p>Hobby</p>
                <p className='text-[#828282] text-sm'>Music</p>

               </div>

               <div className='data'>
                <p>Height <span className='text-sm text-[#828282]'> (cm)</span></p>
                <p className='text-[#828282] text-sm'>140</p>

               </div>
               <div className='data'>
                <p>City</p>
                <p className='text-[#828282] text-sm'>{story.address.city}</p>

               </div>

               <div className='data'>
                <p>Age</p>
                <p className='text-[#828282] text-sm' >30</p>

               </div>

                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
export default Info;
