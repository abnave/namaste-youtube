import React from "react";
import { displayViewCount, displayPublishedBefore } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="m-2 w-80">
      <img className="rounded-lg w-full" src={thumbnails?.medium?.url} alt="Thumbnail"></img>
      <ul>
        <li className="font-bold py-2">{title.length > 75 ? title.slice(0,75).concat("..."): title}</li>
        <li>{channelTitle}</li>
        {statistics?.viewCount && <li> {displayViewCount(statistics.viewCount)} views | <span>{displayPublishedBefore(snippet.publishedAt)}</span> </li> }

      </ul>
    </div>
  );
};

// print viewCount in millions or lakhs or thousands

export default VideoCard;
