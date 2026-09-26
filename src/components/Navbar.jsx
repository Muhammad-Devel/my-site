import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../shared/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const links = [["#hero", t.nav.home], ["#about", t.nav.about], ["#skills", t.nav.skills], ["#projects", t.nav.projects], ["#contact", t.nav.contact]];
  const navigation = links.map(([href, label]) => <li key={href}><a href={href} onClick={() => setIsOpen(false)} className="hover:text-green-500">{label}</a></li>);

  return (
    <nav className="fixed top-4 z-50 w-full px-4" aria-label="Primary navigation">
      <div className="container mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-3 shadow-xl backdrop-blur-md">
        <a href="#hero" className="text-lg font-bold text-gray-700 dark:text-gray-200">Mukhammad J.A</a>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <ul className="hidden items-center gap-4 text-lg font-semibold text-gray-700 dark:text-gray-200 md:flex">{navigation}</ul>
          <button type="button" className="text-gray-700 dark:text-gray-200 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen}>
            <span className="text-2xl" aria-hidden="true">☰</span>
          </button>
          {isOpen && <ul className="absolute right-4 top-16 space-y-3 rounded-2xl border border-white/50 bg-white/90 p-6 text-lg text-gray-700 shadow-xl dark:border-gray-700 dark:bg-gray-800/95 dark:text-gray-200 md:hidden">{navigation}</ul>}
        </div>
      </div>
    </nav>
  );
}
