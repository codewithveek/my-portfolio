"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const links = [
  { href: "/", label: "home" },
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("/");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => link.href.replace("#", ""))
        .filter((id) => id !== "/");

      let current = "/";

      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActiveSection("#contact");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = `#${section}`;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeOptions = [
    { value: "minimal" as const, label: "Style 1" },
    { value: "brutal" as const, label: "Style 2" },
    { value: "cyberpunk" as const, label: "Style 6" },
  ];

  const navLinks = (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`transition-opacity ${
            activeSection === link.href
              ? "text-foreground font-bold"
              : "text-dim"
          } hover:opacity-80`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  if (theme === "minimal") {
    return (
      <header className="w-full z-50 sticky top-0 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-semibold text-foreground tracking-tight"
          >
            Veek
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks}
          </nav>

          <div className="flex items-center gap-2">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`px-3 py-1 text-xs border border-border rounded-sm ${
                  theme === option.value
                    ? "bg-foreground text-background"
                    : "text-dim"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </header>
    );
  }

  if (theme === "brutal") {
    return (
      <header className="w-full z-50 sticky top-0 border-b-[3px] border-border bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-3">
          <div className="border-[3px] border-border bg-card p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-2xl font-black uppercase tracking-wide">
              VEEK DEV PORTFOLIO
            </div>

            <nav className="flex flex-wrap items-center gap-4 text-sm font-bold uppercase">
              {navLinks}
            </nav>

            <div className="flex items-center gap-2">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTheme(option.value)}
                  className={`px-3 py-1 text-xs font-bold uppercase border-[3px] border-border ${
                    theme === option.value
                      ? "bg-foreground text-background"
                      : "bg-background text-foreground"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full z-50 sticky top-0 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto max-w-6xl px-4 py-4 grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div className="text-sm uppercase tracking-[0.25em] text-dim">
          Neon Grid / Profile Node
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm uppercase">
          {navLinks}
        </nav>

        <div className="flex items-center gap-2 justify-start md:justify-end">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setTheme(option.value)}
              className={`px-3 py-1 text-xs border border-border uppercase ${
                theme === option.value
                  ? "text-background bg-foreground"
                  : "text-foreground"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
