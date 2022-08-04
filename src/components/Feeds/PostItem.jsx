import userEvent from '@testing-library/user-event'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineLocationOn } from "react-icons/md";
import Post from '../Post/Post'

function PostItem({ post }) {
  return (
    <div>
      <div className="bg-white py-[17px] lg:py-[30px]  w-[327px] rounded-lg mb-5 lg:w-[672px] lg:h-[625px] h-[440px] " >
        <div>
          <div className="mb-7 lg:w-[586px] w-[300px] m-auto ">
            <div className=" flex space-x-[15px] w-full lg:space-x-[12px] items-center  ">
              <div className="feed-image">
                <NavLink to="/user_profile">
                  <img
                    loading="lazy"
                    decoding="async"
                    className=" max-w-[50px] h-[50px] lg:max-w-[4rem] lg:h-[4rem] p-[2.6px] rounded-full"
                    src={post.data.base_image}
                    alt="icon"
                  />
                </NavLink>
              </div>

              <div className="  w-[17rem]  md:w-[23rem] lg:w-[506.67px]">
                <NavLink to='/user_profile'>

                  <p className="font-[700] ">{post.data.user.username}</p>
                </NavLink>

                <div className="location flex justify-between lg:w-[506.67px] text-gray text-sm ">
                  <p className="md:text-sm sm:text-[0.4rem] text-[gray] flex items-center">
                    <span>
                      <MdOutlineLocationOn color="gray" />
                    </span>
                    {post.data.user.city.name},
                    {post.data.user.country.name}
                    {/* Lagos, Nigeria */}
                  </p>
                  <p className="text-[gray] hidden lg:block text-sm">
                    {new Date(post.data.created_at).toLocaleString('en-US')}

                  </p>
                </div>
              </div>
            </div>

            <div className=" m-auto w-[300px] py-1 lg:w-[586px]">

              <div className=" m-auto w-[300px] py-[1rem] lg:w-[586px]">

                <p>{post.data.body}.</p>
              </div>

              <div className=" m-auto md:h-[450px] w-[300px] lg:w-[586px] ">
                <img
                  loading="lazy"
                  decoding="async"
                  className=" w-[290px] h-[290px]  lg:w-[586px] lg:h-[430px] rounded-lg"
                  src={post.base_image}
                  alt=""
                />
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostItem