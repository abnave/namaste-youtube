import React, { useEffect, useState } from "react";
import { RELATED_SEARCH } from "../config/constants";
import { Link } from "react-router-dom";
import SuggestionCard from "./SuggestionCard";
import { useSelector } from "react-redux";

const RelatedSuggestions = ({videoId}) => {

  const [relatedResults, setRelatedResults] = useState([]);
  useEffect(() => {
    getRelatedVideos();
    // eslint-disable-next-line
  }, []);


  const getRelatedVideos = async () => {
    const data = await fetch(RELATED_SEARCH + videoId);
    const json = await data.json();
    setRelatedResults(json?.items);
  };

  return (
    <div >
      {relatedResults?.map((video) => (
        <Link
          to={"/watch?v=" + video?.id?.videoId}
          key={video?.id?.videoId}
          value={video?.id}
        >
          <SuggestionCard videos={video} />
        </Link>
      ))}
    </div>
  );
};

export default RelatedSuggestions;
