import React, {useState, useEffect} from 'react';
import {elena} from '../../assets';
import axios from 'axios'
import './Recommendations.css'


function Recommendations(props) {
    const [story, setStory] = useState([])

  const url = 'https://fakerapi.it/api/v1/books?_quantity=9';

  useEffect(() => {
    axios.get(url)
    .then(response => setStory(response.data.data) )
  }, [])
   
    
    return (
        <div>

        <p className="lg:block hidden">Recommendations </p>
        <div className="recommendations hidden  mt-[1rem] mx-10  w-[16rem] lg:block">
  {
        story ? story.map((story, idx )=> (
          <div key={idx} className='story-status '>

            <div className='image'>
              <img className='w-[7rem] h-[7rem]' src={story.image} alt="icon" />
            </div>
  
        </div>
        ) )
        : null
      }
</div>

        </div>
    );
}

export default Recommendations;