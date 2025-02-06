import { Row } from "../components"
import { stylesFor } from "../helpers/constants"


export const Rows = ({cardState, handleCheckOptionState, labels, numberOfPlayers, section, onLabelChecked}) => {

  const acumulator = (section === "suspects") ? 0 : (section === "weapons") ? 6 : 12

  return (
    Array.from({ length: labels.length }).map((_, index) => (
      <Row 
        key={index} 
        rowIndex={index + acumulator}
        cardState={cardState} 
        handleCheckOptionState={handleCheckOptionState} 
        label={labels[index]} 
        labelColor={stylesFor[section][index]} 
        numberOfOptions={numberOfPlayers} 
        onLabelChecked={onLabelChecked}
      />
    ))
  )
}

export default Rows