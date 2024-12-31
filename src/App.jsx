
import './App.css'
import { DarkModeButton, Card } from './components'
import { LogoClueIcon } from './assets/icons'

function App() {

  return (
    <div className="sm:min-w-screen sm:min-h-screen bg-white dark:bg-black/70 flex flex-col items-center gap-y-1">

      <div className='flex justify-between items-center m-1'>
        <LogoClueIcon className='w-36 h-20 text-black dark:text-white' />
        <DarkModeButton /> 
      </div>

      <Card />

    </div>
  )
}

export default App
