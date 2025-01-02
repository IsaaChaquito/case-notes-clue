
import { useState } from 'react'
import CheckOption from './CheckOption'

export const Row = (
  { 
    label = "Nombre",
    labelColor = "bg-transparent",
    numberOfOptions = 6,
  }
) => {

  const [labelLineThrough, setLabelLineThrough] = useState(false)

  return (
    <div className="CLUE-SUSPECTS h-7 flex items-center select-none">
      <h1 
        onClick={ () => setLabelLineThrough(!labelLineThrough) }
        className={`min-w-28 h-full text-black text-sm text-nowrap text-center cursor-pointer  ${labelColor} ${labelLineThrough ? 'line-through decoration-4' : 'no-underline'} p-1 `}>
        {label}
      </h1>
      {
        Array.from({  length: numberOfOptions }).map((_, index) => (
          <CheckOption key={index} />
        ))
      }
    </div>
  )
}
