
import React, { useState, useEffect } from "react";
import axios from "axios";




function RequestDates() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (

    
    <div className=" notify flex flex-col  mx-6 justify-center lg:justify-start lg:h-[100vh] bg-white items-center lg:items-start  lg:w-[62rem] ">

      {feed
        ? feed.map((feed, idx) => (
          <div
            key={idx}
            className=" border-2 w-[90vw]  lg:w-full rounded-[2rem] px-8 bg-white  py-4  "            >
<div className="width w-full  m-auto">
            {/* {feed.description} */}
            hi
          </div>
          </div>
        ))
        : null}


    </div>
  );
}

export default RequestDates;
