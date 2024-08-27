import React from "react";

const Creategroup = () => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-5 custom-backdrop z-40" />

      <div className="m-auto w-[44%] h-[42%] bg-white font-semibold  fixed inset-0 font-roboto tracking-wider p-5 px-7 flex flex-col rounded-lg gap-6 z-50">
        <h2 className="text-2xl">Create New Group</h2>
        <div className="flex gap-5">
          <p className="text-xl self-center">Group Name</p>
          <input
            className="rounded-3xl outline-none border font-normal p-[6px] px-5 text-base w-72"
            placeholder="Enter group name"
          />
        </div>
        <div className="flex gap-4 text-lg">
          <p className="self-center">Choose Colour</p>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="h-8 w-8 rounded-full hover:border-blue-600 hover:border-2 cursor-pointer"
                style={{ backgroundColor: color }} // Apply background color using inline style
              ></div>
            ))}
          </div>
        </div>
        <button className="px-8 rounded-xl self-end py-1 text-white bg-[#001F8B]">
          Create
        </button>
      </div>
    </>
  );
};

export default Creategroup;
