"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("/");

  const links = [
    { href: "/", label: "home" },
    { href: "#about", label: "about" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
  ];

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

  return (
    <header className="w-full z-50 sticky top-0 bg-[#050505] border-b border-[#003b00] py-4">
      <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center">
        <Link
          href="/"
          className="text-[#00ff41] font-bold hover:text-white transition-colors"
        >
          veek@portfolio:~$
        </Link>

        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors ${
                activeSection === link.href
                  ? "text-[#00ff41] font-bold"
                  : "text-[#008f11]"
              }`}
            >
              [{link.label}]
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
