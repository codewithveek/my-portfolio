'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map((link) => link.href.substring(1));
            const scrollPosition = window.scrollY + 100;

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

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-[100] bg-white"
            style={{
                borderBottom: '2px solid var(--color-black)',
                height: '80px',
            }}
        >
            <div className="container mx-auto h-full flex items-center justify-between px-6">
                {/* Logo */}
                <a
                    href="#hero"
                    className="text-2xl font-bold uppercase tracking-tight"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    Portfolio
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className={`
                  uppercase text-sm font-semibold tracking-wider
                  px-4 py-2 transition-all duration-200
                  hover:bg-[var(--color-hover)] hover:text-black
                  ${activeSection === link.href.substring(1)
                                        ? 'underline decoration-[3px] underline-offset-4'
                                        : ''
                                    }
                `}
                                style={{ letterSpacing: '0.1em' }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
                    className="md:hidden absolute top-[80px] left-0 right-0 bg-black"
                    style={{ border: '2px solid var(--color-black)' }}
                >
                    <ul className="flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.href} style={{ borderBottom: '1px solid white' }}>
                                <a
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(link.href);
                                    }}
                                    className="block uppercase text-sm font-semibold tracking-wider px-6 py-4 text-white hover:bg-[var(--color-hover)] hover:text-black transition-colors"
                                    style={{ letterSpacing: '0.1em' }}
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
