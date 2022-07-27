import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PopUpModal({ visiblePopUp, onClosePopUp }) {
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
                <div className=" lg:w-[1000px] lg:h-[680px] w-[400px] h-[380px] rounded-lg ">
              <div className='bg-white h-[3rem] w-[3rem] rounded-lg relative ml-auto '> <button className=' absolute flex justify-between px-5 pt-3 ml-auto ' onClick={onClosePopUp}> x </button></div>  

                <img
                    className=" lg:w-[800px] w-[300px] h-[300px]  lg:h-[600px] flex justify-center items-center m-auto rounded-md"
                    src={feed.image}
                    alt="icon"
                />

            </div>
            </div>
        )) : null

    );
}

export default PopUpModal;