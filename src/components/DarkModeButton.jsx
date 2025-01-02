import { useState, useEffect } from 'react';
import { DarkLightIcon } from '../assets/icons'
export const DarkModeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    // Añade o quita la clase `dark` en el elemento raíz del documento
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guarda el tema seleccionado en el localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className=""
    >

<DarkLightIcon className='w-7 h-7 text-white bg-black dark:text-black dark:bg-white rounded p-1.5 ' />
    </button>
  );
}

export default DarkModeButton