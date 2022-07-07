
import React, { useState, useEffect } from "react";
import axios from "axios";




function About() {
  const [feed, setFeed] = useState([]);

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setFeed(response.data.data));
  }, []);

  return (
    <div className=" notify flex flex-col  mx-6 justify-center h-[14rem] bg-white sm:items-center sm:w-[100vw] lg:w-[60rem] ">
      
      {feed
        ? feed.map((feed, idx) => (
            <div
              key={idx}
              className="inner-content lg:w-[40rem] rounded-[2rem] px-8 bg-white border-2 py-4  "            >
                 
                <p className="content p-5">
                    {feed.description}
                </p>
              </div>

          ))
        : null}


    </div>
  );
}

export default About;
