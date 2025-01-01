import { useRef, useState } from 'react'
import { CheckIcon, CloseIcon, QuestionMarkIcon, CheckboxIcon } from '../assets/icons'

export const CheckOption = (  ) => {

  const [state, setState] = useState({
    showOptions: false,
    selectedOption: "void"
  })

  const optionsRef = useRef(null);

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

    void: <CheckboxIcon
            key="void"
            onClick={ () => selectOption('void') } 
            className="w-full h-full text-gray-500 hover:scale-125 duration-150" />
  }

  const alternateShowOptions = () => {
    console.log('you click me mf');
    setState( state => ({
        ...state,
        showOptions: !state.showOptions
      }))
  }



  const selectOption = (option) => {
    console.log('clicked ', option);
    setState( prevState =>({
        ...prevState,
        showOptions: false,
        selectedOption: option
      }))

      alternateShowOptions()
  }

  const closeOptions = () => {
    setState( prevState => ({
      ...prevState,
      showOptions: false
    }))
  }

  return (
    <button 
      onClick={ alternateShowOptions }
      onBlur={ closeOptions }
      className='relative w-full h-full flex justify-center items-center border-black/60 dark:border-white border-yy border-r-2 border-b-2'
    >
      <div 
        className="w-7 h-full bg-transparent text-black flex justify-center items-center pointer-events-none"
      >
        {
          state.selectedOption !== 'void' && options[state.selectedOption]
        }
      </div>

      {
        state.showOptions && (
          <div 
            ref={optionsRef}
            className='OPTIONS z-20 absolute -top-[1.5rem] left-1/2 -translate-x-1/2 w-24 dark:bg-white bg-black rounded-full flex justify-center items-center p-1 pointer-events-none'>
            {
              Object.keys(options).map((option) => (
              <div key={option} className="w-5 h-4 pointer-events-auto">
                {options[option]}
              </div>
            ))}
          </div>
        )
      }
    </button>
  )
}

export default CheckOption


