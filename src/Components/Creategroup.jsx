import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";

const CreateGroup = ({ setModal }) => {
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  // State for group name and selected color
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Default to the first color

  const dispatch = useDispatch();

  // Handle creating a new user/group
  const handleCreate = () => {
    if (groupName.trim() === "") {
      alert("Group name is required");
      return;
    }

    dispatch(
      addUser({
        name: groupName,
        color: selectedColor,
      })
    );

    // Reset form or close modal after creation (if applicable)
    setGroupName("");
    setSelectedColor(colors[0]); // Reset to default color
    setModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-5 custom-backdrop z-40" />

      <div className="m-auto w-[44%] h-[42%] bg-white font-semibold fixed inset-0 font-roboto tracking-wider p-5 px-7 flex flex-col rounded-lg gap-6 z-50">
        <h2 className="text-2xl">Create New Group</h2>
        <div className="flex gap-5">
          <p className="text-xl self-center">Group Name</p>
          <input
            className="rounded-3xl outline-none border font-normal p-[6px] px-5 text-base w-72"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="flex gap-4 text-lg">
          <p className="self-center">Choose Colour</p>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`h-8 w-8 rounded-full cursor-pointer ${
                  color === selectedColor ? "border-blue-600 border-2" : ""
                }`}
                style={{ backgroundColor: color }} // Apply background color using inline style
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <button
          className="px-8 rounded-xl self-end py-1 text-white bg-[#001F8B]"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreateGroup;
