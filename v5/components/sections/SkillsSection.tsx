"use client";

import { useStackingEffect } from "@/hooks/useStackingEffect";
import { HoverExpandCard } from "@/components/interactive/HoverExpandCard";
import { skills } from "@/data/skills";

interface SkillsSectionProps {
  index: number;
  totalSections: number;
}

export function SkillsSection({ index, totalSections }: SkillsSectionProps) {
  const { ref, style } = useStackingEffect({ index, totalSections });

  return (
    <section
      id="skills"
      ref={ref}
      className="container mx-auto"
      style={{
        ...style,
        paddingBottom: "var(--section-padding)",
      }}
    >
      <div className="section-panel">
        <div className="section-heading">
          <h2 className="section-title">Capabilities</h2>
          <div className="section-rule" />
        </div>

        <p className="kicker">Tech stack and workflow strengths</p>

        <div className="space-y-10 md:space-y-12">
          {skills.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold serif-display mb-5 text-[var(--text)]">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-4 md:gap-5">
                {category.items.map((skill) => (
                  <HoverExpandCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
