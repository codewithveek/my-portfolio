"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const NAV_OFFSET = 96;

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + NAV_OFFSET;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [NAV_OFFSET]);

  const handleNavClick = (href: string) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const top =
        element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        borderBottom: "1px solid var(--line)",
        height: "var(--nav-height)",
        background: "rgba(5, 6, 11, 0.72)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <a
          href="#hero"
          className="serif-display text-2xl md:text-3xl tracking-wide"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          your name
        </a>

        <ul className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`
                  uppercase text-xs font-semibold tracking-[0.14em]
                  px-3 py-2 rounded-full border transition-all duration-200
                  ${
                    activeSection === link.href.substring(1)
                      ? "text-[var(--text)] border-[#596cae]"
                      : "text-[var(--text-muted)] border-[var(--line)]"
                  }
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute left-0 right-0"
          style={{
            top: "var(--nav-height)",
            borderTop: "1px solid var(--line)",
            background: "rgba(9, 11, 18, 0.98)",
          }}
        >
          <ul className="container mx-auto py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block uppercase text-xs font-semibold tracking-[0.14em] px-4 py-3 rounded-full border border-[var(--line)] text-[var(--text-muted)] hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
