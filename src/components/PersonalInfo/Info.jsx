
import React, {useEffect} from 'react';
import {useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../../container/Spinner";
import {personalProfile, reset } from '../../Redux/features/personalProfile/personalProfileSlice'

function Info() {
  const dispatch = useDispatch()
  const {profile, isLoading, isError, message } = useSelector((state)=> state.personalProfile)

  useEffect(() => {
    if(isError){
      toast.error(message);
    }
    dispatch(personalProfile())

    return () => {
      dispatch(reset())
    }
  }, [isError, dispatch, message])
  
if (isLoading) {
  return <Spinner />
}

  return (
    <div className=' lg:mr-[59px] '>
      <p className="lg:block  hidden"> </p>
      <div className=" hidden pt-2 rounded-md bg-white h-[536px] w-[248px] lg:block">
        {profile
          ? profile.map((profiles, id) => (
              <div key={id} className=" ">
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
                <p className='text-[#828282] text-sm'>{profiles.city.name}</p>

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
