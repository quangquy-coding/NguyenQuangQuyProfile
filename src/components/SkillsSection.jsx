import { translations } from "../lib/translations.js";

const SkillsSection = ({ language }) => {
  const t = translations[language].skills;

  const skillCategories = [
    {
      title: t.categories.frontend,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 75 },
      ],
    },
    {
      title: t.categories.backend,
      skills: [
        { name: "ASP.NET Core", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "RESTful APIs", level: 80 },
      ],
    },
    {
      title: t.categories.database,
      skills: [
        { name: "SQL Server", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Git/GitHub", level: 85 },
        { name: "Visual Studio", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600 dark:border-teal-500">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-teal-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t.otherTech}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "C#",
              "TypeScript",
              "jQuery",
              "AJAX",
              "Entity Framework",
              "JWT",
              "Postman",
              "VS Code",
              "Figma",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-teal-400 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
