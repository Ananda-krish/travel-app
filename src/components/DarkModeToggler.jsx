import React from 'react';
import { useDarkMode } from '../context/ThemeContext';

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();
    
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-6 py-2 cursor-pointer bg-gray-300 dark:bg-gray-700 rounded-md transition-all duration-300 text-gray-800 dark:text-white"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggler;