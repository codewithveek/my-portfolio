"use client";

export default function Footer() {
  return (
    <footer className="w-full mt-16 border-t-[3px] border-border">
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="border-[3px] border-border bg-card p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] grid grid-cols-1 md:grid-cols-3 gap-3 text-sm font-bold uppercase">
          <div>Built loud. Built fast.</div>
          <div className="md:text-center">Veek Portfolio</div>
          <div className="md:text-right">&copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </footer>
  );
}
