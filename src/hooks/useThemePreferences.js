"use client";

import { useEffect, useState } from "react";

export const useThemePreferences = () => {
  const [preferences, setPreferences] = useState({
    systemPreference: false,
    savedPreference: null,
    currentTheme: "light",
  });

  useEffect(() => {
    // Check system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    
    setPreferences({
      systemPreference: systemPrefersDark,
      savedPreference: savedTheme,
      currentTheme: savedTheme || (systemPrefersDark ? "dark" : "light"),
    });

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setPreferences(prev => ({
        ...prev,
        systemPreference: e.matches,
        currentTheme: prev.savedPreference || (e.matches ? "dark" : "light"),
      }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const resetToSystem = () => {
    localStorage.removeItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setPreferences(prev => ({
      ...prev,
      savedPreference: null,
      currentTheme: systemPrefersDark ? "dark" : "light",
    }));
  };

  return {
    ...preferences,
    resetToSystem,
  };
};


