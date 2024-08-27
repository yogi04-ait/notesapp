import React from "react";
import { IoMdSend } from "react-icons/io";
import Card from "./Card";

const NotesCard = () => {
  return (
    <div className=" w-full h-full   bg-[#DAE5F5]">
      <div className="flex gap-5  h-[10%] p-3 pt-4  top-0 bg-slate-600">
        <div className="flex justify-center self-center items-center h-12 w-12  font-normal font-roboto text-lg bg-orange-500 rounded-full text-white tracking-wider ">
          YA
        </div>
        <div className="text-xl self-center   font-roboto font-medium text-white">
          Yogesh Aithani
        </div>
      </div>

      <div className=" flex flex-col h-[62%] p-5 custom-scrollbar overflow-y-scroll gap-4 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="p-3 h-[28%] w-[100%] bg-slate-500 ">
        <textarea
          className=" h-full w-full text-[#9A9A9A] outline-none rounded-lg p-3 resize-none text-xl font-normal font-roboto"
          placeholder="Enter your text here.........."
        />
        <IoMdSend className="text-[#ABABAB] right-4 cursor-pointer absolute bottom-6 text-3xl" />
      </div>
    </div>
  );
};

export default NotesCard;
