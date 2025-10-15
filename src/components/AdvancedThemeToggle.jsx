"use client";

import { Sun, Moon, Monitor, Palette } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useState } from "react";

const AdvancedThemeToggle = ({ variant = "facebook", className = "" }) => {
  const { darkMode, toggleTheme, setTheme, resetToSystem } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

  // Facebook-style toggle
  if (variant === "facebook") {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={toggleTheme}
          className="relative w-16 h-9 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:shadow-xl group"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {/* Animated background */}
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out ${
            darkMode 
              ? 'bg-gradient-to-r from-slate-800 via-purple-900 to-slate-900 shadow-lg shadow-purple-500/30' 
              : 'bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 shadow-lg shadow-blue-500/30'
          }`}>
            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
          
          {/* Toggle circle with enhanced design */}
          <div className={`relative w-7 h-7 bg-white rounded-full shadow-xl transform transition-all duration-500 ease-in-out flex items-center justify-center ${
            darkMode ? 'translate-x-7' : 'translate-x-0'
          } group-hover:scale-110`}>
            {/* Icon container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {darkMode ? (
                <Moon size={16} className="text-slate-700 animate-fade-in" />
              ) : (
                <Sun size={16} className="text-amber-500 animate-fade-in" />
              )}
            </div>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
              darkMode 
                ? 'shadow-lg shadow-purple-400/50' 
                : 'shadow-lg shadow-yellow-400/50'
            }`} />
          </div>
          
          {/* Stars for dark mode */}
          {darkMode && (
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                  style={{
                    top: `${20 + Math.sin(i) * 15}%`,
                    left: `${15 + i * 12}%`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Sun rays for light mode */}
          {!darkMode && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-10 h-10 animate-spin-slow">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-2 bg-yellow-300/60 rounded-full"
                    style={{
                      top: '8px',
                      left: '50%',
                      transformOrigin: '50% 12px',
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

  // Advanced dropdown variant
  if (variant === "dropdown") {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {darkMode ? (
            <Moon size={20} className="text-indigo-400" />
          ) : (
            <Sun size={20} className="text-yellow-500" />
          )}
          <span className="text-sm font-medium">Theme</span>
        </button>

        {showOptions && (
          <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 min-w-[150px] z-50 animate-fade-in">
            <button
              onClick={() => {
                setTheme("light");
                setShowOptions(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <Sun size={16} className="text-yellow-500" />
              <span className="text-sm">Light</span>
            </button>
            
            <button
              onClick={() => {
                setTheme("dark");
                setShowOptions(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <Moon size={16} className="text-indigo-400" />
              <span className="text-sm">Dark</span>
            </button>
            
            <button
              onClick={() => {
                resetToSystem();
                setShowOptions(false);
              }}
              className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <Monitor size={16} className="text-gray-500" />
              <span className="text-sm">System</span>
            </button>
          </div>
        )}
      </div>
    );
  }

  // Floating action button variant
  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r ${
        darkMode 
          ? 'from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/25' 
          : 'from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/25'
      } rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl z-50 ${className}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative">
        {darkMode ? (
          <Moon size={24} className="animate-fade-in" />
        ) : (
          <Sun size={24} className="animate-fade-in" />
        )}
      </div>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200" />
    </button>
  );
};

export default AdvancedThemeToggle;