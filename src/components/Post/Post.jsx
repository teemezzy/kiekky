import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiCamera, BiVideoPlus } from "react-icons/bi";
import { useController, useForm } from "react-hook-form";

import { createPost } from "../../Redux/features/createPost/createPostSlice";
import PopUpModal from "./PopUpModal";
import axios from "axios";
// import { data } from "autoprefixer";

function Post() {
  const [showMyPopUp, setShowMyPopUp] = useState(false);
  const handleOnClosePopUp = () => setShowMyPopUp(false);
  const [display, setDisplay] = useState([]);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    reset,
    control,
    handleSubmit,
  } = useForm();

  const onSubmit = (data, base_image) => {
    // const image = new FormData()
    // image.append("base_image", data.images)
    const postData = {
      body: data.body,
      images: data.images,
      moneytize: 1,
      amount: 20,
      // base_image: data.images[0],
      video: data.video,
    };
    console.log(data.images);
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
      <div className="bg-white rounded-lg items-center mb-9 pb-[1px] w-[327px] lg:w-[672px] max-w-Full ">
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
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
                      </div>
                    </div>
                  ))
                : null}
            </div>

            <textarea
              className="outline-none w-full  text-[#212121] lg:mt-7"
              type="text"
              placeholder="Whats new.."
              name=""
              id=""
              {...register("body")}
            />
          </div>

          {/* <FileInput name="base_image" control={control} /> */}
          {/* <FileInput name="file" control={control} /> */}
          <input
            onChange={handleImage}
            files="png/jpg/gif/jpeg"
            type="file"
            accept="image"
            alt=""
            {...register("images")}
            multiple
          />

          <div className="but flex justify-end items-center mr-5 space-x-5 mb-5">
            <p
              onClick={() => setShowMyPopUp(true)}
              className="text-xl cursor-pointer "
            >
              <BiCamera color="gray" />{" "}
            </p>
            <p
              onClick={() => setShowMyPopUp(true)}
              className="text-xl cursor-pointer"
            >
              {" "}
              <BiVideoPlus color="gray" />{" "}
            </p>
            <input
              className="flex px-6 py-[6px] text-sm h-[2rem]
             bg-[#6a52fd] text-white rounded-lg cursor-pointer"
              type="submit"
              value="Post It!"
            />

            {/* <button  type="submit">Post it!</button> */}
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
