"use client";

import { useTheme } from "../contexts/ThemeContext";
import { ThemeToggle, ThemeIndicator, ThemeStatus } from "./index";

const DarkModeTest = () => {
  const { darkMode, setTheme, resetToSystem, preferences } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg z-50">
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          Dark Mode Test
        </div>
        
        <div className="flex items-center gap-2">
          <ThemeToggle size={16} />
          <ThemeIndicator />
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setTheme("light")}
            className="px-3 py-1 text-xs bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Dark
          </button>
          <button
            onClick={resetToSystem}
            className="px-3 py-1 text-xs bg-green-100 dark:bg-gray-700 text-green-700 dark:text-green-400 rounded hover:bg-green-200 dark:hover:bg-gray-600 transition-colors"
          >
            System
          </button>
        </div>
        
        <ThemeStatus />
      </div>
    </div>
  );
};

export default DarkModeTest;
