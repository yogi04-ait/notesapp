import React from "react";

const Groups = ({ name }) => {
  // Split the name by spaces
  const nameParts = name.split(" ");

  // Extract the first letter of each part and convert to uppercase
  const initials = nameParts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="flex items-center gap-6 ">
      <div className="flex justify-center self-center items-center h-16 w-16 max-h-16 font-normal font-roboto text-lg bg-orange-500 rounded-full text-white tracking-wider ">
        {initials}
      </div>
      <div className="font-normal font-roboto tracking-wide text-lg">
        {name}
      </div>
    </div>
  );
};

export default Groups;
