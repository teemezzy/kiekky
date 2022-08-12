import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { createPost } from "../../Redux/features/createPost/createPostSlice";
import axios from "axios";
import { data } from "autoprefixer";
import { NavLink } from "react-router-dom";

function Post() {
  const [display, setDisplay] = useState([]);
  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setDisplay(response.data.data));
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg items-center mb-9 pb-[1px] w-[352px] m-auto lg:w-[672px] max-w-Full ">
        {data.images}
        <form>
          <div className="flex items-center">
            <div className="img-container pt-5 pr-5 pl-5">
              {display
                ? display.map((display, idx) => (
                    <div key={idx} className="story-status ">
                      <div className="post-image">
                        <img
                          className=" min-w-[4rem] h-[4rem]  div-[2.7px]  cursor-pointer  rounded-full"
                          src={display.image}
                          alt="icon"
                        />
                      </div>
                    </div>
                  ))
                : null}
            </div>

            <NavLink to="/feeds/post">
              <textarea
                className="outline-none w-full  text-[#212121] lg:mt-7"
                type="text"
                placeholder="What's new..."
                name=""
                id=""
              />
            </NavLink>
          </div>

          <div className="but flex justify-end items-center mr-5 space-x-5 mb-5">
            <NavLink to="/feeds/post">
              <div className="text-xl cursor-pointer ">
                <BiCamera color="gray" />
              </div>
            </NavLink>
            <NavLink to="/post">
              <div className="text-xl cursor-pointer">
                <BiVideoPlus color="gray" />
              </div>
            </NavLink>
            <NavLink to="/feeds/post">
              <input
                className="flex px-6 py-[6px] text-sm h-[2rem]
             bg-[#6a52fd] text-white rounded-lg cursor-pointer"
                type="submit"
                value="Post It!"
              />
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Post;
