"use client";

import { useStackingEffect } from "@/hooks/useStackingEffect";
import { motion } from "framer-motion";

interface AboutSectionProps {
  index: number;
  totalSections: number;
}

export function AboutSection({ index, totalSections }: AboutSectionProps) {
  const { ref, style } = useStackingEffect({ index, totalSections });

  return (
    <section
      id="about"
      ref={ref}
      className="container mx-auto"
      style={{
        ...style,
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="section-panel">
        <div className="section-heading">
          <h2 className="section-title">About me</h2>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div
            className="md:col-span-4 p-5 rounded-2xl"
            style={{ border: "1px solid var(--line)", background: "#131a2a" }}
          >
            <div className="aspect-[4/5] rounded-xl mb-4 bg-[linear-gradient(145deg,#2a3558,#131a2a)] border border-[#3a4568]" />
            <p className="eyebrow mb-2">Designer • Builder • Collaborator</p>
            <p className="text-[var(--text)] text-base leading-relaxed">
              Product engineer with 6+ years turning ambiguity into structured,
              measurable experiences.
            </p>
          </div>

          <div className="md:col-span-8">
            <p className="kicker">Perspective</p>
            <h3 className="text-[clamp(30px,5.5vw,52px)] serif-display text-[var(--text)] leading-[1.05] mb-6">
              I design for behavior, constraints, and long-term maintainability.
            </h3>

            <div className="space-y-5 text-[18px] leading-relaxed text-[var(--text-muted)]">
              <p>
                My work sits at the intersection of product strategy, UX, and
                implementation. I focus on simplifying complex workflows,
                accelerating team velocity, and creating systems that scale.
              </p>
              <p>
                I care deeply about the details that make products feel clear:
                hierarchy, language, motion, and feedback loops.
              </p>
            </div>

            <motion.div
              className="mt-7 flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                "Product Design",
                "Design Systems",
                "React + Next.js",
                "TypeScript",
                "Experimentation",
              ].map((item) => (
                <span key={item} className="ghost-chip">
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
