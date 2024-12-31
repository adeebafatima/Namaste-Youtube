import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="h-[700px] p-2 border border-black bg-slate-100 rounded-lg w-full">
      <ChatMessage name="Adeeba" message="God is one" />
      <ChatMessage name="Adeeba" message="God is one" />
      <ChatMessage name="Adeeba" message="God is one" />
      <ChatMessage name="Adeeba" message="God is one" />
    </div>
  );
};

export default LiveChat;
