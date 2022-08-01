import React from 'react';
import  Skeleton  from 'react-loading-skeleton';

function RecommendationSkeleton({cards}) {
    return (
        Array(cards).fill(0).map((item, i) => 
            <div key={i}>
            <div className="left">
            <Skeleton width={130} height={123} />

            </div>

            {/* <div className="right">
            <Skeleton />

            </div> */}
        </div >)
       

        
    );
}

export default RecommendationSkeleton;