import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // Sahifa yuklanganda theme-ni localStorage-dan tekshirish
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleDarkMode = () => {
    if (!dark) {
      setDark(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={handleDarkMode}
      className="text-lg font-medium transition-colors duration-300 mr-5"
    >
      {dark ? <Icon icon="ix:moon-filled" width="24" height="24" className="-rotate-45 text-gray-200 hover:text-gray-500" /> : <Icon icon="ix:sun-filled" width="24" height="24" className="text-gray-700 hover:text-gray-400" />}
    </button>
  );
}
