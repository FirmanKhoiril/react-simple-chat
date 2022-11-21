import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Messages from "./Messages";

const Message = ({ messages, name }) => {
  return (
    <ScrollToBottom className="overflow-auto flex-auto p-[5%_0]">
      {messages.map((message, i) => (
        <div key={i}>
          <Messages message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Message;
