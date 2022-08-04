import React, { useCallback } from 'react';
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

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        const postData = {
            body: data.body,
            images: data.images,
            moneytize: 1,
            amount: 20,
            base_image: data.base_image,
            video: data.video
        }

        console.log(postData);
        dispatch(createPost(postData));
        reset()
    }

    const handleImage = (e) => {
        const id = e.target.value;
        if (id) {
          console.log(`${id}image`);
          dispatch('base_image');
        }
      };
    
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ accept, onDrop })
    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    // const url = "https://fakerapi.it/api/v1/books?_quantity=1";

    // useEffect(() => {
    //     axios.get(url).then((response) => setFeed(response.data.data));
    // }, []);

    if (!visiblePopUp) return null;
    return (
        <div className='fixed inset-0  bg-black bg-opacity-20 z-50
                        backdrop-blur-sm flex justify-center items-center'>

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
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <p>Drop the files here ...</p> :
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                }
                            </div>
                            <aside>
                                <ul>{files}</ul>
                            </aside>
                            <input  onChange={(e) => handleImage(e)} {...register("base_image")} className=' ' id='base_image' name="base_image" type="file" value="" />

                        </div>
                    </div>


                    <div className="lg:w-[424px] w-[100px] lg:h-[250px] bg-white rounded-lg lg:pt-[24px] ">
                        <div className=' lg:w-[360px] m-auto ' >

                            <p className='lg:w-[250px] '>Who Can See This Post</p>
                            <input {...register("radio")} className='border-2 my-[26px] ' name="public" id="Public" type="radio" value="Public" />
                            <label htmlFor="Public" className='my-[26px] ' >Public </label> <br />
                            <input className='my-[26px]' {...register("radio", { required: true })} type="radio" name="sub" id="subscribers" value="subscribers" />
                            <label htmlFor="Subscribers" className='my-[26px]'> Subscribers </label>
                            {/* <input type="checkbox" name="" id="" /> */}

                            <div className=" flex lg:mt-[24px] justify-between w-[300px] ">
                                <input className='text-sm lg:w-[141px] lg:h-[39px]
                                 bg-[#6a52fd] text-white rounded-lg cursor-pointer' type="submit" value="Post It!" />
                                <input className=' lg:w-[141px] text-sm lg:h-[39px]
                                  text-[#6a52fd] border-[#6a52fd] border-[0.5px] rounded-lg cursor-pointer' type="button" onClick={()=> resetField('body')} value="Delete" />

                            </div>
                        </div>

                    </div>

                </div>
            </form>
        </div>


    );
}

export default PopUpModal