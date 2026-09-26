import { Icon } from "@iconify/react";
import { useLanguage } from "../shared/i18n";

export default function About() {
  const { t } = useLanguage();
  const skills = [["mdi:react", "React.js"], ["mdi:language-javascript", "JavaScript"], ["mdi:tailwind", "Tailwind CSS"], ["mdi:nodejs", "Node.js"], ["simple-icons:express", "Express.js"], ["mdi:mongodb", "MongoDB"], ["mdi:git", "Git & GitHub"], ["mdi:cloud-outline", "REST APIs"]];
  return (
    <section id="about" className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row">
      <img src="https://github.com/Muhammad-Devel.png?size=512" alt="Mukhammadjon Jumaboyev" className="h-48 w-48 flex-shrink-0 rounded-2xl object-cover shadow-lg md:h-64 md:w-64" loading="lazy" />
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{t.about.title}</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">{t.about.first}</p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-400">{t.about.second}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">{skills.map(([icon, label]) => <div key={label} className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-gray-700 backdrop-blur-sm dark:text-gray-200"><Icon icon={icon} className="text-lg text-green-500" /><span className="text-sm font-medium">{label}</span></div>)}</div>
      </div>
    </section>
  );
}
