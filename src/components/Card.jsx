

export const Card = () => {
  return (
    <div className="CARD w-full sm:w-full h-[calc(100vh-100px)] rounded bg-white dark:bg-black/60 dark:border-0 text-black dark:text-white border-2 border-black/60 dark:border-transparent flex flex-col overflow-hidden">
      
      <section className="SUSPECTS w-full h-full">
        <h2 className="w-full text-center font-semibold bg-black/60 dark:bg-gray-700 p-1">Suspects</h2>
        <div className="CLUE-SUSPECTS h-7 flex gap-2 ">
          <h1 className="w-[30%] bg-yellow-500 p-1 ">Mostaza</h1>
          <div className="w-4 h-4 bg-white rounded">
            
          </div>
        </div>
      </section>

      <section className="WEAPONS bg-blue-400 w-full h-full">
      <h2 className="w-full text-center font-bold">Weapons</h2>
        <div className="CLUE-WEAPON min-h-full">Weapon</div>
      </section>

      <section className="ROOMS bg-blue-500 w-full h-full">
      <h2 className="w-full text-center font-bold">Rooms</h2>
        <div className="CLUE-ROOM min-h-full">Room</div>
      </section>
    </div>
  )
}

export default Card
