"use client";
import MoonIcon from "@/icons/MoonIcon";
import SunIcon from "@/icons/SunIcon";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(prev => (prev === "light" ? "dark" : "light"))
      }
      className="bg-background text-text-primary p-3 cursor-pointer rounded-full"
    >
      {theme === "light"
        ? <MoonIcon/>
        : <SunIcon/>}
    </button>
  );
}
