import { useLanguage } from "../shared/i18n";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  return (
    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
      aria-label="Language"
      className="rounded-lg border border-white/20 bg-white/20 px-2 py-1 text-sm text-gray-700 dark:bg-gray-800/60 dark:text-gray-200"
    >
      <option value="en">EN</option>
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
    </select>
  );
}
