import React from "react";

// Function to format the ISO timestamp to separate date and time strings
const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Helper function to pad numbers with leading zero if necessary
  const pad = (number) => (number < 10 ? "0" + number : number);

  // Get components of the date
  const day = date.getDate(); // Day of the month
  const month = date.toLocaleString("en-GB", { month: "short" }); // Short month name (e.g., Aug)
  const year = date.getFullYear(); // Year

  // Get components of the time
  const hours = date.getHours(); // Hours
  const minutes = pad(date.getMinutes()); // Minutes with leading zero if needed

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  const hour12 = hours % 12;
  const displayHour = hour12 === 0 ? 12 : hour12; // Display 12 instead of 0 for 12 PM

  // Format and return the date and time strings separately
  const formattedDate = `${day} ${month} ${year}`;
  const formattedTime = `${displayHour}:${minutes} ${ampm}`;

  return { formattedDate, formattedTime };
};

const Card = ({ note }) => {
  const { text, timestamp } = note;
  const { formattedDate, formattedTime } = formatDate(timestamp);

  return (
    <div className="bg-white p-3 w-full flex flex-col font-roboto font-normal text-base gap-5 rounded-md">
      <p className="text-[#000000]">{text}</p>
      <div className="self-end text-sm text-[#353535] font-medium flex items-center">
        <p className="mr-2">{formattedDate}</p>
        <span className="dot mx-1"></span> {/* Dot separator */}
        <p className="ml-2">{formattedTime}</p>
      </div>
    </div>
  );
};

export default Card;
