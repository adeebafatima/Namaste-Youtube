import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

  //Early return
  if(!isMenuOpen) return null;

  return (
    <div className="p-5 w-48 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch later</li>
        <li>Liked videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Huda TV</li>
        <li>Akshay Saini</li>
        <li>Chirag Goel</li>
        <li>One Message Foundation</li>
        <li>Stories of the Prophets</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Podcasts</li>
        <li>Fashion & Beauty</li>
      </ul>

      <h1 className="font-bold pt-5">More from Youtube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>

      <ul className="pt-5">
        <li>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
