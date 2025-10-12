import { Languages } from "lucide-react";
import { translations } from "../lib/translations.js";

const LanguagesSection = ({ language }) => {
  const t = translations[language].languages;

  const languages = [
    {
      name: t.vietnamese.name,
      level: t.vietnamese.level,
      proficiency: 100,
      description: t.vietnamese.description,
    },
    {
      name: t.english.name,
      level: t.english.level,
      proficiency: 65,
      description: t.english.description,
    },
  ];

  return (
    <section id="languages" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-gray-800 rounded-lg">
                  <Languages
                    size={32}
                    className="text-blue-600 dark:text-teal-400"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {lang.name}
                  </h3>
                  <p className="text-blue-600 dark:text-teal-400 font-semibold">
                    {lang.level}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {lang.description}
              </p>

              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                  <span>{t.proficiency}</span>
                  <span>{lang.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-teal-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${lang.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
