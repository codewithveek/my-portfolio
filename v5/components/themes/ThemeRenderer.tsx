"use client";

import { useMemo } from "react";
import { projects } from "@/data/projects";
import { useTheme } from "@/components/ThemeProvider";

function MinimalTheme() {
  const featured = projects.slice(0, 4);

  return (
    <div className="space-y-20">
      <section id="home" className="grid gap-8 md:grid-cols-2 items-start py-8">
        <div className="space-y-4">
          <p className="text-dim uppercase tracking-[0.2em] text-sm">
            Style 1 · Minimal
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Veek builds useful products with clean engineering.
          </h1>
          <p className="text-dim max-w-md">
            Full stack developer focused on fast interfaces, reliable systems,
            and thoughtful UX.
          </p>
        </div>
        <div id="about" className="border border-border rounded-md p-6 bg-card">
          <h2 className="text-xl font-medium mb-3">About</h2>
          <p className="text-dim">
            I design and build web applications with React, Next.js, and
            Node.js. I value maintainability, performance, and user clarity over
            complexity.
          </p>
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold">Selected projects</h2>
          <span className="text-sm text-dim">{featured.length} items</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <article
              key={project.id}
              className="border border-border rounded-md p-4 bg-card space-y-3"
            >
              <h3 className="font-medium">{project.title}</h3>
              <p className="text-sm text-dim">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 border border-border rounded-sm text-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border pt-8 space-y-2">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-dim">
          Open to product engineering roles and freelance builds.
        </p>
        <a
          href="mailto:hello@veek.dev"
          className="inline-block border border-border rounded-sm px-4 py-2 hover:opacity-80"
        >
          hello@veek.dev
        </a>
      </section>
    </div>
  );
}

function BrutalTheme() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-10">
      <section
        id="home"
        className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      >
        <p className="text-sm uppercase font-bold mb-2">
          Style 2 · Neo Brutalist
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-none">
          I ship products.
          <br />I break bottlenecks.
        </h1>
      </section>

      <section id="about" className="grid md:grid-cols-2 gap-4">
        <div className="border-[3px] border-border bg-card p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black uppercase mb-3">About</h2>
          <p className="font-semibold">
            Full stack engineer with a bias for execution, measurable impact,
            and strong DX.
          </p>
        </div>
        <div className="border-[3px] border-border bg-foreground text-background p-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-2xl font-black uppercase mb-3">Core Stack</h2>
          <p className="font-bold uppercase">
            Next.js · React · TypeScript · Node.js · PostgreSQL
          </p>
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <h2 className="text-3xl font-black uppercase">Projects</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.id}
              className="border-[3px] border-border bg-card p-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
            >
              <h3 className="font-black uppercase mb-2">{project.title}</h3>
              <p className="text-sm font-semibold mb-4">{project.shortDesc}</p>
              <p className="text-xs uppercase font-bold">{project.duration}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="border-[3px] border-border bg-card p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)]"
      >
        <h2 className="text-3xl font-black uppercase mb-2">Hire Me</h2>
        <p className="font-semibold mb-4">
          Need product velocity? Let’s build.
        </p>
        <a
          href="mailto:hello@veek.dev"
          className="inline-block border-[3px] border-border px-4 py-2 font-black uppercase hover:translate-x-[2px] hover:-translate-y-[2px] transition-transform brutal-wipe"
        >
          Contact Now
        </a>
      </section>
    </div>
  );
}

function CyberpunkTheme() {
  const featured = useMemo(() => projects.slice(0, 5), []);

  return (
    <div className="space-y-8">
      <section id="home" className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        <div className="terminal-window">
          <p className="text-dim uppercase tracking-[0.2em] text-xs mb-3">
            Style 6 · Cyberpunk
          </p>
          <h1 className="text-3xl md:text-5xl leading-tight">
            Neon systems.
            <br />
            Human-centered products.
          </h1>
          <p className="mt-4 text-dim max-w-lg">
            I architect and ship high-performance digital products with modern
            web stacks and pragmatic system design.
          </p>
        </div>
        <aside id="about" className="terminal-window space-y-3">
          <h2 className="text-xl uppercase">Profile</h2>
          <p className="text-sm text-dim">Role: Full Stack Developer</p>
          <p className="text-sm text-dim">
            Focus: Product engineering and platform reliability
          </p>
          <p className="text-sm text-dim">Region: Remote / Hybrid</p>
        </aside>
      </section>

      <section id="projects" className="terminal-window space-y-4">
        <div className="terminal-header">
          <span>project_matrix</span>
          <span>{featured.length} nodes</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {featured.map((project) => (
            <article key={project.id} className="border border-border p-3">
              <h3 className="uppercase mb-2">{project.title}</h3>
              <p className="text-sm text-dim mb-3">{project.shortDesc}</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-border px-2 py-1 text-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="terminal-window">
        <div className="terminal-header">
          <span>transmission_channel</span>
          <span>open</span>
        </div>
        <p className="text-dim mb-4">
          Initialize a connection and send your project brief.
        </p>
        <a
          href="mailto:hello@veek.dev"
          className="inline-block border border-border px-4 py-2 uppercase hover:opacity-80"
        >
          transmit: hello@veek.dev
        </a>
      </section>
    </div>
  );
}

export default function ThemeRenderer() {
  const { theme } = useTheme();

  if (theme === "minimal") {
    return <MinimalTheme />;
  }

  if (theme === "brutal") {
    return <BrutalTheme />;
  }

  return <CyberpunkTheme />;
}
