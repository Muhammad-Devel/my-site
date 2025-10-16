import { Icon } from "@iconify/react";
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center h-[90vh] w-full px-6 mt-16"
      >
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/40 backdrop-blur-md"></div>

        {/* Hero content */}
        <div className="relative z-10 space-y-6">
           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Hi, I’m <span className="text-green-600 dark:text-green-400">Mukhammadjon</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          I’m a <span className="font-semibold text-green-600 dark:text-green-400">Full-Stack Developer</span> —  
          passionate about building fast, responsive, and scalable web applications  
          using <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>,  
          <span className="font-medium"> Node.js</span> & <span className="font-medium">Express</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-xl 
                       hover:bg-green-600 transition-all shadow-md"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-green-500 text-green-600 dark:text-green-400 
                       rounded-xl hover:bg-green-500 hover:text-white 
                       transition-all shadow-sm"
          >
            Contact Me
          </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Icon icon="mdi:github" className="text-3xl text-gray-700 dark:text-gray-200" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Icon icon="mdi:linkedin" className="text-3xl text-blue-600" />
            </a>
            <a
              href="mailto:jumaboyev2104@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <Icon icon="mdi:email" className="text-3xl text-red-500" />
            </a>
          </div>
        </div>

         <div className="flex justify-center mt-10 animate-bounce">
          <ArrowDown className="text-green-600 dark:text-green-400" size={28} />
        </div>

        {/* Background accent shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
      </section>
  );
}

export default Hero;
