import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { sideList } from "./sideList";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"




const Sidebar = ({children}) => {
  const navigate = useNavigate();
  const [post, setPost] = useState([])

  const url = 'https://fakerapi.it/api/v1/books?_quantity=1';

  useEffect(() => {
    axios.get(url)
    .then(response =>setPost(response.data.data) )
  }, [])
  
  return (
    <div className="side ">

      {
        post ? post.map((post, idx )=> (

          <div key={idx} className='story-status '>
      <div className="user_name mx-10 bg-white flex items-center px-5 py-7 mb-8 w-[17rem] h-[7rem]">   

            <div className='bookstore-card-image'>
              <img className='mb-2 w-[4rem] blink h-[4rem]  p-[1.5px] border-[#625fad] border-2 rounded-[50%] cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={post.image} alt="icon" />
            </div>

            <div className="names ml-4 ">
   <h5 className=" font-bold "> {post.author} </h5>  
      <h5 className="text-sm text-[gray]  "> @{post.author} </h5> 
      </div>
        </div>
        </div>
        ) )
        : null
      }
   
  
     

     

      <div className="side_list mx-10 bg-white w-[17rem] h-[40rem] divide-y divide-opacity-50  divide-gray-300">
        {sideList.map((side) => (
          <div key={side.id} className="ml-5 pt-5 items-center text-sm text-gray">
            <NavLink to={side.path}
              className={`${
                window.location.pathname === side.path ? "active" : null
              }  flex items-center w-full h-[4rem] pl-5   hover:bg-[#E5E5E5] `}
              
            >
              <span className="mr-3 ">{side.icon}</span>
              {side.link}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
