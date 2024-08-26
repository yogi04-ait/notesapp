import React from "react";

const NotesCard = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-5 sticky  p-2 pt-3 w-full bg-slate-600">
        <div className="flex justify-center self-center items-center h-12 w-12  font-normal font-roboto text-lg bg-orange-500 rounded-full text-white tracking-wider ">
          SB
        </div>
        <div className="text-xl self-center font-roboto font-medium text-white">
          Sheetal Bani
        </div>
      </div>
      <div>ljadffffssssssssssssss</div>
      <div className="w-full p-5 h-40 bg-slate-500 sticky bottom-0">
        <input
          type="text"
          className="w-full rounded-lg outline-none"
          placeholder="Enter your text here"
        />
      </div>
    </div>
  );
};

export default NotesCard;
