import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Sidebar, UserNav, Subscribe, MobileNav } from '../components'




function UserSubscribe(props) {
  const [feed, setFeed] = useState([])

  const url = "https://fakerapi.it/api/v1/persons?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data))

  }, [])

  return (
    <div className="notifications bg-[#F9FAFA]">
      <UserNav />
      <div className="flex mt-[6rem] mb-[5rem] bg-[#F9FAFA] ">

        <div className="   h-[100%] hidden lg:block sidebar_prt pt-8">
          <Sidebar />
        </div>
        <div className='w-[327px] lg:w-[984px] m-auto'>
          <Subscribe />
        </div>
        <MobileNav />
      </div>
    </div>
  );
}

export default UserSubscribe;

