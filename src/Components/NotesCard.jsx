import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { addNote, selectUserById } from "../features/userSlice";
import { FaArrowLeft } from "react-icons/fa";

const NotesCard = ({ userId, setUserId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  // Retrieve user data from Redux store
  const user = useSelector((state) => selectUserById(state, userId));

  const handleAddNote = () => {
    if (text.trim()) {
      dispatch(addNote({ id: user.id, text }));
      setText("");
    }
  };

  if (!user) {
    return <div>No user data available.</div>;
  }

  const { name = "", color = "#FFFFFF", notes = [] } = user;

  const nameParts = name.split(" ");
  const initials = nameParts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  const isDisabled = text.trim().length === 0;

  return (
    <div className="flex flex-col h-screen bg-[#DAE5F5]">
      <div className="flex gap-3 sm:gap-5  p-3 bg-[#001F8B]">
        <FaArrowLeft
          className="self-center text-white sm:hidden"
          onClick={() => setUserId(null)}
        />
        <div
          className="flex justify-center items-center  h-12 w-12 font-normal text-lg rounded-full text-white tracking-wider"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div className="text-xl font-medium self-center text-white">{name}</div>
      </div>

      <div className="flex flex-col flex-1 p-5 scrollable-container overflow-y-auto gap-4">
        {notes.length ? (
          notes.map((note) => (
            <Card key={note.timestamp} note={note} /> // Ensure unique key
          ))
        ) : (
          <p className="text-center text-gray-500">No notes available.</p>
        )}
      </div>

      <div className="p-3 bg-[#001F8B] rounded-bl-md relative flex items-center h-44">
        <textarea
          className="flex-1 text-[#9A9A9A] h-full outline-none rounded-lg p-3 resize-none text-xl font-normal"
          placeholder="Enter your text here.........."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <IoMdSend
          className={`absolute right-7 bottom-7 text-3xl ${
            isDisabled
              ? "text-[#ABABAB] cursor-not-allowed"
              : "text-[#001F8B] cursor-pointer"
          }`}
          onClick={!isDisabled ? handleAddNote : undefined}
          // Apply 'disabled' styling conditionally
        />
      </div>
    </div>
  );
};

export default NotesCard;
