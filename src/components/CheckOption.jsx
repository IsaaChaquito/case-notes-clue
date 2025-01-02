import { useState } from 'react'
import { CheckIcon, CloseIcon, QuestionMarkIcon } from '../assets/icons'

export const CheckOption = () => {

  const [selectedOption, setSelectedOption] = useState(0)

  const options = [
    null,
    <CheckIcon 
      key="check"
      className="w-full h-full text-green-500 bg-white dark:bg-black hover:scale-125 duration-150 rounded-full " 
    />,
    <CloseIcon 
      key="close"
      className="w-full h-full text-red-500 bg-white dark:bg-black rounded-full hover:scale-125 duration-150" 
    />,

    <QuestionMarkIcon 
      key="question"
      className="w-full h-full text-yellow-500 rounded-full bg-white dark:bg-black hover:scale-125 duration-150" 
    />
  ]

  const alternateOptions = () => {
    setSelectedOption( prevState => (
      (prevState + 1) > 3 ? 0 : prevState + 1
    ))
  }

  return (
    <button 
      onClick={ alternateOptions }
      className='relative w-full h-full flex justify-center items-center border-gray-700 border-yy border-r-2 border-b-2'
    >
      <div 
        className="w-7 h-full bg-transparent text-black flex justify-center items-center pointer-events-none"
      >
        {
          options[selectedOption]
        }
      </div>

    </button>
  )
}

export default CheckOption


