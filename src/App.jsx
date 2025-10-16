import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center 
      bg-gradient-to-br from-green-50 via-white to-green-100 
      dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 
      transition-colors duration-500 overflow-x-hidden"
    >
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* ABOUT SECTION */}
      <About />

      {/* SKILLS SECTION */}
      <SkillsSection />
      
      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
}
