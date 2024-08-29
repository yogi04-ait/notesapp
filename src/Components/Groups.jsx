import React from "react";

const Groups = ({ user, setUserId }) => {
  // Split the name by spaces
  const name = user?.name;
  const color = user?.color;
  const nameParts = name.split(" ");
  console.log(user.id);

  // Extract the first letter of each part and convert to uppercase
  const initials = nameParts
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div
      className="flex items-center gap-5 cursor-pointer min-w-fit"
      onClick={() => setUserId(user.id)}
    >
      <div
        className="flex justify-center self-center items-center min-w-14  min-h-14 max-h-16 font-normal font-roboto  rounded-full text-white tracking-wider"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div className="font-normal font-roboto tracking-wide whitespace-nowrap text-lg">
        {name}
      </div>
    </div>
  );
};

export default Groups;
