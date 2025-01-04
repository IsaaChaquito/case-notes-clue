import { useEffect, useState } from 'react'
import { CheckIcon, CloseIcon, QuestionMarkIcon } from '../assets/icons'

export const CheckOption = ({ cardState, handleCheckOptionState, rowIndex, colIndex }) => {
  const [selectedOption, setSelectedOption] = useState(0)

  const options = [
    null,
    <CloseIcon
      key="close"
      className="w-full h-full text-red-500 bg-white dark:bg-black rounded-full"
    />,
    <QuestionMarkIcon
      key="question"
      className="w-full h-full text-yellow-500 rounded-full bg-white dark:bg-black"
    />,
    <CheckIcon
      key="check"
      className="w-full h-full text-green-500 bg-white dark:bg-black rounded-full"
    />,
  ]

  const alternateOptions = () => {
    const nextOption = (selectedOption + 1) > 3 ? 0 : selectedOption + 1
    setSelectedOption(nextOption)
    handleCheckOptionState(rowIndex, colIndex, nextOption) // Usa `nextOption` directamente
  }

  // Sincroniza el estado inicial de `selectedOption` con `cardState`
  useEffect(() => {
    if (cardState) {
      setSelectedOption(cardState.cols[colIndex].rows[rowIndex].iconTypeIndex)
    }
  }, [cardState, colIndex, rowIndex])

  return (
    <button
      onClick={alternateOptions}
      className="relative w-full h-full flex justify-center items-center border-gray-700 border-yy border-r-2 border-b-2"
    >
      <div className="w-7 h-full bg-transparent text-black flex justify-center items-center pointer-events-none">
        {options[cardState.cols[colIndex].rows[rowIndex].iconTypeIndex]}
      </div>
    </button>
  )
}

export default CheckOption
