import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

const VideoCardShimmer = () => {
  return (
    <div>
      <SkeletonTheme>
        <div className="card-skeleton">
          <Skeleton width={350} height={200} className="p-2 m-2" />
          <div className="flex flex-wrap">
          <Skeleton circle width={30} height={30} className="p-2 m-2" />
            <div className="flex flex-col">
            <Skeleton width={300} height={30} className="p-2 m-1" />
            <Skeleton width={300} height={20} className="p-2 m-1" />
            </div>
          
          </div>
          
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default VideoCardShimmer;
