"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const AppleThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative w-12 h-7 rounded-full transition-all duration-apple
        ${isDark ? 'bg-primary' : 'bg-neutral-300 dark:bg-neutral-700'}
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
      `}
    >
      <div
        className={`
          absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-neutral-100
          shadow transition-transform duration-apple
          ${isDark ? 'translate-x-5' : 'translate-x-0'}
        `}
      >
        {/* Sun icon when light mode */}
        <svg
          className={`absolute inset-0 m-auto w-3 h-3 text-amber-500 transition-opacity duration-apple ${isDark ? 'opacity-0' : 'opacity-100'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>

        {/* Moon icon when dark mode */}
        <svg
          className={`absolute inset-0 m-auto w-3 h-3 text-blue-300 transition-opacity duration-apple ${isDark ? 'opacity-100' : 'opacity-0'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293a8 8 0 01-11.506-11.506 1 1 0 111.414 1.414 6 6 0 108.486 8.486 1 1 0 011.414 1.414z" />
        </svg>
      </div>
    </button>
  );
};

export default AppleThemeToggle;
