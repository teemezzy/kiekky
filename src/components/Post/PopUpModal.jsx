import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { BiEdit } from 'react-icons/bi'
import { BsImage } from 'react-icons/bs'
import { useDropzone } from 'react-dropzone'
import { useDispatch } from 'react-redux';
import { createPost } from '../../Redux/features/createPost/createPostSlice'
import { useForm } from 'react-hook-form'

function PopUpModal({ visiblePopUp, onClosePopUp, onDrop, accept, open }) {
    const {
        register,
        formState: { errors }, reset, resetField,
        handleSubmit,
    } = useForm();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
    }

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append("images", data.images[0])
        const Uploads = formData.get('images')
        // image
        // const showImages = image
        const postData = {
            body: data.body,
            images: Uploads,
            moneytize: 1,
            amount: data.amount,
            // base_image: data.images[0],
            video: data.video
        }
        console.log(Uploads);
        console.log(data.images[0]);
        // console.log(image);
        console.log(postData);
        dispatch(createPost(postData));
        // reset()
    }

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ accept, onDrop })
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));


{/* // (document.body).append(forms) */}

    if (!visiblePopUp) return null;
    return (
        <div 
        // className='fixed inset-0  bg-black bg-opacity-20 z-50
        //                 backdrop-blur-sm flex justify-center items-center'
                        >
<form onSubmit={handleSubmit(onSubmit)} action="" method="post">

<div className=" lg:w-[1320px] lg:h-[680px] justify-between  flex bg-[#E5E5E5] w-[400px] h-[380px] rounded-lg ">
    <div className="posts w-[800px] rounded-lg bg-white">
        <div className=' pb-3 flex justify-between border-b-[0.5px] lg:w-[700px] pt-9 m-auto'>
            <div className='text-[#6a52fd] flex items-center space-x-1'><BiEdit size='1.2rem' /> <span> Post </span>  </div>
            <button className=' text-[#BDBDBD] ' onClick={onClosePopUp}> x </button>
        </div>

        <div className="text lg:w-[700px] m-auto">
            <textarea className="outline-none  text-[#212121] bg-[#F6F4FF] lg:w-[700px] h-[132px] p-7 rounded-lg lg:my-7" type="text"
                placeholder="Whats new.." name="" id="" {...register("body")} />
        </div>

        <div className="img lg:w-[700px] m-auto ">
            <div className='text-[#6a52fd] flex items-center space-x-1'><BsImage size='1.2rem' /> <span> Media </span>  </div>
            {/* <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>  */}
        </div>
        <input className='' type="file" accept="image" alt='' {...register("images")} name='images' id='files' multiple />

    </div>


    <div className="lg:w-[424px] w-[100px] lg:h-[300px] bg-white rounded-lg lg:pt-[24px] ">
        <div className=' lg:w-[360px] m-auto ' >

            <p className='lg:w-[250px] '>Who Can See This Post</p>
            <input {...register("public")} className=' ' name="subs" id="Public" type="radio" value="Public" />
            <label htmlFor="Public" className='mt-[16px] ' >Public </label> <br />

            <div>{toggle ? (<div>  <input className='my-[26px]' {...register("moneytize", { required: true })} type="radio" name="subs" id="subscribers" value="subscribers" onClick={handleClick} />
                <label htmlFor="Subscribers" className='my-[16px]'> Subscribers </label> </div>) : (<div>  <input className='my-[26px]' {...register("moneytize", { required: true })} type="radio" name="subs" id="subscribers" value="subscribers" onClick={handleClick} />
                    <label htmlFor="Subscribers" className='my-[16px]'> Subscribers </label> </div>)}</div>



            <div>
                {toggle && (
                    <div>
                        <p>Set Token for Non-Subscribers</p>
                        <input
                            type="text"
                            placeholder="Enter Token"
                            className={` bg-[#F6F4FF] h-[46px] rounded-lg px-4 outline-none ${errors.amount &&
                                "focus:border-red-600 focus:ring-red-600 border-red-600 border-[0.5px]"
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
                        )}</div>
                )}
            </div>



            <div className=" flex lg:mt-[10px] justify-between w-[300px] ">

<div className='' onClick={onClosePopUp}  >
<input className='text-sm lg:w-[141px] lg:h-[39px]
                 bg-[#6a52fd] text-white rounded-lg cursor-pointer'  type="submit" value="Post It!" />
</div>
                
                <input className=' lg:w-[141px] text-sm lg:h-[39px]
                  text-[#6a52fd] border-[#6a52fd] border-[0.5px] rounded-lg cursor-pointer' type="button" onClick={() => reset()} value="Delete" />

            </div>
        </div>

    </div>

</div>
</form>
    </div>
        


    );
}

export default PopUpModal