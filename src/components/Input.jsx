import React from "react";

const Input = ({ message, sendMessage, setMessage }) => {
  return (
    <form className="flex border-t-[2px_#d3d3d3_solid]">
      <input
        className="w-[80%] bg-sky-300 placeholder:text-black font-semibold focus:outline-none border-none p-[5px] text-lg"
        type="text"
        placeholder="Message ..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) => (event.key === "Enter" ? sendMessage(event) : null)}
      />
      <button onClick={(e) => sendMessage(e)} className="text-black font-bold bg-sky-300 w-[20%] p-4 border-l-[1px] uppercase inline-block">
        Kirim...
      </button>
    </form>
  );
};

export default Input;
