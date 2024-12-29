import React, { useEffect } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    console.log('YOUTUBE_POPULAR_VIDEOS_API',YOUTUBE_POPULAR_VIDEOS_API)
    console.log(json);
  };
  return <div>VideoContainer</div>;
};

export default VideoContainer;
