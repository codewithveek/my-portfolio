"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="mb-8 text-foreground">
        <span className="text-dim">veek@portfolio</span>:
        <span className="text-accent">~/about</span>$ cat profile.txt
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="terminal-window"
      >
        <div className="terminal-header">
          <span>profile.txt</span>
          <span>rw-r--r--</span>
        </div>

        <div className="space-y-6 text-sm md:text-base text-foreground">
          <p>
            <span className="text-dim"># NAME</span>
            <br />
            Veek - Full Stack Developer
          </p>

          <p>
            <span className="text-dim"># DESCRIPTION</span>
            <br />I am a passionate developer who loves building things for the
            web. I specialize in React, Next.js, Node.js, and modern web
            technologies. When I'm not coding, I'm probably exploring new tech
            or contributing to open source.
          </p>

          <p>
            <span className="text-dim"># SKILLS</span>
            <br />
            <span className="text-accent">Frontend:</span> React, Next.js,
            TypeScript, Tailwind CSS
            <br />
            <span className="text-accent">Backend:</span> Node.js, Express,
            PostgreSQL, MongoDB
            <br />
            <span className="text-accent">Tools:</span> Git, Docker, AWS, Vercel
          </p>

          <p>
            <span className="text-dim"># STATUS</span>
            <br />
            [OK] Ready for new opportunities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
