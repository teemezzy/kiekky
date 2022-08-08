import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { useForm } from "react-hook-form";
// import { Avatar } from "@mui/material";
import { createPost } from '../../Redux/features/createPost/createPostSlice'
import PopUpModal from "./PopUpModal";
import axios from "axios";
import { data } from "autoprefixer";
import { NavLink } from "react-router-dom";
// import { data } from "autoprefixer";

function Post() {
  const [showMyPopUp, setShowMyPopUp] = useState(false);
  const handleOnClosePopUp = () => setShowMyPopUp(false);
  const [display, setDisplay] = useState([]);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors }, reset,
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    const formData = new FormData()
    formData.append("images", data.images)
    const uploads = formData.get('images')
    //image
    // const showImages = image
    const postData = {
      body: data.body,
      images: {},
      moneytize: 0,
      amount: 0,
      // base_image:'',
      video: {},
    }
    console.log(postData);
    dispatch(createPost(postData));
    dispatch(reset());
  };

  const handleImage = (e) => {
    const url = e.target.value;
    if (url) {
      console.log(url, "image");
      dispatch("base_image");
    }
  };

  const url = "https://fakerapi.it/api/v1/books?_quantity=1";

  useEffect(() => {
    axios.get(url).then((response) => setDisplay(response.data.data));
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg items-center mb-9 pb-[1px] w-[352px] m-auto lg:w-[672px] max-w-Full ">
        {data.images}
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post" encType="multipart/form-data" >
          <div className="flex items-center">
            <div className="img-container pt-5 pr-5 pl-5">
              {display
                ? display.map((display, idx) => (
                  <div key={idx} className="story-status ">
                    <div className="post-image">
                      <img
                        className=" min-w-[4rem] h-[4rem]  p-[2.7px]  cursor-pointer  rounded-full"
                        src={display.image}
                        alt="icon"
                      />
                      {/* <Avatar alt={data.image} src="/static/images/avatar/1.jpg" /> */}
                    </div>
                  </div>
                ))
                : null}
            </div>

            <NavLink to='/post' >
              <textarea
                className="outline-none w-full  text-[#212121] lg:mt-7"
                type="text"
                placeholder="Whats new.."
                name=""
                id=""
                {...register("body")}
              />
            </NavLink>
          </div>


          {/* <FileInput name="base_image" control={control} /> */}
          {/* <FileInput name="file" control={control} /> */}
          {/* <input type="file" accept="image" alt='' {...register("images")} name='images' id='files' multiple />

          <p className='lg:w-[250px] '>Who Can See This Post</p>
          <input {...register("public")} className='border-2 my-[26px] ' name="subs" id="Public" type="radio" value="Public" />
          <label htmlFor="Public" className='my-[26px] ' >Public </label> <br />
          <input className='my-[26px]' {...register("moneytize", { required: true })} type="radio" name="subs" id="subscribers" value="subscribers" />
          <label htmlFor="Subscribers" className='my-[26px]'> Subscribers </label>
          <p>Set Token for Non-Subscribers</p>
          <input
            type="text"
            placeholder="Enter Token"
            className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-none ${errors.amount &&
              "focus:border-red-600 focus:ring-red-600 border-red-600 border-2"
              }`}
            {...register("amount", {
              required: true,
              pattern: {
                value: /\b(0?[1-9]|1[0-9]|2[0-5])\b/g,
                message:
                  "token must not be more than 25 tokens",
              },
            })}
          />
          {errors.amount && (
            <p className="text-red-600 text-xs"> Token must not be more than 25 tokens</p>
          )}
 */}

          <div className="but flex justify-end items-center mr-5 space-x-5 mb-5">
            <NavLink to='/post'>

              <p
                // onClick={() => setShowMyPopUp(true)}
                className="text-xl cursor-pointer " >
                <BiCamera color="gray" />  </p>
            </NavLink>

            <NavLink to='/post'>

              <p  // onClick={() => setShowMyPopUp(true)}
                className="text-xl cursor-pointer" >
                <BiVideoPlus color="gray" />  </p>
            </NavLink>

            <NavLink to='/post'>
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

      <PopUpModal
        visiblePopUp={showMyPopUp}
        onClosePopUp={handleOnClosePopUp}
      />
    </div>
  );
}

export default Post;
