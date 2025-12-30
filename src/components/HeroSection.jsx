import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { translations } from "../lib/translations.js";
import Profile from "../assets/profile.jpg";

const HeroSection = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-teal-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-purple-400/5 dark:from-teal-400/5 dark:to-cyan-400/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-blue-600 dark:text-teal-400 font-semibold text-lg animate-fade-in opacity-0" style={{animationDelay: '200ms', animationFillMode: 'forwards'}}>
                {t.greeting}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-teal-200 dark:to-white bg-clip-text text-transparent animate-fade-in opacity-0 leading-tight" style={{animationDelay: '400ms', animationFillMode: 'forwards'}}>
                {t.name}
              </h1>
              <div className="pt-4">
                <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium animate-fade-in opacity-0" style={{animationDelay: '600ms', animationFillMode: 'forwards'}}>
                  <span className="inline-block animate-pulse">💻</span> {t.title}
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in opacity-0" style={{animationDelay: '800ms', animationFillMode: 'forwards'}}>
              {t.description}
            </p>

            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin size={20} className="text-blue-600 dark:text-teal-400" />
              <span>{t.location}</span>
            </div>

            <div className="flex gap-4 pt-4 animate-fade-in opacity-0" style={{animationDelay: '1200ms', animationFillMode: 'forwards'}}>
              {[
                { href: "https://github.com/quangquy-coding", icon: Github, color: "hover:bg-gray-800 hover:shadow-gray-500/25" },
                { href: "https://www.linkedin.com/in/quy-nguyen-b00032200/", icon: Linkedin, color: "hover:bg-blue-600 hover:shadow-blue-500/25" },
                { href: "mailto:quangquy822003@gmail.com", icon: Mail, color: "hover:bg-red-500 hover:shadow-red-500/25" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl ${social.color} hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50`}
                >
                  <social.icon size={24} className="group-hover:animate-pulse" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-6 animate-fade-in opacity-0" style={{animationDelay: '1400ms', animationFillMode: 'forwards'}}>
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-teal-500 dark:to-cyan-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105 font-semibold relative overflow-hidden"
              >
                <span className="relative z-10">{t.getInTouch}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-cyan-500 dark:to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#projects"
                className="group px-8 py-4 border-2 border-blue-600 dark:border-teal-500 text-blue-600 dark:text-teal-400 rounded-xl hover:bg-blue-600 dark:hover:bg-teal-500 hover:text-white transition-all duration-300 hover:scale-105 font-semibold relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10">{t.viewProjects}</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in opacity-0" style={{animationDelay: '1000ms', animationFillMode: 'forwards'}}>
            <div className="relative group">
              {/* Main profile container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-teal-500 p-1 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={Profile}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-bounce" style={{animationDelay: '2s'}}>
                <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold">💡</div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-80 animate-bounce" style={{animationDelay: '2.5s'}}>
                <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold">🚀</div>
              </div>
              <div className="absolute top-10 -left-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-80 animate-bounce" style={{animationDelay: '3s'}}>
                <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold">⭐</div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full transform -translate-y-1/2"></div>
                <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-teal-400 rounded-full transform -translate-x-1/2"></div>
                <div className="absolute top-1/2 -left-2 w-2 h-2 bg-pink-400 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
