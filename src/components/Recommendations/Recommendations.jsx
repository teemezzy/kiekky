
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { verified } from '../../assets';
import './Recommendations.css'
import { ribbon } from '../../assets'
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton'
import RecommendationSkeleton from './RecommendationSkeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function Recommendations(props) {
  const [story, setStory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://fakerapi.it/api/v1/books?_quantity=10";

  useEffect(() => {
    axios.get(url).then((response) => {setStory(response.data.data);
     setIsLoading(false);});
  }, []);

  return (
      <div className='max-w-full '>

      <p className="lg:block hidden ">Recommendations </p>
      <div className="recommendations hidden mt-[1rem]  w-[268px] lg:block ">
      { isLoading &&<RecommendationSkeleton cards={10} />}

        {story
          ? story.map((story, idx) => (
            <div key={idx} className="story-status ">
              <div className="image relative">

                <div className=" absolute  inset-x-0 bottom-0 bg-opacity-70 names w-[125px] h-[30px] bg-[#A8A8A8] rounded-b-md ">

                  <p className=" text-center py-[3px] truncate text-white">{story.author || <Skeleton width={60} /> }  <span className=" h-[0.8rem]  inline-block"><img src={verified} alt="" /> </span>  </p>
                </div>
                <div className="absolute top-0 right-0">
                  <img src={ribbon} alt="" />
                </div>
                <img
                  className="w-[130px] h-[123px] rounded-md"
                  src={story.image }
                  alt="icon"
                />
              </div>
            </div>
          ))
          : null}
      </div>

    </div>
  );
}
export default Recommendations;
