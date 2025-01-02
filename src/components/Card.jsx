
import { useEffect, useState } from "react"
import { Row , Avatares, Rows } from "../components"

export const cardObject = ( cols ) => {
  return {
    cols: Array.from({ length: cols }).map((_) => {
      return {
        rows: Array.from({ length: 21 }).map((_) => {
          return {
            iconTypeIndex: 0,
          }
        }),
      }
    })
  }
}

export const suspects = [
  "Verduzco",
  "Mostaza",
  "Marlene",
  "Moradillo",
  "Escarlata",
  "Blanca",
]

export const weapons = [
  "Candelabro",
  "Daga",
  "Tubo de plomo",
  "Revólver",
  "Soga",
  "Llave inglesa",
]

export const places = [
  "Salón de baile",
  "Sala de billar",
  "Terraza",
  "Comedor",
  "Pasillo",
  "Cocina",
  "Biblioteca",
  "Sala",
  "Estudio",
]

export const Card = ({ numberOfPlayers = 6, cluesPerPlayer = 3 }) => {

  const [cardState, setCardState] = useState( cardObject(numberOfPlayers) )

  const handleCheckOptionState = (row, col, iconTypeIndex) => {
    console.log('row', row, 'col', col, 'iconTypeIndex', iconTypeIndex);
  }

  useEffect(() => {
    console.log('cardState', cardState);
  }, [])

  return (
    <div className="CARD max-w-[400px] w-full mb-20 sm:w-full h-auto sm:rounded bg-white dark:bg-black/60 dark:border-0 text-black dark:text-white sm:border-2 border-black/60 dark:border-transparent flex flex-col ">
      
      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Sospechosos y jugadores
        </h2>
        <section className="AVATARES w-full  pl-[108px] border-l-2 border-gray-700">
          <Avatares 
            numberOfPlayers={numberOfPlayers} 
            cluesPerPlayer={cluesPerPlayer}  
          />
        </section>
        {/* Nombre de personajes */}
        <Rows 
          cardState={cardState} 
          handleCheckOptionState={handleCheckOptionState} 
          labels={suspects} 
          numberOfPlayers={numberOfPlayers}
          section="suspects"
        />
      </section>

      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Armas
        </h2>

        <Rows 
          cardState={cardState} 
          handleCheckOptionState={handleCheckOptionState} 
          labels={weapons} 
          numberOfPlayers={numberOfPlayers}
          section="weapons"
        />
      </section>

      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Lugares
        </h2>

        <Rows 
          cardState={cardState} 
          handleCheckOptionState={handleCheckOptionState} 
          labels={places} 
          numberOfPlayers={numberOfPlayers}
          section="places"
        />
      </section>
    </div>
  )
}

export default Card
