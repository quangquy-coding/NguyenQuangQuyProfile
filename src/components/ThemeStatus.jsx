"use client";

import { useTheme } from "../contexts/ThemeContext";
import { Monitor, Settings, CheckCircle } from "lucide-react";

const ThemeStatus = () => {
  const { darkMode, preferences } = useTheme();

  return (
    <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <Settings size={16} className="text-blue-600 dark:text-teal-400" />
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Theme Status
        </span>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Current Theme:</span>
          <span className={`font-medium ${darkMode ? 'text-yellow-600' : 'text-blue-600'}`}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">System Preference:</span>
          <span className="text-gray-700 dark:text-gray-300">
            {preferences.systemPreference ? "Dark" : "Light"}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Saved Preference:</span>
          <span className="text-gray-700 dark:text-gray-300">
            {preferences.savedPreference || "None"}
          </span>
        </div>
        
        {preferences.savedPreference && (
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <CheckCircle size={12} />
            <span>Custom preference saved</span>
          </div>
        )}
        
        {!preferences.savedPreference && (
          <div className="flex items-center gap-1 text-blue-600 dark:text-teal-400">
            <Monitor size={12} />
            <span>Following system preference</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeStatus;
