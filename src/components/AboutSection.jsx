import { Code, Briefcase, GraduationCap, Target } from "lucide-react";
import { translations } from "../lib/translations.js";
import Toine from "../assets/toine.jpg";

const AboutSection = ({ language }) => {
  const t = translations[language].about;

  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: t.highlights.education.title,
      description: t.highlights.education.description,
    },
    {
      icon: <Code size={24} />,
      title: t.highlights.development.title,
      description: t.highlights.development.description,
    },
    {
      icon: <Target size={24} />,
      title: t.highlights.focus.title,
      description: t.highlights.focus.description,
    },
    {
      icon: <Briefcase size={24} />,
      title: t.highlights.status.title,
      description: t.highlights.status.description,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={Toine}
                alt="About me"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-600 dark:bg-teal-500 rounded-2xl -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t.heading}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.paragraph1}
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.paragraph2}
            </p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.paragraph3}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-blue-600 dark:text-teal-400 mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
