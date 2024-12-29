import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video, key) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
