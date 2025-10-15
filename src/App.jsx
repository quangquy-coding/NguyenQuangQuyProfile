"use client";

import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import LanguagesSection from "./components/LanguagesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ThemeTest from "./components/ThemeTest";
import AdvancedThemeToggle from "./components/AdvancedThemeToggle";

function AppContent() {
  const { isLoading } = useTheme();
  const [language, setLanguage] = useState("vi");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "vi" ? "en" : "vi";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 theme-transition">
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSection language={language} />
        <EducationSection language={language} />
        <ProjectsSection language={language} />
        <LanguagesSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
      
      {/* Facebook-style floating theme toggle */}
      <AdvancedThemeToggle variant="facebook" />
      
      {process.env.NODE_ENV === 'development' && <ThemeTest />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
