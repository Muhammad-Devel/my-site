import { Mail, Send } from "lucide-react";
import { SiGithub, SiTelegram } from "react-icons/si";
import { useState } from "react";
import { useLanguage } from "../shared/i18n";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => { event.preventDefault(); setSent(true); setForm({ name: "", email: "", message: "" }); };
  return (
    <section id="contact" className="mx-4 my-6 rounded-2xl bg-white/30 px-6 py-16 shadow-lg backdrop-blur-md dark:bg-gray-800/40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-gray-100">{t.contact.title}</h2>
        <p className="mb-10 text-gray-600 dark:text-gray-300">{t.contact.intro}</p>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-white/40 p-6 shadow-md dark:bg-gray-900/40">
          <div className="flex flex-col gap-4 sm:flex-row">
            <input type="text" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.contact.name} aria-label={t.contact.name} required maxLength={80} className="flex-1 rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:ring-2 focus:ring-green-400 dark:border-gray-700 dark:text-gray-100" />
            <input type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t.contact.email} aria-label={t.contact.email} required maxLength={120} className="flex-1 rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:ring-2 focus:ring-green-400 dark:border-gray-700 dark:text-gray-100" />
          </div>
          <textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t.contact.message} aria-label={t.contact.message} rows="5" required maxLength={2000} className="w-full rounded-lg border border-gray-300 bg-transparent px-4 py-3 text-gray-800 focus:ring-2 focus:ring-green-400 dark:border-gray-700 dark:text-gray-100" />
          <button type="submit" className="mx-auto flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-white transition hover:bg-green-600"><Send size={18} />{t.contact.send}</button>
          {sent && <p role="status" className="text-sm text-green-700 dark:text-green-400">{t.contact.sent}</p>}
        </form>
        <div className="mt-10 flex flex-col items-center gap-2"><a href="https://t.me/Muhammadjon_JA" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-600 hover:underline"><SiTelegram size={18} />Muhammad J.A</a><a href="https://github.com/Muhammad-Devel" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-green-600 hover:underline"><SiGithub size={18} />Muhammad-Devel</a><a href="mailto:jumaboyev2104@gmail.com" className="flex items-center gap-2 text-green-600 hover:underline"><Mail size={18} />jumaboyev2104@gmail.com</a></div>
      </div>
    </section>
  );
}
