"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = ({ className = "", variant = "default" }) => {
  const { darkMode, toggleTheme } = useTheme();

  if (variant === "facebook") {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={toggleTheme}
          className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:shadow-lg"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Background gradient */}
          <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
            darkMode 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-purple-500/25' 
              : 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/25'
          }`} />
          
          {/* Toggle circle */}
          <div className={`relative w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out flex items-center justify-center ${
            darkMode ? 'translate-x-6' : 'translate-x-0'
          }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              {darkMode ? (
                <Moon size={14} className="text-indigo-600 animate-fade-in" />
              ) : (
                <Sun size={14} className="text-orange-500 animate-fade-in" />
              )}
            </div>
          </div>
          
          {/* Stars animation for dark mode */}
          {darkMode && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-twinkle" />
              <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delay" />
              <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delay-2" />
            </div>
          )}
          
          {/* Sun rays for light mode */}
          {!darkMode && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-8 h-8 animate-spin-slow">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-1 bg-yellow-300 rounded-full"
                    style={{
                      top: '2px',
                      left: '50%',
                      transformOrigin: '50% 14px',
                      transform: `translateX(-50%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </button>
      </div>
    );
  }

  // Default variant
  return (
    <button
      onClick={toggleTheme}
      className={`group relative p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${className}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        {/* Light mode icon */}
        <Sun 
          size={24} 
          className={`absolute inset-0 text-yellow-500 transition-all duration-500 transform ${
            darkMode 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        
        {/* Dark mode icon */}
        <Moon 
          size={24} 
          className={`absolute inset-0 text-indigo-400 transition-all duration-500 transform ${
            darkMode 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;
