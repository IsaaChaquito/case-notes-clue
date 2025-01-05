
import { useEffect, useState } from "react"
import { Avatares, Rows } from "."
import { LockScreenIcon } from "../assets/icons";
import { suspects, weapons, places } from "../helpers/constants";

export const tableObject = (cols) => ({
  cols: Array.from({ length: cols }, () => ({
    rows: Array(21).fill({ iconTypeIndex: 0 }),
  })),
});


export const Table = ({ numberOfPlayers = 6, cluesPerPlayer = 3 }) => {

  const [cardState, setCardState] = useState()

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
    document.body.style.touchAction = !isScrollLocked ? "none" : "";
  };


  useEffect(() => {

    const storedCardState = localStorage.getItem('cardState');
    if (storedCardState) {
      // Si hay un estado guardado, lo usamos.
      setCardState(JSON.parse(storedCardState));
    } else {
      // Si no hay estado guardado, inicializamos con un valor por defecto.
      const initialCardState = tableObject(numberOfPlayers);
      setCardState(initialCardState);
      // No escribimos en localStorage aquí, dejamos que el segundo useEffect lo maneje.
    }
  }, [numberOfPlayers]);
  
  useEffect(() => {
    if (!cardState) return
      localStorage.setItem('cardState', JSON.stringify(cardState));
  }, [cardState]);
  
  


  return (
    <>
    {
      // blur-2xl pointer-events-none
      cardState && (
        <div className={`CARD max-w-[400px] w-full  mt-10 z-50 sm:w-full h-auto sm:rounded bg-white dark:bg-black dark:border-0 text-black dark:text-white sm:border-2 border-black/60 dark:border-transparent flex flex-col `}>
      
        <section className="SUSPECTS w-full h-auto">
          <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-0.5">
            Sospechosos y jugadores
          </h2>
          <section className="AVATARES relative w-full  pl-[108px] border-l-2 border-gray-700">
            
            <button onClick={toggleScrollLock} className={`absolute flex justify-center items-center left-9 top-1 bg-black w-9 h-9 rounded-full border-2 border-gray-700 ring-2 ${isScrollLocked ? 'ring-inset' : ''} ring-gray-600 shadow-white/50 shadow active:shadow-none active:scale-95 duration-300`}>
              <LockScreenIcon className={`w-5 h-5 duration-150 ${isScrollLocked ? 'text-gray-100' : 'text-gray-600'}`} />
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
          <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-0.5">
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
          <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-0.5">
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

  </>
    
  )
}

export default Table