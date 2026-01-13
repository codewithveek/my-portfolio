'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const TOTAL_STACKING_SECTIONS = 4; // About, Projects, Skills, Contact

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to Content Link (Accessibility) */}
      <a
        href="#main-content"
        className="skip-to-content"
      >
        Skip to Content
      </a>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - No stacking */}
        <HeroSection />

        {/* Stacking Sections */}
        <AboutSection index={0} totalSections={TOTAL_STACKING_SECTIONS} />
        <ProjectsSection index={1} totalSections={TOTAL_STACKING_SECTIONS} />
        <SkillsSection index={2} totalSections={TOTAL_STACKING_SECTIONS} />
        <ContactSection index={3} totalSections={TOTAL_STACKING_SECTIONS} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

