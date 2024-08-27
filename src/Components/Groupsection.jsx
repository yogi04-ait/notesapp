import React from "react";
import Groups from "./Groups";

const Groupsection = ({ setModal }) => {
  const names = [
    "Yogesh Aithani",
    "Honey Singh",
    "Sumit Sundriyal",
    "Sanjay goswami",
    "divya adhikari",
    "honey singh",
    "javascript group coding",
    "hello Js",
    "Namaste React",
  ];
  return (
    <div className="flex flex-col max-h-full w-full ">
      <h1 className="mx-auto my-12 text-3xl font-medium tracking-wide font-roboto">
        Pocket Notes
      </h1>
      <div className="flex flex-col overflow-y-scroll max-h-full custom-scrollbar ">
        <div className="flex flex-col gap-4 px-7  ">
          {names.map((name) => (
            <Groups name={name} />
          ))}
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-[#16008B] cursor-pointer w-14 h-14 text-5xl sticky bottom-6 self-end mr-5  text-white pb-3 font-bold flex items-center justify-center rounded-full "
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Groupsection;
