import { Heart } from "lucide-react";
import { translations } from "../lib/translations.js";

const Footer = ({ language }) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
            {t.madeWith}{" "}
            <Heart size={18} className="text-red-500 fill-current" /> {t.by}{" "}
            Nguyễn Quang Quý
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
