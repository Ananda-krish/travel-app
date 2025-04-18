import React, { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || 
    (!localStorage.getItem("theme") && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <h1 className="text-3xl font-bold mb-3">Tailwind CSS Dark Mode</h1>
      <p className="mb-6">Click the button to toggle dark mode!</p>
      <button
        onClick={toggleDarkMode}
        className={`px-6 py-2 rounded-md transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-700 text-white hover:bg-gray-600' 
            : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
        }`}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default App;