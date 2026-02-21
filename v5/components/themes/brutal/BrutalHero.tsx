import { motion } from "framer-motion";
import { slideUpVariant } from "./motionVariants";

export default function BrutalHero() {
  return (
    <motion.section
      id="home"
      className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      variants={slideUpVariant}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, amount: 0.3 }}
    >
      <p className="text-sm uppercase font-bold mb-2">
        Lucky Victory Success · Full-Stack Engineer
      </p>
      <h1 className="text-4xl md:text-6xl font-black uppercase leading-none">
        I Help Startups Move Fast
        <br />
        Without Breaking Things.
      </h1>
      <p className="mt-4 text-sm md:text-base font-semibold max-w-3xl">
        I turn complex product requirements into scalable, production-ready
        systems from day one — with 3+ years of full-stack execution across
        fintech, real estate, and developer tooling.
      </p>
    </motion.section>
  );
}
