import React from "react";
import Groups from "./Groups";
import { useSelector } from "react-redux";

const Groupsection = ({ setModal }) => {
  const users = useSelector((state) => state.userData.users);

  return (
    <div className="flex flex-col h-screen w-full relative">
      <h1 className="mx-auto my-10 text-3xl font-medium tracking-wide font-roboto">
        Pocket Notes
      </h1>
      <div className="flex flex-col overflow-y-scroll h-full custom-scrollbar ">
        <div className="flex flex-col  gap-4 px-7  ">
          {users.map((user) => (
            <Groups user={user} />
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
