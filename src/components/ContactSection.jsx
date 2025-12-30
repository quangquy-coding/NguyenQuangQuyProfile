"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { translations } from "../lib/translations.js";

const ContactSection = ({ language }) => {
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t?.form?.success);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: t.email,
      value: "quangquy822003@gmail.com",
      link: "mailto:quangquy822003@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: t.phone,
      value: "+84 382 208 154",
      link: "tel:+84382208154",
    },
    {
      icon: <MapPin size={24} />,
      title: t.location,
      value: "Da Nang, Vietnam",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-black dark:text-white max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.info}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="p-3 bg-blue-100 dark:bg-gray-700 rounded-lg text-blue-600 dark:text-teal-400 group-hover:bg-blue-600 dark:group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {info.title}
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.connect}
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/quangquy-coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-500 hover:text-white transition-all group"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/quy-nguyen-b00032200/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-blue-600 dark:hover:bg-teal-500 hover:text-white transition-all group"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border-l-4 border-blue-600 dark:border-teal-500">
              <h4 className="font-bold text-blue-600 dark:text-teal-400 mb-2">
                {t.availability}
              </h4>
              <p className="text-blue-800 dark:text-teal-300 font-medium leading-relaxed">
                {t.availabilityText}
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t?.form?.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t?.form?.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder={t?.form?.namePlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t?.form?.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder={t?.form?.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t?.form?.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-teal-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white"
                  placeholder={t?.form?.subjectPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {t?.form?.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-teal-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white"
                  placeholder={t?.form?.messagePlaceholder}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 dark:bg-teal-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-teal-600 transition-colors font-semibold text-lg"
              >
                <Send size={20} />
                <span>{t?.form?.send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
