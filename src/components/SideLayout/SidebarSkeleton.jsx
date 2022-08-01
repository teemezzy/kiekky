import React from 'react';
import Skeleton from 'react-loading-skeleton';

function FeedsSkeleton({ cards }) {
    return (
        Array(cards).fill(0).map((item, i) =>
            <div key={i} className='border-2 ml-10 w-[17rem] h-full mb-9 rounded-lg'>

                <div className="display flex ml-10 mt-4 mb-7">
                    <div className="left">
                        <Skeleton circle width={64} height={64} />
                    </div>
                    <div className="right ml-9 flex-[0.3] ">
                        <Skeleton count={2} />
                    </div>
                </div>


            </div >)



    );
}

export default FeedsSkeleton;