import { Github, Mail, Send } from "lucide-react";
import { SiTelegram, SiGithub } from "react-icons/si";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! (demo mode)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md 
                 rounded-2xl mx-4 my-6 shadow-lg transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out for collaborations, opportunities, or just to
          say hello 👋
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/40 dark:bg-gray-900/40 p-6 rounded-xl 
                     shadow-md backdrop-blur-lg space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-700 bg-transparent text-gray-800 
                         dark:text-gray-100 placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-700 bg-transparent text-gray-800 
                         dark:text-gray-100 placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message..."
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
                       dark:border-gray-700 bg-transparent text-gray-800 
                       dark:text-gray-100 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="submit"
            className="flex items-center justify-center mx-auto gap-2 
                       bg-green-500 hover:bg-green-600 text-white 
                       px-6 py-3 rounded-lg transition-all"
          >
            <Send size={18} /> Send Message
          </button>
        </form>

        <div className="flex flex-col items-center justify-center mt-10 space-y-2">
          
          <a
            href="https://t.me/Muhammadjon_JA"
            className="flex items-center gap-2 text-green-600 dark:text-green-400 
                       hover:underline"
          >
             <SiTelegram size={18} />Muhammad J.A
          </a>
          <a
            href="https://github.com/Muhammad-Devel"
            className="flex items-center gap-2 text-green-600 dark:text-green-400 
                       hover:underline"
          >
            <SiGithub size={18} />Muhammad-Devel
          </a>
          <a
            href="mailto:jumaboyev2104@gmail.com"
            className="flex items-center gap-2 text-green-600 dark:text-green-400 
                       hover:underline"
          >
            <Mail size={18} />jumaboyev2104@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
