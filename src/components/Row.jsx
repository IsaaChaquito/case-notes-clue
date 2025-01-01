
import { useState } from 'react'
import CheckOption from './CheckOption'

export const Row = (
  { 
    label = "Nombre",
    labelColor = "bg-transparent",
    numberOfOptions = 6,
  }
) => {

  const labelStates = { 
    noUnderline: 'no-underline', 
    lineThrough: 'line-through decoration-8'
  }

  const [labelState, setLabelState] = useState('no-underline')

  const alternateUnderline = () => {
    if (labelState === labelStates.noUnderline) {
      setLabelState(labelStates.lineThrough)
    } else {
      setLabelState(labelStates.noUnderline)
    } 
  }

  return (
    <div className="CLUE-SUSPECTS h-7 flex items-center select-none">
      <h1 
        onClick={ alternateUnderline }
        className={`min-w-28 h-full text-black text-sm text-nowrap text-center cursor-pointer  ${labelColor} ${labelState} p-1 `}>
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
