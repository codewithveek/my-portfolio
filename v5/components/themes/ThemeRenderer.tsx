"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

const brutalTransition = {
  type: "spring" as const,
  stiffness: 230,
  damping: 22,
  mass: 0.7,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 48, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: brutalTransition },
};

const slideLeftVariant = {
  hidden: { opacity: 0, x: -56, rotate: -0.8 },
  show: { opacity: 1, x: 0, rotate: 0, transition: brutalTransition },
};

const slideRightVariant = {
  hidden: { opacity: 0, x: 56, rotate: 0.8 },
  show: { opacity: 1, x: 0, rotate: 0, transition: brutalTransition },
};

function BrutalTheme() {
  const featured = projects.slice(0, 3);

  return (
    <motion.div
      className="space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.section
        id="home"
        className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
        variants={slideUpVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-sm uppercase font-bold mb-2">
          Style 2 · Neo Brutalist
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-none">
          I ship products.
          <br />I break bottlenecks.
        </h1>
      </motion.section>

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
            Full stack engineer with a bias for execution, measurable impact,
            and strong DX.
          </p>
        </motion.div>
        <motion.div
          className="border-[3px] border-border bg-foreground text-background p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
          variants={slideRightVariant}
          whileInView="show"
          initial="hidden"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-2xl font-black uppercase mb-3">Core Stack</h2>
          <p className="font-bold uppercase">
            Next.js · React · TypeScript · Node.js · PostgreSQL
          </p>
        </motion.div>
      </section>

      <motion.section
        id="projects"
        className="space-y-4"
        variants={slideUpVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-black uppercase">Projects</h2>
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featured.map((project) => (
            <motion.article
              key={project.id}
              className="border-[3px] border-border bg-card p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
              variants={slideUpVariant}
              whileHover={{ x: 3, y: -3 }}
              transition={{ duration: 0.14 }}
            >
              <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden border-[3px] border-border bg-background">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-black uppercase mb-2">{project.title}</h3>
              <p className="text-sm font-semibold mb-4">{project.shortDesc}</p>
              <p className="text-xs uppercase font-bold">{project.duration}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="contact"
        className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
        variants={slideUpVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.35 }}
      >
        <h2 className="text-3xl font-black uppercase mb-2">Hire Me</h2>
        <p className="font-semibold mb-4">
          Need product velocity? Let’s build.
        </p>
        <motion.a
          href="mailto:hello@veek.dev"
          className="inline-block border-[3px] border-border px-4 py-2 font-black uppercase hover:translate-x-[2px] hover:-translate-y-[2px] transition-transform brutal-wipe"
          whileHover={{ x: 3, y: -3 }}
          whileTap={{ x: 1, y: -1 }}
          transition={{ duration: 0.12 }}
        >
          Contact Now
        </motion.a>
      </motion.section>
    </motion.div>
  );
}

export default function ThemeRenderer() {
  return <BrutalTheme />;
}
