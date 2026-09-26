import { Code2, Server, Database, Wrench } from "lucide-react";
import { useLanguage } from "../shared/i18n";

export default function SkillsSection() {
  const { t } = useLanguage();
  const skills = [[Code2, t.skills.frontend], [Server, t.skills.backend], [Database, t.skills.database], [Wrench, t.skills.tools]];
  return (
    <section id="skills" className="mx-4 my-6 rounded-2xl bg-white/30 py-16 shadow-lg backdrop-blur-md dark:bg-gray-800/40">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">{t.skills.title}</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-300">{t.skills.intro}</p>
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">{skills.map(([Icon, [title, desc]]) => <article key={title} className="rounded-xl border border-white/20 bg-white/40 p-6 transition-transform hover:scale-105 dark:bg-gray-900/40"><Icon className="mx-auto mb-3 text-green-500" size={40} /><h3 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3><p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p></article>)}</div>
      </div>
    </section>
  );
}
