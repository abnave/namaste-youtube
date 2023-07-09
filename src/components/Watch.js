import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, closeSideBar } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { CommentsContainer } from "./CommentsContainer";
import { SEARCH_BY_ID, SEARCH_BY_CHANNEL_ID } from "../config/constants";
import { displayViewCount, displayPublishedBefore } from "../utils/helper";
import LiveChat from "./LiveChat";
import RelatedSuggestions from "./RelatedSuggestions";

const Watch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState("");
  const [channelInfo, setChannelInfo] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideBar());
    dispatch(closeMenu());
    getVideoDetails(videoId);
  }, []);

  async function getVideoDetails(videoId) {
    try {
      const data = await fetch(SEARCH_BY_ID + videoId);
      const response = await data.json();
      console.log(response);
      const channelId = response?.items[0]?.snippet?.channelId;
      getChannelDetails(channelId);
      setVideoInfo(response?.items[0]);
    } catch (error) {
      console.log(error);
    }
  }
  async function getChannelDetails(channelId) {
    try {
      const data = await fetch(SEARCH_BY_CHANNEL_ID + channelId);
      const response = await data.json();
      setChannelInfo(response?.items[0]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex">
      <div className="m-2 p-3 my-5 w-[800px]">
        <iframe
          width="800"
          height="450"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold text-xl py-2 ">{videoInfo?.snippet?.title}</h1>
        <div className="flex items-center">
          <img
            className="rounded-full w-10"
            src={channelInfo?.snippet?.thumbnails?.default?.url}
            alt="Channel Logo"
          ></img>
          <h3 className="font-semibold px-2">{channelInfo?.snippet?.title}</h3>
          <h3 className="text-gray-500">
            {displayViewCount(channelInfo?.statistics?.subscriberCount)}{" "}
            subscribers
          </h3>
          <button className="bg-red-500 text-white px-2 py-1 rounded-lg ml-4">
            Subscribe
          </button>
          <div className="flex items-end">
            <button className="bg-gray-200 text-black px-2 py-1 rounded-lg ml-4 inline-block">
              👍{displayViewCount(videoInfo?.statistics?.likeCount)}
            </button>
            <button className="bg-gray-200 text-black px-2 py-1 rounded-lg ml-4 inline-block">
              👎
            </button>
          </div>
        </div>
        <div
          className={
            " bg-gray-100 shadow-lg rounded-2xl  dark:bg-gray-800" +
            (showDescription ? " h-auto " : " h-28 overflow-hidden ")
          }
        >
          <h1 className="font-bold p-2 ">
            {displayViewCount(videoInfo?.statistics?.viewCount)} views |{" "}
            {displayPublishedBefore(videoInfo?.snippet?.publishedAt)}
          </h1>
          <div className="border border-gray-300 "></div>
          <h3
            className="p-2 font-semibold"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? "Show less" : "Show more"}
          </h3>
          <p className="p-2 ">{videoInfo?.snippet?.description}</p>
        </div>
        <div>
          <CommentsContainer />
        </div>
      </div>
      <div className="my-5">
        <RelatedSuggestions videoId={videoId} />
      </div>
    </div>
  );
};

export default Watch;
