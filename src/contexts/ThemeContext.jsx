"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useThemePreferences } from "../hooks/useThemePreferences";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const themePreferences = useThemePreferences();

  useEffect(() => {
    // Initialize theme based on preferences
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(systemPrefersDark);
    }
    
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Apply theme to document with smooth transition
      const root = document.documentElement;
      
      // Add transition class for smooth switching
      root.classList.add("theme-transition");
      
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      
      // Remove transition class after animation
      setTimeout(() => {
        root.classList.remove("theme-transition");
      }, 300);
    }
  }, [darkMode, isLoading]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const setTheme = (theme) => {
    setDarkMode(theme === "dark");
  };

  const resetToSystem = () => {
    localStorage.removeItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(systemPrefersDark);
  };

  const value = {
    darkMode,
    toggleTheme,
    setTheme,
    resetToSystem,
    isLoading,
    preferences: themePreferences,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
