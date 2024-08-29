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

  // Handle key down events
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCreate();
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-5 custom-backdrop z-40" />

      <div className="m-auto min-w-96 h-[250px] w-[70%] max-w-[560px] bg-white font-semibold fixed inset-0 font-roboto tracking-wider p-5 px-7 flex flex-col rounded-lg gap-6 z-50">
        <h2 className="text-base md:text-2xl">Create New Group</h2>
        <div className="flex gap-5">
          <p className="text-base sm:text-lg self-center whitespace-nowrap">
            Group Name
          </p>
          <input
            className="rounded-2xl outline-none border font-normal px-4 py-2 text-sm sm:text-base w-72"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyDown={handleKeyDown} // Attach key down handler
          />
        </div>
        <div className="flex gap-4 text-base sm:text-lg">
          <p className="self-center whitespace-nowrap">Choose Colour</p>
          <div className="flex gap-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`h-4 w-4 self-center sm:h-8 sm:w-8 rounded-full cursor-pointer ${
                  color === selectedColor ? "border-blue-600 border-2" : ""
                }`}
                style={{ backgroundColor: color }} // Apply background color using inline style
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <button
          className="mx-12 sm:mx-0 px-8 sm:px-10 font-normal rounded-xl sm:self-end py-1 text-white bg-[#001F8B]"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </>
  );
};

export default CreateGroup;
