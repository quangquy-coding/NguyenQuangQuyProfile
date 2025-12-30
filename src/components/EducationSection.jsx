import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { translations } from "../lib/translations.js";

const EducationSection = ({ language }) => {
  const t = translations[language].education;

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-teal-500"></div>

            <div className="relative pl-20 pb-12">
              <div className="absolute left-6 top-0 w-5 h-5 bg-blue-600 dark:bg-teal-500 rounded-full border-4 border-white dark:border-gray-800"></div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-gray-800 rounded-lg">
                    <GraduationCap
                      size={32}
                      className="text-blue-600 dark:text-teal-400"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t.degree}
                    </h3>

                    <p className="text-lg text-blue-600 dark:text-teal-400 font-semibold mb-3">
                      {t.university}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={18} />
                        <span>{t.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <MapPin size={18} />
                        <span>{t.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {t.coursework}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full"></span>
                          {t.courses.web}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full"></span>
                          {t.courses.database}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full"></span>
                          {t.courses.oop}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full"></span>
                          {t.courses.software}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full"></span>
                          {t.courses.dataStructures}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full"></span>
                          {t.courses.networks}
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4 p-4 bg-blue-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-600 dark:border-teal-500">
                      <p className="text-blue-800 dark:text-teal-300 leading-relaxed">
                        <span className="font-bold text-blue-600 dark:text-teal-400">{t.focus}</span>{" "}
                        <span className="font-medium">{t.focusDescription}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
