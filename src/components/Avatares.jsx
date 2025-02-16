import { Avatar } from "../components"


export const Avatares = ({ numberOfPlayers = 6, cluesPerPlayer = 3, cardState, onAvatarColorChange }) => {
  return (
    <div className="flex justify-center items-center  border-r-2 border-gray-700">
      {
        Array.from({ length: numberOfPlayers }).map((_, index) => (
          <Avatar key={index} index={index} cluesPerPlayer={cluesPerPlayer} cardState={cardState} onAvatarColorChange={onAvatarColorChange} />
        ))
      }
    </div>
  )
}
