import React from "react";
import "./Message.css";
import ReactEmoji from "react-emoji";

const Messages = ({ message: { user, text }, name }) => {
  let isSendByUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSendByUser = true;
  }

  return (
    <>
      {isSendByUser ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      ) : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )}
    </>
  );
};

export default Messages;
