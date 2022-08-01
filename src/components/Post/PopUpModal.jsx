import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BiEdit } from 'react-icons/bi'
import {useForm } from 'react-hook-form'

function PopUpModal({ visiblePopUp, onClosePopUp }) {
    const [register, handleSubmit ] = useForm()
    const [feed, setFeed] = useState([]);

    const url = "https://fakerapi.it/api/v1/books?_quantity=1";

    useEffect(() => {
        axios.get(url).then((response) => setFeed(response.data.data));
    }, []);

    if (!visiblePopUp) return null;
    return (
        feed ? feed.map((feed) => (
            <div className='fixed inset-0  bg-black bg-opacity-20 z-50
                        backdrop-blur-sm flex justify-center items-center'>
                <div className=" lg:w-[1320px] lg:h-[680px] justify-between  flex bg-[#E5E5E5] w-[400px] h-[380px] rounded-lg ">
                    <div className="posts w-[836px] bg-white">
                        <div className=' rounded-lg flex justify-between  lg:w-[600px] pt-9 m-auto'>
                            <div className='text-[#6a52fd] flex items-center space-x-1'><BiEdit size='1.2rem' /> <span> Post </span>  </div>
                            <button className='  ' onClick={onClosePopUp}> x </button>
                        </div>
                    </div>


                    <div className="lg:w-[424px] lg:h-[250px]  bg-white rounded-lg ">
                        <p className='lg:w-[193px] '>Who Can See This Post</p>
                        

                    </div>





                </div>
            </div>
        )) : null

    );
}

export default PopUpModal;