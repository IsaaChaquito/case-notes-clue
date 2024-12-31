import { useState, useEffect } from 'react';
export const DarkModeButton = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
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
      className="hover:bg-gray-300 dark:hover:bg-gray-900 p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white duration-150"
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default DarkModeButton