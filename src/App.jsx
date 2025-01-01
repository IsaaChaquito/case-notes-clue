
import './App.css'
import { DarkModeButton, Card } from './components'
import { LogoClueIcon } from './assets/icons'
import { useState } from 'react'

function App() {

  const MAX_PLAYERS = 6

  const [numberOfPlayers, setnumberOfPlayers] = useState(6)

  const handleNumberOfPlayers = (e) => {
    setnumberOfPlayers(e.target.value)
  }

  return (
    <div className="sm:min-w-screen min-h-screen bg-white dark:bg-black/70 flex flex-col items-center gap-y-1">

      <div className='flex justify-between items-center m-1 gap-x-2'>
        <LogoClueIcon className='w-36 h-14 text-black dark:text-white' />

        <select 
          onChange={handleNumberOfPlayers} 
          value={numberOfPlayers}
          className='w-9.5 h-7 text-white bg-black dark:text-black dark:bg-white rounded outline-none'
        >
          {
            Array.from({  length: MAX_PLAYERS }).map((_, index) => (
              <option key={index} value={index + 1} >{index + 1}</option>
            ))
          }
        </select>
        <DarkModeButton /> 
      </div>

      <Card 
        numberOfPlayers={numberOfPlayers}
      />

    </div>
  )
}

export default App
