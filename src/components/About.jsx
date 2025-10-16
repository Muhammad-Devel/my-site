import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* LEFT: PROFILE IMAGE */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 flex-shrink-0">
        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4" // <-- bu yerga o'z surat linkingni qo'y
          alt="Mukhammadjon"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT: TEXT CONTENT */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi! I'm{" "}
          <span className="text-green-600 dark:text-green-400 font-semibold">
            Mukhammadjon Jumaboyev
          </span>
          , a passionate{" "}
          <span className="font-medium">Full Stack Developer</span> who enjoys
          building modern, efficient, and scalable web applications using{" "}
          <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">Node.js</span>, and{" "}
          <span className="font-semibold">Express.js</span>.
        </p>

        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          I love combining clean frontend design with powerful backend logic to
          create seamless user experiences. I’m constantly learning new
          technologies and improving my skills to deliver better, faster, and
          more reliable digital solutions.
        </p>

        {/* SKILLS SECTION */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
          {[
            { icon: "mdi:react", label: "React.js" },
            { icon: "mdi:language-javascript", label: "JavaScript" },
            { icon: "mdi:tailwind", label: "Tailwind CSS" },
            { icon: "mdi:nodejs", label: "Node.js" },
            { icon: "simple-icons:express", label: "Express.js" },
            { icon: "mdi:mongodb", label: "MongoDB" },
            { icon: "mdi:git", label: "Git & GitHub" },
            { icon: "mdi:cloud-outline", label: "REST APIs" },
          ].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 dark:bg-gray-800/40 
              border border-white/10 dark:border-gray-700/30 text-gray-700 dark:text-gray-200 backdrop-blur-sm"
            >
              <Icon icon={skill.icon} className="text-lg text-green-500" />
              <span className="text-sm font-medium">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
