import React, { createContext, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_URL, YOUTUBE_SEARCH_VIDEOS_URL } from "../config/constants";


const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);

  const fetchVideoData = async (searchParam) => {
    try {
      if(searchParam != ""){
        const data = await fetch(YOUTUBE_SEARCH_VIDEOS_URL+searchParam);
        const json = await data.json();
        setVideoData(json.items);
      }else{
        const data = await fetch(YOUTUBE_VIDEOS_URL);
        const json = await data.json();
        setVideoData(json.items);
      }  
      
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  useEffect(()=>{
    fetchVideoData("");
  },[])

  return (
    <VideoContext.Provider value={{ videoData, fetchVideoData }}>
      {children}
    </VideoContext.Provider>
  );
};

export { VideoContext , VideoProvider};
