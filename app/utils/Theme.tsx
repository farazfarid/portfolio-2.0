"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Button = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="bg-transparent hover:scale-125 transition-all duration-100 p-2 text-2xl md:text-4xl"
    >
      {currentTheme === "dark" ? (
        <SunIcon className="w-8 h-8 text-yellow-400" />
      ) : (
        <MoonIcon className="w-8 h-8 text-slate-300" />
      )}
    </button>
  );
};

export default Button;
