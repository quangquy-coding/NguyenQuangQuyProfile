"use client";

import { useTheme } from "../contexts/ThemeContext";

const SimpleThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out
        ${darkMode 
          ? 'bg-gray-800' 
          : 'bg-gray-200'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
      aria-label={darkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
    >
      {/* Toggle circle */}
      <div
        className={`
          absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ease-in-out toggle-circle
          ${darkMode 
            ? 'bg-white translate-x-8' 
            : 'bg-white translate-x-1'
          }
          shadow-lg
        `}
      />
      
      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-yellow-500'}`}>
          ☀️
        </div>
        <div className={`text-xs ${darkMode ? 'text-white' : 'text-gray-400'}`}>
          🌙
        </div>
      </div>
    </button>
  );
};

export default SimpleThemeToggle;
