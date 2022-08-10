import React from "react";
import Skeleton from "react-loading-skeleton";

function FeedsSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div key={i} className="border-2  w-full h-[650px] mb-9 rounded-lg">
        <div className="display flex ml-10 mt-9">
          <div className="left">
            <Skeleton circle width={64} height={64} />
          </div>
          <div className="right ml-9 flex-[0.3] ">
            <Skeleton count={2} />
          </div>
        </div>

        <div className=" ml-10 py-5">
          <Skeleton width={200} />
        </div>

        <div className="lg:w-[586px] m-auto ">
          <Skeleton height={430} />
        </div>
      </div>
    ));
}

export default FeedsSkeleton;
