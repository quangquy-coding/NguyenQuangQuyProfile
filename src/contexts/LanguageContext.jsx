"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("vi");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "vi" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
