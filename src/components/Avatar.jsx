import { useState } from "react";

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

export const Avatar = ({ index }) => {
  const [avatarColorIndex, setAvatarColorIndex] = useState(index);

  const handleColor = (e) => {
    const newIndex = parseInt(e.target.value, 10); // Convertir a número
    setAvatarColorIndex(newIndex);
  };

  return (
    <div className="relative w-full flex items-center justify-center">
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

      <select
        className="absolute top-0 left-0 w-full h-full opacity-0 dark:bg-black "
        value={avatarColorIndex} // Usar índice aquí
        onChange={handleColor}
      >
        {color.map((_, idx) => (
          <option className="z-50" key={idx} value={idx}>
            {colorNames[idx]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Avatar;
