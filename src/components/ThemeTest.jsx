"use client";

import { useTheme } from "../contexts/ThemeContext";
import SimpleThemeToggle from "./SimpleThemeToggle";

const ThemeTest = () => {
  const { darkMode } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg z-50">
      <div className="space-y-3">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          Theme Toggle Test
        </div>
        
        <div className="flex items-center gap-3">
          <SimpleThemeToggle />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {darkMode ? "Tối" : "Sáng"}
          </span>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Bấm để chuyển đổi giữa sáng và tối
        </div>
      </div>
    </div>
  );
};

export default ThemeTest;
