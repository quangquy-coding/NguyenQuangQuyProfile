"use client";

import { useTheme } from "../contexts/ThemeContext";
import { Monitor, Sun, Moon } from "lucide-react";

const ThemeIndicator = () => {
  const { darkMode } = useTheme();

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
      <div className="flex items-center gap-1">
        {darkMode ? (
          <>
            <Moon size={16} className="text-blue-600 dark:text-teal-400" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <Sun size={16} className="text-yellow-500" />
            <span>Light Mode</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-1 text-xs">
        <Monitor size={14} />
        <span>System</span>
      </div>
    </div>
  );
};

export default ThemeIndicator;
