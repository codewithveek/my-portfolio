import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
];

export function Footer() {
  return (
    <footer
      className="text-[var(--text)]"
      style={{
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto py-9 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="eyebrow mb-1">Portfolio</p>
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Your Name • Crafted with Next.js
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[var(--line)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[#5869a8]"
              aria-label={link.label}
              title={link.label}
            >
              <link.icon size={24} strokeWidth={2} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
