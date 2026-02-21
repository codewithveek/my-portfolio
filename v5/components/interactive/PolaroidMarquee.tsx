"use client";

import { motion } from "framer-motion";
import { useMemo, useState, type ReactNode } from "react";

interface PolaroidItem {
  id: number;
  bg: string;
  caption: string;
  rotation: number;
  translateY: number;
  content: ReactNode;
}

const cardData: PolaroidItem[] = [
  {
    id: 1,
    bg: "#111111",
    caption: "Design books and podcasts keep my thinking sharp.",
    rotation: -6,
    translateY: -12,
    content: (
      <div className="relative w-full h-full flex items-end p-4 border border-white/10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        <span className="text-white font-light text-2xl leading-tight z-10">
          Design
          <br />
          Better
        </span>
      </div>
    ),
  },
  {
    id: 2,
    bg: "#1a1a1a",
    caption: "Featured projects from studios, products, and side work.",
    rotation: 4,
    translateY: 12,
    content: (
      <div className="w-full h-full p-3 border border-white/10 rounded-lg">
        <div className="h-8 bg-white/5 mb-2 rounded" />
        <div className="bg-white/5 h-[126px] p-2 flex flex-col gap-2 rounded">
          {[82, 94, 76, 66].map((width, idx) => (
            <div
              key={idx}
              className="h-1 bg-white/20 rounded-full"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    bg: "#0a0a0a",
    caption: "Where discipline met creativity and shaped my process.",
    rotation: -4,
    translateY: 4,
    content: (
      <div className="w-full h-full p-4 flex items-center text-white font-light text-2xl leading-tight border border-white/10 rounded-lg">
        BRUNEL
        <br />
        DESIGN
        <br />
        SCHOOL
      </div>
    ),
  },
  {
    id: 4,
    bg: "#222222",
    caption: "Learning from community and live product conversations.",
    rotation: 5,
    translateY: 14,
    content: (
      <div className="w-full h-full p-2 border border-white/10 rounded-lg">
        <div className="h-[128px] rounded bg-white/5 grid grid-cols-3 gap-1 p-1 mb-2">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div key={idx} className="bg-white/10 rounded-sm" />
          ))}
        </div>
        <div className="h-2 bg-white/20 rounded-full" />
      </div>
    ),
  },
  {
    id: 5,
    bg: "#111111",
    caption: "From startups to enterprise, shipping outcomes at scale.",
    rotation: 7,
    translateY: -6,
    content: (
      <div className="w-full h-full p-3 grid grid-cols-3 gap-2 items-center border border-white/10 rounded-lg">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="aspect-square rounded-full bg-white/10" />
        ))}
      </div>
    ),
  },
];

export function PolaroidMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedCards = useMemo(() => {
    return [...cardData, ...cardData, ...cardData];
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-12 md:py-20 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-6 md:gap-10 w-max"
        animate={{
          x: isHovered ? "-10%" : "-33.33%",
        }}
        transition={{
          duration: isHovered ? 40 : 20,
          ease: "linear",
          repeat: Infinity,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedCards.map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] group cursor-pointer"
            style={{
              rotate: card.rotation,
              y: card.translateY,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              y: 0,
              zIndex: 20,
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[var(--surface)] p-3 md:p-4 rounded-xl shadow-2xl border border-[var(--line)]">
              <div
                className="w-full aspect-square mb-4 rounded-lg overflow-hidden"
                style={{ background: card.bg }}
              >
                {card.content}
              </div>
              <p className="font-mono text-[10px] md:text-xs text-[var(--text-muted)] leading-relaxed">
                {card.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
