import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' },
];

export function Footer() {
    return (
        <footer
            className="bg-black text-white text-center py-8"
            style={{
                borderTop: '2px solid var(--color-black)',
                minHeight: '100px',
            }}
        >
            <div className="container mx-auto px-6">
                <p className="text-sm mb-4">
                    © {new Date().getFullYear()} Your Name • Built with React & anime.js
                </p>

                <div className="flex justify-center items-center gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[var(--color-hover)]"
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
