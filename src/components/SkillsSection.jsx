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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent mb-6 animate-fade-in">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full animate-pulse"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '200ms'}}>
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-teal-400 animate-fade-in opacity-0"
              style={{animationDelay: `${categoryIndex * 200}ms`, animationFillMode: 'forwards'}}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6 pb-3 relative">
                {category.title}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-teal-500 dark:to-cyan-500 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover/skill:text-blue-600 dark:group-hover/skill:text-teal-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-teal-400 font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 h-full rounded-full transition-all duration-2000 ease-out relative overflow-hidden group-hover/skill:shadow-lg group-hover/skill:shadow-blue-500/50"
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-teal-400 opacity-0 group-hover/skill:opacity-50 transition-opacity duration-300"></div>
                      </div>
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
                className="px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-blue-700 dark:text-teal-400 rounded-full font-semibold hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg border border-blue-200/50 dark:border-gray-600/50 animate-fade-in opacity-0"
                style={{animationDelay: `${index * 100}ms`, animationFillMode: 'forwards'}}
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
