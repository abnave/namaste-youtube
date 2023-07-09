import React from "react";
import { useDispatch } from "react-redux";
import { cropTitle, displayPublishedBefore } from "../utils/helper";

const SuggestionCard = ({ videos }) => {
  const dispatch = useDispatch();
  const title = videos?.snippet?.title;
  const maxLength = 40;
  const croppedTitle = cropTitle(title, maxLength);
  const publishedAt = videos?.snippet?.publishedAt;
  const timeSincePublished = displayPublishedBefore(publishedAt);

  return (
    <div
      className="p-2 m-2 flex w-auto "
    >
      <img
        alt="thumbnail"
        src={videos?.snippet?.thumbnails?.medium?.url}
        className="rounded-xl w-52 h-28"
      />
      <div className="px-2">
        <h1 className="font-bold my-2">{croppedTitle}</h1>
        <h3>{videos?.snippet?.channelTitle}</h3>
        <h5>{timeSincePublished}</h5>
      </div>
    </div>
  );
};

export default SuggestionCard;
