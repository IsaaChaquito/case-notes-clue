
import './App.css'
import { DarkModeButton, Card } from './components'

function App() {

  return (
    <div className="sm:min-w-screen sm:min-h-screen bg-white dark:bg-black/70 flex flex-col items-center gap-y-1">
      {/* TODO: delete title */}
      <h1 className="text-xl text-black dark:text-white font-bold p-2  text-center">
        Case Notes / Clue
      </h1>

      <DarkModeButton />

      <Card />

    </div>
  )
}

export default App
