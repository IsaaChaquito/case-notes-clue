import { useState } from 'react'
import { CheckIcon, CloseIcon, QuestionMarkIcon, ExclamationIcon, CheckboxIcon } from '../assets/icons'

export const CheckOption = (  ) => {

  const [state, setState] = useState({
    showOptions: false,
    selectedOption: "void"
  })

  const options = {
    check: <CheckIcon 
              key="check"
              onClick={ () => selectOption('check') }
              className="w-full h-full text-green-500 hover:scale-125 duration-150" 
            />,
    close: <CloseIcon 
              key="close"
              onClick={ () => selectOption('close') } 
              className="w-full h-full text-red-500 hover:scale-125 duration-150" />,
    question: <QuestionMarkIcon 
                key="question"
                onClick={ () => selectOption('question') } 
                className="w-full h-full text-yellow-500 hover:scale-125 duration-150" />,
    // exclamation: <ExclamationIcon className="w-full h-full text-gray-500 hover:scale-125 duration-150" />,
    void: <CheckboxIcon
            key="void"
            onClick={ () => selectOption('void') } 
            className="w-full h-full text-gray-500 hover:scale-125 duration-150" />
  }

  const showOptions = () => {
    setState( {
        ...state,
        showOptions: !state.showOptions
      })
  }

  const selectOption = (option) => {

    setState( prevState =>({
        ...prevState,
        showOptions: false,
        selectedOption: option
      }))
  }

  return (
    <div className='relative w-full flex justify-center items-center bg-black'>
      <button 
        onClick={ showOptions }
        onBlur={ e => e.target !== e.currentTarget && showOptions() }
        className="w-7 h-full bg-black text-black flex justify-center items-center"
      >
        {options[state.selectedOption]}
      </button>

      {
        state.showOptions && (
          <div 
            
          className='OPTIONS z-20 absolute -top-[1.9rem] left-1/2 -translate-x-1/2 w-24 dark:bg-white bg-black rounded-full flex justify-center items-center p-1 '>
            {
              Object.keys(options).map((option) => (
              options[option]
            ))}
          </div>
        )
      }
    </div>
  )
}

export default CheckOption