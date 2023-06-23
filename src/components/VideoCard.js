import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 w-80">
      <img className="rounded-lg w-full" src={thumbnails?.medium?.url}></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {statistics?.viewCount && <li> {statistics.viewCount} views</li> } 
      </ul>
    </div>
  );
};

export default VideoCard;
