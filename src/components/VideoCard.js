import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 p-2 w-72 shadow-md">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails.medium.url}
      ></img>
      <ul>
        <li className="font-bold pb-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
