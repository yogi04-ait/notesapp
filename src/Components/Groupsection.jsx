import React from "react";
import Groups from "./Groups";
import { useSelector } from "react-redux";

const Groupsection = ({ setModal, setUserId }) => {
  const users = useSelector((state) => state.userData.users);

  return (
    <div className="flex flex-col h-screen w-full  justify-center">
      <h1 className="mx-auto my-7 text-3xl font-semibold tracking-wide font-roboto">
        Pocket Notes
      </h1>
      <div className="flex flex-col overflow-y-scroll pb-4 h-full scrollable-container ">
        <div className="flex flex-col  gap-4 px-7  ">
          {users.map((user) => (
            <Groups user={user} setUserId={setUserId} />
          ))}
        </div>
        <div
          onClick={() => setModal(true)}
          className="bg-[#16008B] cursor-pointer w-14 h-14 text-5xl fixed bottom-4 self-end mr-5  text-white pb-3 font-bold flex items-center justify-center rounded-full "
        >
          +
        </div>
      </div>
    </div>
  );
};

export default Groupsection;
