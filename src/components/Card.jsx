import { useState } from "react"
import { Row } from "../components"


export const Card = ({ numberOfPlayers = 6 }) => {

  const [names, setNames] = useState([])

  return (
    <div className="CARD max-w-[400px] w-full sm:w-full h-auto sm:rounded bg-white dark:bg-black/60 dark:border-0 text-black dark:text-white sm:border-2 border-black/60 dark:border-transparent flex flex-col overflow-hidden">
      
      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Sospechosos
        </h2>

        <Row label="Verduzco" labelColor="bg-green-500" numberOfOptions={numberOfPlayers} />
        <Row label="Mostaza" labelColor="bg-yellow-500" numberOfOptions={numberOfPlayers} />
        <Row label="Marlene" labelColor="bg-blue-500" numberOfOptions={numberOfPlayers} />
        <Row label="Moradillo" labelColor="bg-purple-500" numberOfOptions={numberOfPlayers} />
        <Row label="Escarlata" labelColor="bg-red-500" numberOfOptions={numberOfPlayers} />
        <Row label="Blanca" labelColor="bg-white text-black" numberOfOptions={numberOfPlayers} />
      </section>

      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Armas
        </h2>

        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Candelabro" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Daga" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Tubo de plomo" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Revólver" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Soga" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Llave inglesa" numberOfOptions={numberOfPlayers} />
      </section>

      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Lugares
        </h2>

        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Salón de baile" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Sala de billar" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Terraza" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Comedor" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Pasillo" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Cocina" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Biblioteca" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Sala" numberOfOptions={numberOfPlayers} />
        <Row labelColor="border-x-2 border-b-2 border-gray-700 text-white" label="Estudio" numberOfOptions={numberOfPlayers} />
      </section>
    </div>
  )
}

export default Card
