"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "#about", label: "about" },
    { href: "#projects", label: "projects" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header className="w-full z-50 sticky top-0 bg-[#050505] border-b border-[#003b00] py-4">
      <div className="container mx-auto px-4 max-w-4xl flex justify-between items-center">
        <Link href="/" className="text-[#00ff41] font-bold hover:text-white transition-colors">
          veek@portfolio:~$
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors ${
                pathname === link.href ? "text-[#00ff41] font-bold" : "text-[#008f11]"
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

