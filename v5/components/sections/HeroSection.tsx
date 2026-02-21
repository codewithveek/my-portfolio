"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText =
    "Hello, I'm Veek.\nFull Stack Developer.\nBuilding things for the web.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20">
      <div className="terminal-window">
        <div className="terminal-header">
          <span>bash - 80x24</span>
          <span>_ X</span>
        </div>
        <div className="font-mono text-lg md:text-2xl whitespace-pre-wrap">
          <span className="text-[#008f11]">veek@portfolio</span>:
          <span className="text-blue-500">~</span>$ ./hello.sh
          <br />
          <br />
          {text}
          <span className="cursor"></span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="mt-12 flex gap-6 text-sm"
      >
        <a
          href="#projects"
          className="hover:text-white hover:underline transition-all"
        >
          &gt; view_projects
        </a>
        <a
          href="#contact"
          className="hover:text-white hover:underline transition-all"
        >
          &gt; contact_me
        </a>
      </motion.div>
    </section>
  );
}
