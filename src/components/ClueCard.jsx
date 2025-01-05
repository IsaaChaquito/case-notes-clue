import { useState } from "react"


export const ClueCard = ({ name }) => {

  const [showClue, setShowClue] = useState(false)

  const onShowClue = () => {
    setShowClue(!showClue)

    
  }

  return (
    <div className='IMAGE-WRAPPER overflow-hidden '>
      <button className='CARD-IMAGE w-12 h-20 bg-blue-950 rounded-sm text-xs text-black dark:text-white flex justify-center items-center'>
        { showClue ? name : 'Mostrar pista' }
      </button>
    </div>
  )
}
