"use client";

import { useTheme } from "../contexts/ThemeContext";

const BasicThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        w-12 h-6 rounded-full p-1 transition-all duration-300 ease-in-out
        ${darkMode 
          ? 'bg-gray-800' 
          : 'bg-gray-200'
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500
      `}
      aria-label={darkMode ? "Chuyển sang sáng" : "Chuyển sang tối"}
    >
      <div
        className={`
          w-4 h-4 rounded-full bg-white transition-all duration-300 ease-in-out
          ${darkMode 
            ? 'translate-x-6' 
            : 'translate-x-0'
          }
          shadow-md
        `}
      />
    </button>
  );
};

export default BasicThemeToggle;
