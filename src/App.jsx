
import './App.css'
import { DarkModeButton, Table, Select } from './components'
import { LogoClueIcon, TrashIcon } from './assets/icons'
import { useState } from 'react'
import { Footer } from './components/Footer'
import { tableObject } from './components'

function App() {

  const MAX_PLAYERS = 6
  const MAX_CLUES = 5

  const [numberOfPlayers, setnumberOfPlayers] = useState(6)
  const [cluesPerPlayer, setcluesPerPlayer] = useState(3)

  const handleNumberOfPlayers = (e) => {
    setnumberOfPlayers(e.target.value)
  }

  const handleCluesPerPlayer = (e) => {
    setcluesPerPlayer(e.target.value)
  } 

  const clearLocalStorage = () => {

    // const result = confirm('¿Eliminar los registros de la partida?')

    if( !confirm('¿Eliminar los registros de la partida?') ) return
    const keepColorsOrder = confirm('¿Desea conservar el orden de los jugadores?')


    if( keepColorsOrder ) {
      let tableState = JSON.parse(localStorage.getItem('tableState'))
      const newTableState = tableObject(numberOfPlayers)
      newTableState.avatarsColorOrder = tableState.avatarsColorOrder
      localStorage.setItem('tableState', JSON.stringify(newTableState ))
    }else{
      localStorage.setItem('tableState', JSON.stringify(tableObject(numberOfPlayers)))
    }
    
    window.location.reload()
  }


  return (
    <div className=" sm:min-w-screen min-h-screen  bg-white dark:bg-black flex flex-col items-center gap-y-1">

      <div className='flex justify-between items-center m-1 gap-x-2 fixed top-0'>
        <LogoClueIcon className='w-14 h-8 text-black dark:text-white' />

        <Select 
          title="Jugadores" 
          numberOfItems={numberOfPlayers} 
          MAX_ITEMS={MAX_PLAYERS} 
          handler={handleNumberOfPlayers} 
        />

        <Select 
          title="Pistas" 
          numberOfItems={cluesPerPlayer} 
          MAX_ITEMS={MAX_CLUES} 
          handler={handleCluesPerPlayer} 
        />

        <DarkModeButton /> 
      </div>
      
      <Table 
        numberOfPlayers={numberOfPlayers}
        cluesPerPlayer={cluesPerPlayer}
        tableState={JSON.parse(localStorage.getItem('tableState'))}
      />

      <section className='w-full flex my-5 justify-center items-center'>
        <button onClick={clearLocalStorage} className='flex justify-center items-center text-xs p-2 rounded-full bg-red-800 text-black dark:text-white'>
          Reset
          <TrashIcon className='w-4 h-4'/>
        </button>
      </section>

      <Footer />

    </div>
  )
}

export default App
