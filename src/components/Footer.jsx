import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer
      className="w-full mt-20 py-8 px-6 
      bg-white/10 dark:bg-gray-800/30 
      backdrop-blur-md border-t border-white/10 dark:border-gray-700/30"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Mukhammadjon Jumaboyev
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Frontend Developer & UI Designer
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:github" className="text-2xl text-gray-700 dark:text-gray-200" />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:linkedin" className="text-2xl text-blue-600" />
          </a>
          <a
            href="mailto:jumaboyev2104@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <Icon icon="mdi:email" className="text-2xl text-red-500" />
          </a>
        </div>

        {/* BACK TO TOP */}
        <a
          href="#hero"
          className="flex items-center gap-1 text-green-500 hover:text-green-600 transition"
        >
          <Icon icon="mdi:arrow-up" className="text-xl" />
          <span className="text-sm font-medium">Back to top</span>
        </a>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="mt-6 text-center text-gray-500 text-sm border-t border-white/10 dark:border-gray-700/30 pt-4">
        © {new Date().getFullYear()} Mukhammadjon. All rights reserved.
      </div>
    </footer>
  );
}
