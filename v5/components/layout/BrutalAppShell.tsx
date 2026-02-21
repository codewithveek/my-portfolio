"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

function BrutalLoader() {
  return (
    <div className="fixed inset-0 z-[200] bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-xl border-[4px] border-border bg-card p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
        <p className="text-xs md:text-sm uppercase font-black tracking-wide mb-3">
          Initializing...
        </p>

        <div className="border-[3px] border-border bg-background p-4 mb-4">
          <svg
            viewBox="0 0 360 170"
            role="img"
            aria-label="Animated loading visualization"
            className="w-full h-40"
          >
            <rect
              x="8"
              y="8"
              width="344"
              height="154"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />

            <rect x="24" y="26" width="80" height="20" fill="currentColor">
              <animate
                attributeName="x"
                values="24;250;24"
                dur="1.8s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="24"
              y="56"
              width="120"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <animate
                attributeName="width"
                values="40;260;40"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="24" y="90" width="24" height="24" fill="currentColor">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 36 102"
                to="360 36 102"
                dur="1s"
                repeatCount="indefinite"
              />
            </rect>

            <path
              d="M24 140 L90 112 L156 140 L222 112 L288 140 L336 120"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeDasharray="14 10"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-96"
                dur="1.1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        <div className="text-sm md:text-base font-black uppercase flex items-center justify-between gap-4">
          <span>Loading Projects, Experience & Testimonials</span>
          <span className="inline-block min-w-20 text-right">
            <span>PLEASE WAIT</span>
            <span className="inline-block w-6">...</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BrutalAppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <BrutalLoader />;
  }

  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl z-10 relative">
        {children}
      </main>
      <Footer />
    </>
  );
}
