
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi'
import { calendar, clock, dropdown, heart } from '../../assets'



function RequestDatesComp() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/persons?_quantity=21";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (

    <div className="scale-width mt-[30px] ">
      <div className=" notify flex flex-col items-center justify-center  lg:w-[779px] w-[327px] m-auto lg:h-[1050px] h-[600px] bg-white rounded-md">

        <div className="inner w-[559px] m-auto ">
          <p className="font-semibold">Date Request</p>
          <p className=" text-[#666666] text-sm mt-[8px] ">Kindly provide the required details to set up your account</p>
          <p className=" text-[] mt-[35px] ">1. What kind of date do you have in mind?</p>
          <div className="w-[520px] m-auto">
            <p className=" text-[#828282] text-sm my-[12px] ">You can select one or more options</p>
            <form action="" method="post">
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " id="" name="breakfast" value="" />
              <label for="breakfast"> Breakfast</label> <br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " id="lunch" name="lunch" value="" />
              <label for="lunch"> Lunch</label><br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " id="Dinner" name="Dinner" value="" />
              <label for="Dinner"> Dinner</label><br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " value="Submit" />
              <label for="Drinks"> Drinks</label><br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " value="Submit" />
              <label for="Freaky"> Freaky</label><br />
            </form>
          </div>

          <p className="mt-[29px]">2. What's your preferred gender?</p>
          <div className="w-[520px] m-auto">

            <p className="mt-[10px] text-sm text-[#666666]">You can select one or more options</p>

            <form className='mt-[16px] ' action="" method="post">
              <input type="checkbox" className="  accent-[#6a52fd] hover:accent-[#6a52fd] " value="Dinner" />
              <label for="Dinner"> Male</label><br />

              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " value="Female" />
              <label for="Female"> Female</label><br />
            </form>
          </div>

          <p className="mt-[32px] ">3. Date location?</p>
          <div className="w-[520px] m-auto">

            <p className="text-sm text-[#666666] my-[12px] ">Select country and city</p>

            <div className="relative flex  ">
              <input className="  border-[1px] px-[19px] rounded-l-lg border-[#6a52fd] outline-none bg-[#F6F4FF] w-[463px] h-[70px] " placeholder="Pick location" type="text" name="gender" id="test" value="" />
              <button>
                <img className="inline-block w-[74px] h-[70px] " src={dropdown} alt="btn-submit" />
              </button>
            </div>
          </div>

          <p className="mt-[32px] ">4. What day would you like to meet?</p>

          <div className="w-[520px] m-auto">
            <p className="text-sm text-[#666666] my-[12px] ">Kindly choose your preferred date</p>
            <div className="relative flex  ">
              <input className="  border-[1px] px-[19px] rounded-l-lg border-[#6a52fd] outline-none bg-[#F6F4FF] w-[463px] h-[70px] " placeholder="Choose date" type="text" name="gender" id="test" value="" />
              <button>
                <img className="inline-block w-[74px] h-[70px] " src={calendar} alt="btn-submit" />
              </button>
            </div>
          </div>

          <p className="mt-[32px] ">5. When should your date begin?</p>
          <div className="w-[520px] m-auto">
            <p className="text-sm text-[#666666] my-[12px] ">Kindly choose your preferred time</p>
            <div className="relative flex ">
              <input className="  border-[1px] px-[19px] rounded-l-lg outline-none border-[#6a52fd] bg-[#F6F4FF] w-[463px] h-[70px] " placeholder="Choose time" type="text" name="gender" id="test" value="" />
              <button>
                <img className="inline-block w-[74px] h-[70px] " src={clock} alt="btn-submit" />
              </button>
            </div>
          </div>

          <div className="w-[520px] m-auto">

            <button className=" mt-[50px] w-[520px] h-[54px] bg-[#6a52fd] rounded-lg text-white">Submit</button>
          </div>
        </div>

      </div>
    </div>

  );
}

export default RequestDatesComp;
