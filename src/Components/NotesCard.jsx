import React, { useState, useEffect } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch } from "react-redux";
import Card from "./Card";
import { addNote } from "../features/userSlice"; // Renamed import to avoid conflict

const NotesCard = ({ user }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { name, color, notes, id } = user;

  const handleAddNote = () => {
    if (text.trim()) {
      dispatch(addNote({ id, text }));
      setText("");
    }
  };

  useEffect(() => {
    // Optionally, handle side effects or logging here
  }, [user]);

  const nameParts = name.split(" ");
  const initials = nameParts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="flex flex-col h-screen bg-[#DAE5F5]">
      <div className="flex gap-5 h-16 p-3 bg-[#001F8B]">
        <div
          className="flex justify-center items-center h-12 w-12 font-normal text-lg rounded-full text-white tracking-wider"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div className="text-xl font-medium text-white">{name}</div>
      </div>

      <div className="flex flex-col flex-1 p-5 custom-scrollbar overflow-y-auto gap-4">
        {notes.map((note) => (
          <Card note={note} />
        ))}
      </div>

      <div className="p-3 bg-[#001F8B] rounded-bl-md relative flex items-center h-44">
        <textarea
          className="flex-1 text-[#9A9A9A] h-full outline-none rounded-lg p-3 resize-none text-xl font-normal"
          placeholder="Enter your text here.........."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <IoMdSend
          className="text-[#ABABAB] cursor-pointer absolute right-7 bottom-7 text-3xl"
          onClick={handleAddNote} // Changed to handleAddNote
        />
      </div>
    </div>
  );
};

export default NotesCard;
