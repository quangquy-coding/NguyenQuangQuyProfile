"use client";

import { useTheme } from "../contexts/ThemeContext";

const SimpleThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full transition-all duration-300 ease-in-out shadow-sm
        ${darkMode 
          ? 'bg-gray-700 border border-gray-600' 
          : 'bg-gray-300 border border-gray-400'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      `}
      aria-label={darkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
    >
      {/* Toggle circle */}
      <div
        className={`
          absolute top-0.5 w-7 h-7 rounded-full transition-all duration-300 ease-in-out toggle-circle
          ${darkMode 
            ? 'bg-white translate-x-8 shadow-md' 
            : 'bg-white translate-x-0.5 shadow-md'
          }
        `}
      />
      
      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-yellow-600'}`}>
          ☀️
        </div>
        <div className={`text-xs ${darkMode ? 'text-yellow-400' : 'text-gray-500'}`}>
          🌙
        </div>
      </div>
    </button>
  );
};

export default SimpleThemeToggle;
