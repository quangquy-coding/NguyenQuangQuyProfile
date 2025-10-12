import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { translations } from "../lib/translations.js";
import Profile from "../assets/profile.jpg";

const HeroSection = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-teal-400 font-semibold text-lg">
                {t.greeting}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                {t.name}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                {t.title}
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.description}
            </p>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="text-blue-600 dark:text-teal-400" />
              <span>{t.location}</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/quangquy-coding"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-500 hover:text-white transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/quy-nguyen-b00032200/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-500 hover:text-white transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:quangquy822003@gmail.com"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-500 hover:text-white transition-all"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 dark:bg-teal-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-teal-600 transition-colors font-semibold"
              >
                {t.getInTouch}
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-blue-600 dark:border-teal-500 text-blue-600 dark:text-teal-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors font-semibold"
              >
                {t.viewProjects}
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={Profile}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 dark:bg-teal-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500 dark:bg-blue-600 rounded-full opacity-20 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
