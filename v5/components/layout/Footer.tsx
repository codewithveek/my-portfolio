"use client";

import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  if (theme === "minimal") {
    return (
      <footer className="w-full mt-16 border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-sm text-dim">
          <p>Designed and built by Veek</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    );
  }

  if (theme === "brutal") {
    return (
      <footer className="w-full mt-16 border-t-[3px] border-border">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <div className="border-[3px] border-border bg-card p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-3 gap-3 text-sm font-bold uppercase">
            <div>Built loud. Built fast.</div>
            <div className="md:text-center">Veek Portfolio</div>
            <div className="md:text-right">
              &copy; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full mt-16 border-t border-border">
      <div className="container mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-dim uppercase tracking-[0.2em]">Status</div>
          <div className="text-foreground">Node stable</div>
        </div>
        <div>
          <div className="text-dim uppercase tracking-[0.2em]">Owner</div>
          <div className="text-foreground">Veek</div>
        </div>
        <div className="md:text-right">
          <div className="text-dim uppercase tracking-[0.2em]">Timestamp</div>
          <div className="text-foreground">{new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
