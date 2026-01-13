'use client';

import { useState } from 'react';
import { useStackingEffect } from '@/hooks/useStackingEffect';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

interface ContactSectionProps {
    index: number;
    totalSections: number;
}

const contactLinks = [
    { icon: Mail, label: 'Email', value: 'your@email.com', href: 'mailto:your@email.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/yourusername' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourusername', href: 'https://linkedin.com/in/yourusername' },
    { icon: Twitter, label: 'Twitter', value: '@yourusername', href: 'https://twitter.com/yourusername' },
];

export function ContactSection({ index, totalSections }: ContactSectionProps) {
    const { ref, style } = useStackingEffect({ index, totalSections });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log('Form submitted:', formData);
        alert('Form submission not implemented yet. Check console for data.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="bg-white"
            style={{
                ...style,
                border: '2px solid var(--color-black)',
                padding: 'var(--section-padding) var(--gutter)',
                marginBottom: 0, // Last section, no bottom margin
            }}
        >
            <div className="container mx-auto">
                {/* Large Heading */}
                <h2
                    className="text-6xl md:text-7xl font-bold uppercase mb-12"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        lineHeight: 'var(--leading-tight)',
                    }}
                >
                    Let's Work
                    <br />
                    Together
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Links Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                        <div className="space-y-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-lg hover:bg-[var(--color-hover)] p-3 transition-colors"
                                    style={{ border: '1px solid transparent' }}
                                >
                                    <link.icon size={24} strokeWidth={2} />
                                    <div>
                                        <div className="font-semibold">{link.label}</div>
                                        <div className="text-sm text-gray-600">{link.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold mb-2 uppercase">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold mb-2 uppercase">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold mb-2 uppercase">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-brutalist inline-flex items-center gap-3"
                            >
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
