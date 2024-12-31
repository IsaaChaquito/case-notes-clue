import { useState } from "react"
import {CheckOption} from "../components"

const options = ["check", "close", "question", "exclamation", "check-box"]

export const Card = ({ numberOfPlayers }) => {

  const [names, setNames] = useState([])

  return (
    <div className="CARD max-w-[400px] w-full sm:w-full h-screen sm:rounded bg-white dark:bg-black/60 dark:border-0 text-black dark:text-white sm:border-2 border-black/60 dark:border-transparent flex flex-col overflow-hidden">
      
      <section className="SUSPECTS w-full h-full">
        <h2 className="w-full text-center font-semibold bg-black/60 dark:bg-gray-700 p-1">Suspects</h2>

        <div className="CLUE-SUSPECTS h-7 flex items-center">
          <h1 className="w-[30%] h-full bg-yellow-500 p-1 ">Mostaza</h1>
          {
            Array.from({  length: numberOfPlayers }).map((_, index) => (
              <CheckOption key={index} />
            ))
          }
        </div>
      </section>

      <section className="WEAPONS bg-blue-400 w-full h-full">
      <h2 className="w-full text-center font-bold">Weapons</h2>
        <div className="CLUE-WEAPON min-h-full">Weapon</div>
      </section>

      <section className="ROOMS bg-blue-500 w-full h-full">
      <h2 className="w-full text-center font-bold">Rooms</h2>
        <div className="CLUE-ROOM min-h-full">Room</div>
      </section>
    </div>
  )
}

export default Card
