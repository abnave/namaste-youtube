import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../config/constants";
import { cacheResults } from "../utils/searchSlice";
import { VideoContext } from "../utils/VideoContext";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { fetchVideoData } = useContext(VideoContext);
  const searchCache = useSelector((store) => store.search.cache);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log("API Call: "+ searchQuery);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
    setSuggestions(json[1]);
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleClick = (suggestion) => {
    setSearchQuery("");
    fetchVideoData(suggestion);
  };
  return (
    <div className="grid grid-flow-col p-2 m-1 ">
      <div className="flex flex-wrap col-span-1 py-2">
        <img
          className="h-6 cursor-pointer ml-4 mr-2"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9y0gIRU_-CR569wHNjMPbik4rrytE2urwbw&usqp=CAU"
          onClick={() => {
            toggleMenuHandler();
          }}
        >
          
        </img>
        <a href={"/"}>
        <img
            className="h-6 mx-4"
            alt="youtube-logo"
            src="data:image/png;base64,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"
          ></img>
        </a>
          
          
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-3/4 border border-gray-400 rounded-l-full p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button className="border border-gray-400 rounded-r-full px-5 py-2 bg-gray-100">
          🔍
        </button>
        {suggestions?.length > 0 ? (
          <div className="fixed bg-white px-3 py-2 my-2 w-[25rem] rounded-lg  shadow-lg border-gray-400">
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-2 py-2 shadow-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    handleClick(suggestion);
                  }}
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="col-span-1 py-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        ></img>
      </div>
    </div>
  );
};

export default Header;
