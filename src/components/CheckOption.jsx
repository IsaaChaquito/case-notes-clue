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

  // const alternateShowOptions = () => {
  //   console.log('you click me mf');
  //   setState( state => ({
  //       ...state,
  //       showOptions: !state.showOptions
  //     }))
  // }

  const alternateShowOptions = () => {
    setState((prev) => {
      const newState = { ...prev, showOptions: !prev.showOptions };

      if (newState.showOptions && optionsRef.current) {
        const optionsElement = optionsRef.current;
        const bounding = optionsElement.getBoundingClientRect();
        const screenWidth = window.innerWidth;

        let left = bounding.left;
        let translateX = '-50%';

        // Asegurar que la lista no se salga por la izquierda
        if (bounding.left < 0) {
          left = 0;
          translateX = '0';
        }

        // Asegurar que la lista no se salga por la derecha
        if (bounding.right > screenWidth) {
          left = screenWidth - bounding.width;
          translateX = '0';
        }

        optionsElement.style.left = `${left}px`;
        optionsElement.style.transform = `translateX(${translateX})`;
      }

      return newState;
    });
  };

  const selectOption = (option) => {
    console.log('clicked ', option);
    setState( prevState =>({
        ...prevState,
        showOptions: false,
        selectedOption: option
      }))

      alternateShowOptions()
  }

  return (
    <button 
      onClick={ alternateShowOptions }
      className='relative w-full h-full flex justify-center items-center border-black/60 dark:border-white border-y border-r last:border-r-0'
    >
      <div 
        className="w-7 h-full bg-transparent text-black flex justify-center items-center pointer-events-none"
      >
        {options[state.selectedOption]}
      </div>

      {
        state.showOptions && (
          <div 
            ref={optionsRef}
            className='OPTIONS z-20 absolute -top-[1.9rem] left-1/2 -translate-x-1/2 w-24 dark:bg-white bg-black rounded-full flex justify-center items-center p-1 pointer-events-none'>
            {
              Object.keys(options).map((option) => (
              <div key={option} className=" pointer-events-auto">
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