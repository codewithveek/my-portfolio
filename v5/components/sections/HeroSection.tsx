"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const offset = 96;
    const element = document.getElementById(id);
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      scrollTo("projects");
    }
  };

  return (
    <motion.section
      id="hero"
      className="relative min-h-[calc(100vh-var(--nav-height))] flex items-center"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 8% 20%, rgba(98, 117, 190, 0.18), transparent 30%),
            radial-gradient(circle at 85% 80%, rgba(86, 107, 191, 0.14), transparent 34%)
          `,
        }}
      />

      <div className="container mx-auto relative z-10 py-14 md:py-20">
        <div className="max-w-6xl">
          <p className="kicker">Product Engineer • Portfolio 2026</p>

          <h1 className="serif-display text-[clamp(54px,11vw,132px)] leading-[0.85] text-[var(--accent)] tracking-[0.01em] mb-7">
            Designing systems,
            <br />
            shipping products.
          </h1>

          <p className="max-w-3xl text-[clamp(18px,2.5vw,27px)] text-[var(--text)]/90 mb-8">
            I turn complex product challenges into clear interfaces and reliable
            software that improve outcomes for teams and users.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <button onClick={handleScrollToProjects} className="button-primary">
              View selected work
              <ArrowDownRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="button-secondary"
            >
              Let&apos;s collaborate
            </button>
            <span className="ghost-chip">
              <Sparkles size={14} />
              Open to product-focused freelance work
            </span>
          </div>

          <div className="tilt-track">
            {[
              "Design systems that scale",
              "Fast experiments for growth",
              "UX for complex SaaS flows",
              "Reliable front-end architecture",
              "Research-informed decisions",
            ].map((line, index) => (
              <motion.article
                key={line}
                className="tilt-card"
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: index % 2 === 0 ? -4 : 4,
                }}
                animate={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -4 : 4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <div className="tilt-card-media" />
                <p className="serif-display text-[24px] leading-[1.15] text-[var(--text)]">
                  {line}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
