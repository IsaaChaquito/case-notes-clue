

export const ClueCard = ({ name, onClose }) => {

  const onCloseClueCard = () => {
    onClose()
  }

  return (
    <div 
      className={`CARD-IMAGE fixed left-0 top-0 bottom-0 right-0  p-2  bg-blue-950 rounded-sm text-xl text-black dark:text-white flex justify-center items-center duration-150 z-50 animate-fade-in`}>
      
      <button onClick={ onCloseClueCard } className="absolute top-2 right-2 p-2 rounded-full bg-white text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      { name }
    </div>
  )
}
