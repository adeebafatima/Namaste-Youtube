import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col">
        <div className="px-1 flex">
          <iframe
            width="1200"
            height="700"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer />
      </div>
      <div className="w-full mr-1">
        <LiveChat />
      </div>
    </>
  );
};

export default WatchPage;

// Challenges of Live Chat
// - Get data Live
// - Update the UI (Pushing the div(Comment)) - If we keep on pushing Page will freeze + UX should be good

// Handling Live Data
//1.Web Sockets - 2 way connection between UI and Server
// UI <->(HANDSHAKE) Server [Bidirectional]
// As soon as you open application web socket connection is established and 2 way data can be send
// No regular interval
// Example - Zerodah,Whatsapp

//2.Long Polling/API Polling
// Data flows from Server to UI (UI<-Server) [Unidirectional]
// You poll data at regular Interval
// Example - Gmail,Cricbuzz,Youtube-LiveChat[illusion that chat are coming in order, Youtube is not showing timestamp - trick,Order strictly doesnt matter here]
