import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName,generateRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    //Long Polling/API Polling
    const i = setInterval(() => {
      //Data Storage in Redux Store
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(30)
        })
      );
    }, 1000);
    return () => clearInterval(i);
  });
  return (
    <div className="flex flex-col-reverse h-[700px] p-2 border border-black bg-slate-100 rounded-lg w-full overflow-y-scroll">
      {chatMessages.map((message, index) => (
        <ChatMessage
          key={index}
          name={message.name}
          message={message.message}
        />
      ))}
    </div>
  );
};

export default LiveChat;
