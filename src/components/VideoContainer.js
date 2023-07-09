import React, { useContext } from "react";

import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import VideoContainerShimmer from "./VideoContainerShimmer";

import {VideoContext} from "../utils/VideoContext";

const VideoContainer = () => {
  const { videoData } = useContext(VideoContext);

  return videoData?.length == 0 ?  <VideoContainerShimmer /> :(
    <div className="flex flex-wrap">
      {videoData ? videoData.map((video, index) => {
        let videoId = video?.id?.videoId ? video.id.videoId : video.id ;
        return (
        <Link key={index} to={"/watch?v=" + videoId}><VideoCard key={videoId} info={video} /></Link>
      )}) : null}
    </div>
  );
};

export default VideoContainer;
