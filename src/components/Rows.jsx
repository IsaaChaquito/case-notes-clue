import { Row } from "../components"

const stylesFor = {
  suspects: [
    "border-x-2 border-b-2 border-gray-700 text-green-500",
    "border-x-2 border-b-2 border-gray-700 text-yellow-500",
    "border-x-2 border-b-2 border-gray-700 text-blue-500",
    "border-x-2 border-b-2 border-gray-700 text-purple-500",
    "border-x-2 border-b-2 border-gray-700 text-red-500",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white"
  ],

  weapons: [
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white"
  ],

  places: [
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
    "border-x-2 border-b-2 border-gray-700 text-black dark:text-white",
  ],
}

export const Rows = ({cardState, handleCheckOptionState, labels, numberOfPlayers, section}) => {


  return (
    Array.from({ length: labels.length }).map((_, index) => (
      <Row 
        key={index} 
        rowIndex={index}
        cardState={cardState} 
        handleCheckOptionState={handleCheckOptionState} 
        label={labels[index]} 
        labelColor={stylesFor[section][index]} 
        numberOfOptions={numberOfPlayers} 
      />
    ))
  )
}

export default Rows