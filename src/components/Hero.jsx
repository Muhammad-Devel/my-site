import { Icon } from "@iconify/react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../shared/i18n";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="relative flex min-h-[90vh] w-full flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md dark:bg-black/40" />
      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white md:text-6xl">{t.hero.greeting} <span className="text-green-600 dark:text-green-400">Mukhammadjon</span></h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-700 dark:text-gray-300 md:text-xl"><span className="font-semibold text-green-600 dark:text-green-400">{t.hero.role}</span> — {t.hero.description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects" className="rounded-xl bg-green-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-green-600">{t.hero.projects}</a>
          <a href="#contact" className="rounded-xl border border-green-500 px-6 py-3 text-green-600 transition hover:bg-green-500 hover:text-white dark:text-green-400">{t.hero.contact}</a>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <a href="https://github.com/Muhammad-Devel" target="_blank" rel="noreferrer" aria-label={t.hero.github}><Icon icon="mdi:github" className="text-3xl text-gray-700 dark:text-gray-200" /></a>
          <a href="https://linkedin.com/in/muhammadjon-jumaboyev" target="_blank" rel="noreferrer" aria-label={t.hero.linkedin}><Icon icon="mdi:linkedin" className="text-3xl text-blue-600" /></a>
          <a href="mailto:jumaboyev2104@gmail.com" aria-label={t.hero.email}><Icon icon="mdi:email" className="text-3xl text-red-500" /></a>
        </div>
      </div>
      <ArrowDown className="relative z-10 mt-10 animate-bounce text-green-600 dark:text-green-400" size={28} aria-hidden="true" />
    </section>
  );
}
