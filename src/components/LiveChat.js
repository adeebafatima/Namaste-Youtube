import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    //Long Polling/API Polling
    const i = setInterval(() => {
      //Data Storage in Redux Store
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  });
  return (
    <>
      <div className="flex flex-col-reverse h-[700px] p-2 border border-black bg-slate-100 rounded-lg w-full overflow-y-scroll">
        {chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <form
        className="w-full p-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Adeeba",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="border border-gray-400 w-9/12"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-gray-200 rounded-lg ml-2 px-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
