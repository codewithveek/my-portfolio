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
      className="space-y-12 md:space-y-14"
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

      <motion.section
        id="projects"
        className="space-y-4"
        variants={slideUpVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-black uppercase">Selected Builds</h2>
        <p className="font-semibold text-sm md:text-base">
          Product and engineering work spanning fintech, e-commerce, and real
          estate use cases.
        </p>
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

              <div className="flex flex-wrap items-center gap-2 mb-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-[3px] border-border px-2 py-1 text-[11px] font-black uppercase brutal-wipe"
                  >
                    Live
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-[3px] border-border px-2 py-1 text-[11px] font-black uppercase brutal-wipe"
                  >
                    Github
                  </a>
                )}
                <p className="text-xs uppercase font-bold ml-auto">
                  {project.duration}
                </p>
              </div>

              <details className="border-[3px] border-border bg-background p-3">
                <summary className="cursor-pointer font-black uppercase text-xs">
                  Expand Details
                </summary>
                <p className="text-sm font-semibold mt-3 mb-3">
                  {project.fullDescription}
                </p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs font-bold uppercase">
                      - {highlight}
                    </li>
                  ))}
                </ul>
              </details>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        id="testimonials"
        className="space-y-4"
        variants={slideUpVariant}
        whileInView="show"
        initial="hidden"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className="text-3xl font-black uppercase">Testimonials</h2>
        <motion.div
          className="grid gap-4 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.article
            className="border-[3px] border-border bg-card p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
            variants={slideLeftVariant}
          >
            <p className="font-semibold text-sm md:text-base mb-4">
              &ldquo;Lucky is an exceptional developer with a very calm spirit.
              He not only developed a professional website for us, but also took
              the pain of training us to use it with and without his
              supervision. He delivered quality service with cost-effective
              advice.&rdquo;
            </p>
            <p className="font-black uppercase text-sm">
              — Dr. Oladapo David Ifeluwa, Lecturer / Statistician / Data
              Scientist
            </p>
          </motion.article>

          <motion.article
            className="border-[3px] border-border bg-card p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
            variants={slideRightVariant}
          >
            <p className="font-semibold text-sm md:text-base mb-4">
              &ldquo;Victory is a very talented developer who generously shares
              his knowledge with others. He is a very valued member of our
              community, willing and capable of helping others get unstuck. Any
              company that gets ahold of Victory should do its utmost to keep
              him.&rdquo;
            </p>
            <p className="font-black uppercase text-sm">
              — Per Borgen, CEO at Scrimba
            </p>
          </motion.article>
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
        <h2 className="text-3xl font-black uppercase mb-2">Let&apos;s Build</h2>
        <p className="font-semibold mb-4">
          Open to full-time roles, freelance projects, and open-source
          collaboration.
        </p>
        <motion.a
          href="mailto:hello@veek.me"
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
