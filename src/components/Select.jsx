

export const Select = ({ title, numberOfItems, MAX_ITEMS, handler }) => {
  return (
    <select 
      onChange={(e) => handler(e)} 
      value={numberOfItems}
      className='w-auto h-7 px-1 text-white text-xs bg-black dark:text-black dark:bg-white rounded outline-none'
    >
      {
        Array.from({  length: MAX_ITEMS }).map((_, index) => (
          <option key={index} value={index + 1} >{index + 1} { title }</option>
        ))
      }
    </select>
  )
}

export default Select
