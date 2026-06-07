"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <nav
        className={`w-full flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
          scrolled
            ? "shadow-lg bg-[var(--nav-bg-scrolled)] border-[var(--border)]"
            : "bg-[var(--nav-bg)] border-[var(--border-soft)]"
        }`}
      >
        <a
          href="#home"
          className="font-bold text-lg tracking-tight hover:scale-105 transition text-[var(--foreground)]"
        >
          Miroslav Nekhaev
        </a>
        <div className="hidden md:flex gap-8 text-sm">
          <a className="theme-nav-link" href="#home">
            Home
          </a>
          <a className="theme-nav-link" href="#tech">
            Tech Skills
          </a>
          <a className="theme-nav-link" href="#experience">
            Experience
          </a>
          <a className="theme-nav-link" href="#projects">
            Projects
          </a>
          <a className="theme-nav-link" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/Miroslav_Nekhaev_Resume.pdf"
            download
            className="hidden sm:inline-flex theme-btn-outline px-4 py-2 text-sm"
          >
            Resume
          </a>
          <ThemeToggle />
          <a href="#contact" className="theme-btn-primary px-4 py-2 text-sm">
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
