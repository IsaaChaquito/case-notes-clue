
import './App.css'
import { DarkModeButton, Card } from './components'
import { DarkLightIcon } from './assets/icons'
import logo from './assets/images/Clue_2023_logo.webp'

function App() {

  return (
    <div className="sm:min-w-screen sm:min-h-screen bg-white dark:bg-black/70 flex flex-col items-center gap-y-1">
      {/* TODO: delete title */}
      <div className='flex justify-between items-center'>
        {/* <h1 className="text-xl text-black dark:text-white font-bold p-2  text-center">
          Case Notes / Clue
        </h1> */}
        <img 
          src={logo} alt="Logo Clue" 
          className='w-24 object-contain '  
        />
        
        <DarkLightIcon />
      </div>

      <DarkModeButton />

      <Card />

    </div>
  )
}

export default App
