import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router";
import InfoBar from "./InfoBar";
import Message from "./Message";
import io from "socket.io-client";
import Input from "./Input";
import TextContainer from "./TextContainer";

let socket;

const Chat = () => {
  const [users, setUsers] = useState("");
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ENDPOINT = "https://chat-applikasi.herokuapp.com/";
  const location = useLocation();

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);
    // New user joins room
    socket.emit("join", { name, room }, () => {});

    return () => {
      // user leave room
      socket.disconnect();

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <div className="flex lg:flex-row justify-center items-center h-screen bg-[#87b4e0] ">
      <h1 className="md:hidden">Good Luck Have Fun !</h1>
      <div className=" flex shadow-sm shadow-black flex-col justify-between bg-[#fff] rounded-md w-[90%] h-[80%] md:h-[60%] md:w-[40%]">
        <InfoBar room={room} />
        <Message messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
