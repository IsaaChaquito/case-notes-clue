
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center">
      {/* TODO: delete title */}
      <h1 className="text-3xl font-bold p-2 bg-gray-200 text-center">
        Case Notes / Clue
      </h1>

      <Card />

    </div>
  )
}

export default App
