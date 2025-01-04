
import { useState } from "react"
import { Avatares, Rows } from "../components"
import { LockScreenIcon } from "../assets/icons";

export const cardObject = (cols) => ({
  cols: Array.from({ length: cols }, () => ({
    rows: Array(21).fill({ iconTypeIndex: 0 }),
  })),
});

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

  const handleCheckOptionState = (rowIndex, colIndex, iconTypeIndex) => {

    setCardState((prevState) => {
      // Copiamos el estado anterior
      const newCols = [...prevState.cols]
  
      // Actualizamos solo la columna especificada
      const columnToUpdate = newCols[colIndex]
  
      // Actualizamos solo la fila especificada
      const updatedRows = [...columnToUpdate.rows]
      updatedRows[rowIndex] = {
        ...updatedRows[rowIndex],
        iconTypeIndex, // Actualizamos el iconTypeIndex
      }
  
      // Actualizamos las filas de la columna
      newCols[colIndex] = {
        ...columnToUpdate,
        rows: updatedRows,
      }
  
      return {
        ...prevState,
        cols: newCols, // Retornamos las columnas actualizadas
      }
    })

  };

  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const toggleScrollLock = () => {
    setIsScrollLocked((prev) => !prev)
    document.body.style.overflow = !isScrollLocked ? "hidden" : "";
  };



  return (
    <div className="CARD max-w-[400px] w-full mb-20 sm:w-full h-auto sm:rounded bg-white dark:bg-black/60 dark:border-0 text-black dark:text-white sm:border-2 border-black/60 dark:border-transparent flex flex-col ">
      
      <section className="SUSPECTS w-full h-auto">
        <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-1">
          Sospechosos y jugadores
        </h2>
        <section className="AVATARES w-full  pl-[108px] border-l-2 border-gray-700">
          
          <button onClick={toggleScrollLock} className='absolute flex justify-center items-center left-11 top-[100px] bg-black w-9 h-9 rounded-full border-2 border-gray-700 ring-2 ring-insett ring-gray-600 shadow-white/50 shadow active:shadow-none active:scale-95 duration-75'>
            <LockScreenIcon className="w-5 h-5 text-gray-500" />
          </button>

          <Avatares 
            numberOfPlayers={numberOfPlayers} 
            cluesPerPlayer={cluesPerPlayer}  
            cardState={cardState}
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
