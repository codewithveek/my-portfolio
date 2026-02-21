import { motion } from "framer-motion";
import { slideLeftVariant, slideRightVariant } from "./motionVariants";

export default function BrutalAbout() {
  return (
    <section id="about" className="grid md:grid-cols-2 gap-4">
      <motion.div
        className="border-[3px] border-border bg-card p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
        variants={slideLeftVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className="text-2xl font-black uppercase mb-3">About</h2>
        <p className="font-semibold">
          Software engineer with fintech startup experience, a strong product
          and execution mindset. I focus on performance, developer experience,
          and shipping customer-facing features fast while keeping systems
          stable. I&apos;ve also built real estate products and SDKs that
          improve developer velocity and consistency across teams.
        </p>
      </motion.div>

      <motion.div
        className="border-[3px] border-border bg-foreground text-background p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
        variants={slideRightVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className="text-2xl font-black uppercase mb-3">Proof</h2>
        <ul className="font-bold uppercase space-y-2 text-sm md:text-base">
          <li>6x Hackathon Winner</li>
          <li>Scrimba Community Manager (2021 — Present)</li>
          <li>Reduced One Startup MVP Timeline From 13 To 4 Months</li>
          <li>Built Sdk Workflows To Improve Developer Experience</li>
        </ul>
      </motion.div>
    </section>
  );
}
