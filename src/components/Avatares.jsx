import { Avatar } from "../components"


export const Avatares = ({ numberOfPlayers = 6 }) => {
  return (
    <div className="flex justify-center items-center ">
      {
        Array.from({ length: numberOfPlayers }).map((_, index) => (
          <Avatar key={index} index={index} />
        ))
      }
    </div>
  )
}
