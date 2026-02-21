"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.replace("#", ""));
    const visibleRatios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          visibleRatios.set(
            id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        }

        let bestId = sectionIds[0];
        let bestRatio = 0;

        for (const id of sectionIds) {
          const ratio = visibleRatios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        setActiveSection(`#${bestId}`);
      },
      {
        root: null,
        rootMargin: "-96px 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="w-full z-50 sticky top-0 border-b-[3px] border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-3">
        <div className=" md:flex items-center justify-between border-[3px] border-border bg-card p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-xl md:text-2xl font-black uppercase tracking-wide brutal-wipe px-1"
            >
              VEEK
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="md:hidden border-[3px] border-border px-3 py-1 text-xs font-black uppercase brutal-wipe"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>

          <nav className="hidden md:flex flex-wrap items-center gap-4 text-sm font-bold uppercase mt-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-opacity brutal-wipe py-1 px-2 ${
                  activeSection === link.href
                    ? "text-foreground font-bold"
                    : "text-dim"
                } hover:opacity-80`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {mobileOpen && (
            <nav
              id="mobile-nav"
              className="md:hidden mt-3 border-t-[3px] border-border pt-3 grid gap-2 text-sm font-bold uppercase"
            >
              {links.map((link) => (
                <Link
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`transition-opacity brutal-wipe py-2 px-2 ${
                    activeSection === link.href
                      ? "text-foreground font-bold"
                      : "text-dim"
                  } hover:opacity-80`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
