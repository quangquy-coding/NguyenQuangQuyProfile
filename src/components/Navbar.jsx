"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import { translations } from "../lib/translations.js";
import SimpleThemeToggle from "./SimpleThemeToggle";

const Navbar = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.skills, href: "#skills" },
    { name: t.education, href: "#education" },
    { name: t.projects, href: "#projects" },
    { name: t.contact, href: "#contact" },
  ];

  const handleDownloadCV = () => {
    alert("CV download feature - Connect to your actual CV file");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-2xl font-bold text-blue-600 dark:text-teal-400"
          ></a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-teal-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-teal-600 transition-colors"
            >
              <Download size={18} />
              <span>{t.cv}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>

            <SimpleThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>
            <SimpleThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 dark:bg-teal-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-teal-600 transition-colors"
            >
              <Download size={18} />
              <span>{t.cv}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
