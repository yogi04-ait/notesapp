import React from "react";

const Card = () => {
  return (
    <div className=" bg-white p-3 w-full flex flex-col font-roboto font-normal text-lg gap-5 rounded-md">
      <p className="text-[#000000]">
        Hello how are you dear, I am yogesh aithani a frontend developer witha
        professional experience of 1.5 years , my tech stacks are html , css ,
        js react , tailwind and aws
      </p>
      <div className="self-end text-sm text-[#353535] font-medium flex gap-4 ">
        <p>9 Mar 2023</p>
        <p>10:10 AM</p>
      </div>
    </div>
  );
};

export default Card;
