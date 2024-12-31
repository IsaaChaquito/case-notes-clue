import React from 'react'
import CheckOption from './CheckOption'

export const Row = (
  { 
    label = "Nombre",
    labelColor = "bg-transparent",
    numberOfOptions = 6,
  }
) => {
  return (
    <div className="CLUE-SUSPECTS h-7 flex items-center">
      <h1 className={`min-w-28 h-full text-black text-sm text-nowrap text-center ${labelColor} p-1 `}>
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
