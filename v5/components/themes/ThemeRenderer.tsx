"use client";

import { motion } from "framer-motion";
import BrutalAbout from "@/components/themes/brutal/BrutalAbout";
import BrutalContact from "@/components/themes/brutal/BrutalContact";
import BrutalHero from "@/components/themes/brutal/BrutalHero";
import BrutalProjects from "@/components/themes/brutal/BrutalProjects";
import BrutalTestimonials from "@/components/themes/brutal/BrutalTestimonials";
import { containerVariants } from "@/components/themes/brutal/motionVariants";

function BrutalTheme() {
  return (
    <motion.div
      className="space-y-12 md:space-y-14"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <BrutalHero />
      <BrutalAbout />
      <BrutalProjects />
      <BrutalTestimonials />
      <BrutalContact />
    </motion.div>
  );
}

export default function ThemeRenderer() {
  return <BrutalTheme />;
}
