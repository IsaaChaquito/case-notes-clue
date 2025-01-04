import { useState } from "react";
import { CheckIcon } from "../assets/icons";

export const color = [
  "bg-green-500",
  "bg-yellow-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-red-500",
  "bg-white",
];

export const colorNames = [
  "Verduzco",
  "Mostaza",
  "Marlene",
  "Moradillo",
  "Escarlata",
  "Blanca",
];

export const Avatar = ({ index, cluesPerPlayer = 3, cardState }) => {

  const [avatarColorIndex, setAvatarColorIndex] = useState(index);

  // Count all rows in col[index] when iconTypeIndex === 2
  const totalClues = cardState.cols[index].rows.reduce((acc, row) => {
    if (row.iconTypeIndex === 2) {
      acc += 1;
    }
    return acc;
  }, 0);


  const alternateColor = () => {
    setAvatarColorIndex((prevIndex) => 
      prevIndex + 1 > color.length-1 ? 0 : prevIndex + 1
    );
  };

  return (
    <button 
      onClick={alternateColor}
      className="relative w-full flex flex-col items-center justify-center border-l-2 border-b-2 border-gray-700">
      <div className="relative w-8 h-8 overflow-hidden shadow-sm shadow-black rounded-full dark:bg-black">
        <svg
          fill="#374151" // Color blanco para el avatar123"
          className={`absolute w-10 h-10 ${color[avatarColorIndex]} -left-1`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      <section className="NUMBER-OF-CLUES flex items-center justify-center">
        {Array.from({length: cluesPerPlayer}).map((_, index) => (
          <CheckIcon 
            key={index}
            className={`w-full h-full bg-white dark:bg-black rounded-full ${totalClues > index ? 'text-green-500' : 'text-gray-500'}`} 
          />
        ))}
      </section>

    </button>
  );
};

export default Avatar;
