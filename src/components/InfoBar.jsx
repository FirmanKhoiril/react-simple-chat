import React from "react";
import { HiStatusOnline } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const InfoBar = ({ room }) => {
  return (
    <div className="flex items-center justify-between bg-sky-300 rounded-[4px_4px_0_0] w-full h-[60px]">
      <div className="flex-[0.5] flex items-center ml-[5%] text-white">
        <HiStatusOnline className=" text-xl text-black mr-[5%]" />
        <h3 className="font-semibold text-slate-800">{room}</h3>
      </div>
      <div className="flex-[0.5] flex justify-end mr-[5%] text-white">
        <Link to="/">
          <MdClose />
        </Link>
      </div>
    </div>
  );
};

export default InfoBar;
