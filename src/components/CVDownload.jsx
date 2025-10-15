"use client";

import { useState } from "react";
import { Download, ChevronDown, FileText, Code, Server } from "lucide-react";

const CVDownload = ({ language, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cvOptions = [
    {
      id: "frontend",
      name: language === "vi" ? "CV Frontend Developer" : "Frontend Developer CV",
      file: "/NguyenQuangQuy_Frontend_CV_English.pdf",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "backend", 
      name: language === "vi" ? "CV Backend Developer" : "Backend Developer CV",
      file: "/NguyenQuangQuy_Backend_CV_English.pdf",
      icon: Server,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const handleDownload = (cvFile, cvName) => {
    try {
      const link = document.createElement('a');
      link.href = cvFile;
      link.download = cvName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsOpen(false);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(cvFile, '_blank');
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-teal-500 dark:to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 font-semibold relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-cyan-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Download size={20} className="relative z-10 group-hover:animate-bounce" />
        <span className="relative z-10">
          {language === "vi" ? "Tải CV" : "Download CV"}
        </span>
        <ChevronDown 
          size={16} 
          className={`relative z-10 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl p-2 min-w-[280px] z-50 animate-fade-in">
          {cvOptions.map((cv) => (
            <button
              key={cv.id}
              onClick={() => handleDownload(cv.file, cv.name)}
              className={`w-full flex items-center gap-4 px-4 py-4 text-left hover:bg-gradient-to-r hover:${cv.color} hover:text-white rounded-xl transition-all duration-300 group border border-transparent hover:border-white/20`}
            >
              <div className={`p-3 bg-gradient-to-br ${cv.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                <cv.icon size={20} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white group-hover:text-white">
                  {cv.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                  PDF • {language === "vi" ? "Tải xuống" : "Download"}
                </p>
              </div>
              <Download size={16} className="text-gray-400 group-hover:text-white group-hover:animate-bounce" />
            </button>
          ))}
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CVDownload;