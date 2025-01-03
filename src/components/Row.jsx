
import { useState } from 'react'
import CheckOption from './CheckOption'

export const Row = (
  { 
    rowIndex,
    label = "Nombre",
    labelColor = "bg-transparent",
    numberOfOptions = 6,
    cardState,
    handleCheckOptionState
  }
) => {

  const [labelLineThrough, setLabelLineThrough] = useState(false)

  return (
    <div className="CLUE-SUSPECTS h-7 flex items-center select-none">
      <h1 
        onClick={ () => setLabelLineThrough(!labelLineThrough) }
        className={`min-w-28 h-full text-black text-sm text-nowrap text-center cursor-pointer  ${labelColor} ${labelLineThrough ? 'line-through decoration-2 decoration-black dark:decoration-white' : 'no-underline'} p-1 `}>
        {label}
      </h1>
      {
        Array.from({  length: numberOfOptions }).map((_, index) => (
          <CheckOption key={index} cardState={cardState} handleCheckOptionState={handleCheckOptionState} rowIndex={rowIndex} colIndex={index}/>
        ))
      }
    </div>
  )
}
