import { useEffect, useRef, useState } from "react";
import CheckOption from "./CheckOption";
import { ClueCard } from "./ClueCard";

export const Row = ({
  rowIndex,
  label = "Nombre",
  labelColor = "bg-transparent",
  numberOfOptions = 6,
  cardState,
  handleCheckOptionState,
  onLabelChecked,
}) => {
  const [labelLineThrough, setLabelLineThrough] = useState(false);
  const holdTimeout = useRef(null);
  const [showClueCard, setShowClueCard] = useState(false);

  const handleMouseDown = () => {
    // Inicia el temporizador
    holdTimeout.current = setTimeout(() => {
      setShowClueCard(true)
      document.body.style.overflow = "hidden"
    }, 500);
  };

  const handleMouseUp = () => {
    // Limpia el temporizador al soltar el botón
    clearTimeout(holdTimeout.current);
  }

  const handleLabelLineThrough = () => {
    setLabelLineThrough(!labelLineThrough);
    onLabelChecked(rowIndex);
  };

  const onCloseClueCard = () => {
    setShowClueCard(false);
    document.body.style.overflow = ""
  }


  useEffect(() => {
    if(cardState) setLabelLineThrough( cardState.labelsChecked[rowIndex] )
  }, [])

  return (
    <div className="CLUE-SUSPECTS h-7 flex items-center select-none">
      <h1
        onClick={ handleLabelLineThrough }
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Para manejar si el mouse se sale del botón
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        className={`min-w-28 h-full text-black text-sm text-nowrap text-center cursor-pointer user-select-none ${labelColor} ${
          labelLineThrough
            ? "line-through decoration-2 decoration-black dark:decoration-white"
            : "no-underline"
        } p-1`}
      >
        {label}
      </h1>
      {Array.from({ length: numberOfOptions }).map((_, index) => (
        <CheckOption
          key={index}
          cardState={cardState}
          handleCheckOptionState={handleCheckOptionState}
          rowIndex={rowIndex}
          colIndex={index}
        />
      ))}


      {
        showClueCard && (
          <ClueCard 
            name={label}  
            onClose={ () => onCloseClueCard() }
          />
        )
      }
    
    </div>
  );
};
