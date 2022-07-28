
import React from "react";
// import axios from "axios";
import { calendar, clock, dropdown } from '../../assets'
import './dates.css'
import { Controller, useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FiCalendar } from 'react-icons/fi'



function RequestDatesComp() {

  const { handleSubmit, watch, control, formState: { errors } } = useForm()
  const onSubmit = (data) => console.log(data);

  console.log(watch('dateInput'));

  // const [feed, setFeed] = useState([]);

  // const url = "https://fakerapi.it/api/v1/persons?_quantity=21";



  // useEffect(() => {
  //   axios.get(url).then((response) => setFeed(response.data.data));
  // }, []);

  return (

    <div className="scale-width mt-[30px] mb-[5rem]">
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className=" notify flex flex-col items-center justify-center  lg:w-[779px] w-[352px] m-auto lg:h-[1193px]  bg-white rounded-md">

          <div className="inner_ lg:w-[559px] w-[300px] m-auto ">
            <p className="font-semibold pt-2 lg:pt-0">Date Request  </p>
            <p className=" text-[#666666] text-sm mt-[8px] ">Kindly provide the required details to set up your account</p>
            <p className=" text-[] mt-[35px] ">1. What kind of date do you have in mind?</p>
            <div className="lg:w-[520px] w-[300px] m-auto">
              <p className=" text-[#828282] text-sm my-[12px] ">You can select one or more options</p>
              <input type="checkbox" className=" border-[3px] border-[#6a52fd] accent-[#6a52fd] hover:accent-[#6a52fd] " id="" name="breakfast" value="" />
              <label htmlFor="Lunch"> Lunch</label> <br />
              <input type="checkbox" className="  border-[3px] border-[#6a52fd]  accent-[#6a52fd] hover:accent-[#6a52fd] " id="lunch" name="lunch" value="" />
              <label htmlFor="Dinner"> Dinner</label><br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " id="Dinner" name="Dinner" value="" />
              <label htmlFor="Drinks"> Drinks</label><br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " value="Submit" />
              <label htmlFor="Party">  Party</label><br />
              <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " value="Submit" />
              <label htmlFor="Freaky"> Freaky</label><br />
            </div>

            <p className="mt-[29px]">2. What's your preferred gender?</p>
            <div className="lg:w-[520px] w-[300px] m-auto">

              <p className="mt-[10px] text-sm text-[#666666]">You can select one or more options</p>

              <div className='mt-[16px]'>
                <input type="checkbox" className="  accent-[#6a52fd] hover:accent-[#6a52fd] " value="Dinner" />
                <label htmlFor="Dinner"> Male</label><br />

                <input type="checkbox" className=" accent-[#6a52fd] hover:accent-[#6a52fd] " value="Female" />
                <label htmlFor="Female"> Female</label><br />
              </div>
            </div>

            <p className="mt-[32px] ">3. Date location?</p>
            <div className="lg:w-[520px] w-[300px] m-auto">

              <p className="text-sm text-[#666666] my-[12px] ">Select country and city</p>

              <div className="relative flex  ">
                <input className="  border-[1px] px-[19px] rounded-l-lg border-[#6a52fd] outline-none bg-[#F6F4FF] lg:w-[463px] w-[276px] h-[50px] lg:h-[70px] " placeholder="Pick location" type="text" name="gender" id="test" defaultValue="Lagos,Nigeria" />
                <button>
                  <img className="inline-block lg:w-[74px] lg:h-[70px] h-[50px] w-[51px] " src={dropdown} alt="btn-submit" />
                </button>
              </div>
            </div>

            <p className="mt-[32px] ">4. What day would you like to meet?</p>

            <div className="lg:w-[520px] w-[300px] m-auto">
              <p className="text-sm text-[#666666] my-[12px] ">Kindly choose your preferred date</p>
              <div className="relative flex ">
                <Controller
                  control={control}
                  name="dateInput"
                  render={({ field }) => (
                    <DatePicker className=" relative border-[1px] px-[19px] rounded-lg border-[#6a52fd] outline-none
                     bg-[#F6F4FF] lg:w-[463px] lg:h-[70px] w-[276px] h-[50px]  "
                      placeholderText="Select date"
                      onChange={(date) => field.onChange(date)}
                      selected={field.value}
                    />
                  )}
                />
                <div className=" inset-y-0 right-0 absolute lg:w-[74px] lg:h-[70px] h-[50px] w-[51px] flex justify-center items-center rounded-r-lg
                 text-white bg-[#6a52fd] "> <FiCalendar /> </div>

                {errors.dateInput && <span>This field is required</span>}


              </div>
            </div>

            <p className="mt-[32px] ">5. When should your date begin?</p>
            <div className="lg:w-[520px] w-[300px] m-auto">
              <p className="text-sm text-[#666666] my-[12px] ">Kindly choose your preferred time</p>
              <div className="relative flex ">

                <input className="  border-[1px] px-[19px] rounded-l-lg outline-none border-[#6a52fd] bg-[#F6F4FF] lg:w-[463px]
               w-[276px] lg:h-[70px] " placeholder="Choose time" type="text" name="gender" id="test" defaultValue='7pm' />
                <button>
                  <img className="inline-block lg:w-[74px] lg:h-[70px] h-[50px] w-[51px] " src={clock} alt="btn-submit" />
                </button>
              </div>
            </div>

            <div className="lg:w-[520px] w-[300px] m-auto">

              <input type='submit' className=" mb-3 mt-[50px] text-[14px] lg:w-[520px] w-[300px] h-[54px] bg-[#6a52fd] rounded-lg text-white" />
            </div>
          </div>
        </div>
      </form>
    </div>

  );
}

export default RequestDatesComp;
