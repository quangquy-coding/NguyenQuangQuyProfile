"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Globe } from "lucide-react";
import { translations } from "../lib/translations.js";
import SimpleThemeToggle from "./SimpleThemeToggle";
import CVDownload from "./CVDownload";

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



  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-white/20 dark:border-gray-700/50"
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
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-900 dark:text-gray-200 hover:text-white dark:hover:text-white transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <CVDownload language={language} />

            <button
              onClick={toggleLanguage}
              className="group p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700/70 transition-all duration-300 flex items-center gap-2 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-teal-400 hover:shadow-lg"
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
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>
            <SimpleThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 animate-slide-in">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <CVDownload language={language} className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
