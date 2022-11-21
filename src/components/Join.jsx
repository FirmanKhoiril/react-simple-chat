import React, { useState } from "react";
import { Link } from "react-router-dom";

import { RiChatSmile3Fill, RiChatSmile2Fill } from "react-icons/ri";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="bg-[#1f0c5e] h-[800px] flex justify-center items-center md:h-screen">
      <div className="flex justify-center flex-col items-center">
        <h1 className=" px-20 mt-20 text-3xl flex flex-row text-white  border-b-2 pb-4 tracking-wider">
          Join
          <RiChatSmile2Fill className="mt-[6px] mx-[5px]" />
        </h1>
        <p className="mt-4 text-blue-500/60">This is Free Room Chat </p>
        <div className="mt-[72px]">
          <input
            className="flex-1 rounded-lg focus:border-2 border-gray-400 inline-block bg-transparent outline-none placeholder-gray-500 text-base before:hover:place-content-start text-white p-4"
            type="text"
            placeholder="Your Name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mt-8">
          <input
            type="text"
            className="block w-full focus:border-2 border-gray-400 flex-1 bg-transparent rounded-lg outline-none placeholder-gray-500 text-base text-white p-4"
            placeholder="Name Room..."
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link onClick={(e) => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
          <button className="rounded button mt-10 block font-semibold tracking-wider shadow-md hover:from-green-500 hover:to-lime-300 shadow-black hover:text-white py-3 bg-gradient-to-r from-sky-500 to-blue-500 px-9" type="submit">
            Join Room
          </button>
        </Link>
        <div className="mt-4">
          <h3 className="flex flex-row p-4 text-gray-400">
            Make Sure To join The same Room With Your Friends <RiChatSmile3Fill className="mt-1 mx-1 text-white" />
          </h3>
          <div className="mt-40 h-16 animate-bounce  hover:animate-none flex items-center text-gray-400 justify-center w-full bg-white/5">
            @Copyright By <span className="ml-[4px] text-gray-200"> Firman.Khoiril.R</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
