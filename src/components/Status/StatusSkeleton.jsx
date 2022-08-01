import React from 'react';
import  Skeleton  from 'react-loading-skeleton';

function StatusSkeleton({cards}) {
    return (
        Array(cards).fill(0).map((item, i) => 
            <div key={i}>
            <div className="left">
            <Skeleton circle width={64} height={64} />

            </div>

            {/* <div className="right">
            <Skeleton />

            </div> */}
        </div >)
       

        
    );
}

export default StatusSkeleton;