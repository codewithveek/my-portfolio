"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const TOTAL_STACKING_SECTIONS = 4; // About, Projects, Skills, Contact

export default function Home() {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-to-content">
        Skip to Content
      </a>

      <Navigation />

      <main id="main-content" className="pt-[var(--nav-height)]">
        <HeroSection />

        <AboutSection index={0} totalSections={TOTAL_STACKING_SECTIONS} />
        <ProjectsSection index={1} totalSections={TOTAL_STACKING_SECTIONS} />
        <SkillsSection index={2} totalSections={TOTAL_STACKING_SECTIONS} />
        <ContactSection index={3} totalSections={TOTAL_STACKING_SECTIONS} />
      </main>

      <Footer />
    </div>
  );
}
