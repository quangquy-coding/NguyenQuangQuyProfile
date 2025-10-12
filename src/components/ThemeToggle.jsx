"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = ({ className = "", size = 20, showLabel = false }) => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 theme-transition ${className}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative flex items-center gap-2">
        <div className="relative animate-fade-in">
          {darkMode ? (
            <Sun 
              size={size} 
              className="animate-spin-slow text-yellow-500" 
            />
          ) : (
            <Moon 
              size={size} 
              className="animate-pulse text-blue-600" 
            />
          )}
        </div>
        {showLabel && (
          <span className="text-sm font-medium animate-fade-in">
            {darkMode ? "Light" : "Dark"}
          </span>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
