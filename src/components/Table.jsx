
import { useEffect, useState } from "react"
import { Avatares, Rows } from "."
import { suspects, weapons, places } from "../helpers/constants";

export const tableObject = (numberOfPlayers, cluesPerPlayer) => (
  {
    avatarsColorOrder: Array.from({ length: numberOfPlayers }, (_, i) => i),
    cols: Array.from({ length: 6 }, () => ({
      rows: Array(21).fill({ iconTypeIndex: 0 }),
    })),
    labelsChecked: Array(21).fill(false),
    numberOfPlayers: Number(numberOfPlayers),
    cluesPerPlayer,
  }
);




export const Table = ({ numberOfPlayers, cluesPerPlayer }) => {

  const [tableState, setTableState] = useState()

  const handleCheckOptionState = (rowIndex, colIndex, iconTypeIndex) => {

    setTableState((prevState) => {
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

  }


  const onAvatarColorChange = ( avatarIndex, indexColor ) => {
    setTableState ((prevState) => ({
      ...prevState,
      avatarsColorOrder: {
        ...prevState.avatarsColorOrder,
        [avatarIndex]: indexColor
      }
    }))
  }

  const onLabelChecked = (index) => {
    setTableState((prevState) => ({
      ...prevState,
      labelsChecked: {
        ...prevState.labelsChecked,
        [index]: !prevState.labelsChecked[index]
      }
    }))
  }


  useEffect(() => {

    const storedCardState = localStorage.getItem('tableState');
    
    if (storedCardState) {
      // Si hay un estado guardado, lo usamos.
      const state = JSON.parse(storedCardState)
      state.numberOfPlayers = numberOfPlayers
      state.cluesPerPlayer = cluesPerPlayer
      console.log({state});
      setTableState(state);
    } else {
      // Si no hay estado guardado, inicializamos con un valor por defecto.
      const initialCardState = tableObject(numberOfPlayers, cluesPerPlayer);
      setTableState(initialCardState);
      // No escribimos en localStorage aquí, dejamos que el segundo useEffect lo maneje.
    }

  }, [numberOfPlayers, cluesPerPlayer]);
  
  useEffect(() => {
    if (!tableState) return
      localStorage.setItem('tableState', JSON.stringify(tableState));
  }, [tableState]);
  
  


  return (
    <>
    {
      // blur-2xl pointer-events-none
      tableState && (
        <div className={`CARD max-w-[400px] w-full  mt-10 z-50 sm:w-full h-auto sm:rounded bg-white dark:bg-black dark:border-0 text-black dark:text-white sm:border-2 border-black/60 dark:border-transparent flex flex-col `}>
      
        <section className="SUSPECTS w-full h-auto">
          <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-0.5">
            Sospechosos y jugadores
          </h2>
          <section className="AVATARES relative w-full  pl-[108px] border-l-2 border-gray-700">
  
            <Avatares 
              numberOfPlayers={numberOfPlayers} 
              cluesPerPlayer={cluesPerPlayer}  
              cardState={tableState}
              onAvatarColorChange={onAvatarColorChange}
            />
          </section>

          {/* Nombre de personajes */}
          <Rows 
            cardState={tableState} 
            handleCheckOptionState={handleCheckOptionState} 
            labels={suspects} 
            numberOfPlayers={numberOfPlayers}
            section="suspects"
            onLabelChecked={onLabelChecked}
          />
        </section>

        <section className="PLACES w-full h-auto">
          <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-0.5">
            Lugares
          </h2>
  
          <Rows 
            cardState={tableState} 
            handleCheckOptionState={handleCheckOptionState} 
            labels={places} 
            numberOfPlayers={numberOfPlayers}
            section="places"
            onLabelChecked={onLabelChecked}
          />
        </section>
  
        <section className="WEAPONS w-full h-auto">
          <h2 className="w-full text-center font-semibold text-white bg-gray-700 p-0.5">
            Armas
          </h2>
  
          <Rows 
            cardState={tableState} 
            handleCheckOptionState={handleCheckOptionState} 
            labels={weapons} 
            numberOfPlayers={numberOfPlayers}
            section="weapons"
            onLabelChecked={onLabelChecked}
          />
        </section>
        
      </div>
      )
    }

  </>
    
  )
}

export default Table
