"use client";

import { useState } from "react";
import { useStackingEffect } from "@/hooks/useStackingEffect";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

interface ContactSectionProps {
  index: number;
  totalSections: number;
}

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername",
  },
];

export function ContactSection({ index, totalSections }: ContactSectionProps) {
  const { ref, style } = useStackingEffect({ index, totalSections });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage("Message captured. Wire an API route to make this live.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="container mx-auto"
      style={{
        ...style,
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="section-panel">
        <p className="kicker">Contact</p>
        <h2 className="section-title mb-10">
          Let&apos;s build
          <br />
          something useful.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div>
            <h3 className="text-2xl serif-display text-[var(--text)] mb-5">
              Reach out
            </h3>

            <p className="text-[var(--text-muted)] mb-6 max-w-md">
              I collaborate on product design and engineering work for startups,
              scale-ups, and internal tools.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg p-3 rounded-2xl transition-colors hover:bg-[#1b2337]"
                  style={{ border: "1px solid var(--line)" }}
                >
                  <link.icon size={24} strokeWidth={2} />
                  <div>
                    <div className="font-semibold text-[var(--text)]">
                      {link.label}
                    </div>
                    <div className="text-sm text-[var(--text-muted)]">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl serif-display text-[var(--text)] mb-6">
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em] text-[var(--text-muted)]"
                >
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
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em] text-[var(--text-muted)]"
                >
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
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold mb-2 uppercase tracking-[0.12em] text-[var(--text-muted)]"
                >
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

              <button type="submit" className="button-primary">
                <Send size={18} />
                Send Message
              </button>

              {statusMessage && (
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
