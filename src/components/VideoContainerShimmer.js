import React, { useEffect } from "react";
import VideoCardShimmer from "./VideoCardShimmer";

const VideoContainerShimmer = () => {
  const emptyVideo = {
    statistics: {},
    snippet: {
      channelTitle: "d",
      title: "",
      thumbnails: "",
    },
  };
  const vidArray = new Array(20).fill(emptyVideo);
  //vidArray.map((vid)=>console.log("asach"))
  //
  return (
    <div className="flex flex-wrap">
      {vidArray.map((vid, index) => (
        <VideoCardShimmer key={index} info={vid} />
      ))}
    </div>
  );
};

export default VideoContainerShimmer;
