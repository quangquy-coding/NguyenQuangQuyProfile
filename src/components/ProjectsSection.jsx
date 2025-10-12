import { ExternalLink, Github, Calendar, Users } from "lucide-react";
import { translations } from "../lib/translations.js";
import Nhahang from "../assets/nhahang2025.jpg";
const ProjectsSection = ({ language }) => {
  const t = translations[language].projects;

  const projects = [
    {
      title: t.project1.title,
      description: t.project1.description,
      technologies: [
        "ASP.NET Core",
        "SQL Server",
        "Bootstrap",
        "JavaScript",
        "Entity Framework",
      ],
      features: t.project1.features,
      duration: t.project1.duration,
      team: t.project1.team,
      image: "/restaurant-management-dashboard.png",
      github: "https://github.com/quangquy2k3",
      demo: "#",
    },
    {
      title: t.project2.title,
      description: t.project2.description,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
      features: t.project2.features,
      duration: t.project2.duration,
      team: t.project2.team,
      image: "/food-ordering-app-interface.jpg",
      github: "https://github.com/quangquy2k3",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
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

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={Nhahang}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:w-1/2 p-8">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar
                        size={18}
                        className="text-blue-600 dark:text-teal-400"
                      />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Users
                        size={18}
                        className="text-blue-600 dark:text-teal-400"
                      />
                      <span>{project.team}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {t.keyFeatures}
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="w-2 h-2 bg-blue-600 dark:bg-teal-500 rounded-full mt-2"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {t.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-teal-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                      <span>{t.code}</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-teal-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-teal-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>{t.liveDemo}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
