import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    // Make an API call after every key press but if difference between 2 API calls is < 200ms decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    //on re-render clear previous timer
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // key - i
  //   -render the component
  //   -useEffect()
  //   -start timer - make API call after 200ms

  // key - ip
  //   -destroy the component(useEffect return method) old timer destroyed
  //   -re-render the component
  //   -useEffect()
  //   -start new timer - make API call after 200ms

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=450&name=What%20is%20a%20Hamburger%20Button.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="   Search"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>

          <div className="fixed bg-white w-[635.82px] p-2 shadow-lg rounded-lg border-gray-100">
            <ul>
              {showSuggestions &&
                suggestions.map((suggestion) => (
                  <li key={suggestion} className="py-2 hover:bg-gray-100">
                    🔍 {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="youtube-logo"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
