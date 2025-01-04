
import './App.css'
import { DarkModeButton, Card, Select } from './components'
import { LogoClueIcon } from './assets/icons'
import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'

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


  {/* Evitar recargrar la página */}
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Mostrar un mensaje de confirmación al usuario
      const confirmationMessage = "¿Estás seguro de que quieres recargar la página? Podrías perder los cambios.";
      const userConfirmed = window.confirm(confirmationMessage);

      // Si el usuario cancela, prevenir la recarga
      if (!userConfirmed) {
        event.preventDefault();
        return '';
      }
    };

    // Agregar el evento cuando el componente se monta
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Eliminar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
      

      <Card 
        numberOfPlayers={numberOfPlayers}
        cluesPerPlayer={cluesPerPlayer}
      />


      <Footer />

    </div>
  )
}

export default App
