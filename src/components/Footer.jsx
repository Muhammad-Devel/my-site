import { Icon } from "@iconify/react";
import { useLanguage } from "../shared/i18n";

export default function Footer() {
  const { t } = useLanguage();
  return <footer className="mt-20 w-full border-t border-white/10 bg-white/10 px-6 py-8 backdrop-blur-md dark:bg-gray-800/30"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"><div><h3 className="font-semibold text-gray-800 dark:text-gray-200">Mukhammadjon Jumaboyev</h3><p className="text-sm text-gray-600 dark:text-gray-400">{t.footer.role}</p></div><div className="flex gap-6"><a href="https://github.com/Muhammad-Devel" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon icon="mdi:github" className="text-2xl" /></a><a href="mailto:jumaboyev2104@gmail.com" aria-label={t.hero.email}><Icon icon="mdi:email" className="text-2xl text-red-500" /></a></div><a href="#hero" className="flex items-center gap-1 text-sm font-medium text-green-500"><Icon icon="mdi:arrow-up" />{t.footer.top}</a></div><p className="mt-6 border-t border-white/10 pt-4 text-center text-sm text-gray-500">© {new Date().getFullYear()} Mukhammadjon. {t.footer.rights}</p></footer>;
}
