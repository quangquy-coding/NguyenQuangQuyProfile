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
      // Apply theme to document with Facebook-style smooth transition
      const root = document.documentElement;
      const body = document.body;
      
      // Add transition class for smooth switching
      root.classList.add("theme-transition");
      body.classList.add("theme-switching");
      
      // Add a subtle overlay during transition
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 bg-black/5 dark:bg-white/5 pointer-events-none z-50 transition-opacity duration-300';
      body.appendChild(overlay);
      
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
        // Add dark mode specific body classes
        body.style.backgroundColor = '#0f172a';
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
        // Add light mode specific body classes
        body.style.backgroundColor = '#ffffff';
      }
      
      // Remove transition classes and overlay after animation
      setTimeout(() => {
        root.classList.remove("theme-transition");
        body.classList.remove("theme-switching");
        if (overlay.parentNode) {
          overlay.remove();
        }
      }, 400);
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
