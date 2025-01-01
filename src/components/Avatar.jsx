
export const color = [
                "bg-green-500", 
                "bg-yellow-500", 
                "bg-blue-500", 
                "bg-purple-500", 
                "bg-red-500", 
                "bg-white dark:bg-black"
              ]

export const Avatar = ({ index }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg className={`absolute w-12 h-12 ${color[index]} -left-1`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
      </div>
    </div>
  )
}

export default Avatar
