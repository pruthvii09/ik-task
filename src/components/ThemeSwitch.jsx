import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode); // Toggle dark mode class on the root element
  };

  return (
    <div
      onClick={toggleDarkMode}
      className="p-2 bg-white dark:bg-[#151A22] border border-gray-100 dark:border-zinc-700 shadow-lg rounded-full focus:outline-none fixed bottom-8 right-8"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-500" /> // Icon for light mode
      ) : (
        <Moon className="w-6 h-6 text-gray-800" /> // Icon for dark mode
      )}
    </div>
  );
};

export default ThemeSwitch;
