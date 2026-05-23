import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import { setCursorMode } from "./CustomCursor";
import { Magnetic } from "./Magnetic";

export type ProjectKind = "uiux" | "code";

interface ProjectCardProps {
  kind: ProjectKind;
  title: string;
  tag: string;
  description: string;
  meta: string;
  /** raw code OR wireframe label / sketches markup */
  reveal: ReactNode;
  index: number;
  slug: string;
}

export function ProjectCard({ kind, title, tag, description, meta, reveal, index, slug }: ProjectCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <Magnetic strength={0.12} className="block w-full">
      <Link
        to="/projects/$slug"
        params={{ slug }}
        className="block"
        onMouseEnter={() => setCursorMode("link")}
        onMouseLeave={() => setCursorMode("default")}
      >
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        onMouseEnter={() => {
          setHover(true);
          setCursorMode(kind);
        }}
        onMouseLeave={() => {
          setHover(false);
          setCursorMode("default");
        }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-[color-mix(in_oklab,var(--cream)_4%,var(--ink))] aspect-[4/5] cursor-none"
      >
        {/* Final render layer */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/60">
              {tag}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full border ${
                kind === "uiux"
                  ? "border-foreground/30 text-foreground/70"
                  : "border-primary text-foreground bg-primary"
              }`}
            >
              {kind === "uiux" ? "Case Study" : "Code"}
            </span>
          </div>

          {/* Big visual */}
          <div className="relative flex-1 my-6 rounded-xl overflow-hidden bg-[color-mix(in_oklab,var(--cream)_8%,var(--ink))]">
            {kind === "uiux" ? <UIRender /> : <CodeRender />}
          </div>

          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight text-balance">
              {title}
            </h3>
            <p className="mt-2 text-sm text-foreground/70 text-pretty">{description}</p>
            <div className="mt-4 font-mono text-[11px] uppercase tracking-wider text-foreground/50">
              {meta}
            </div>
          </div>
        </div>

        {/* Reveal layer on hover */}
        <AnimatePresence>
          {hover && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`absolute inset-0 ${
                kind === "uiux"
                  ? "bg-[color-mix(in_oklab,var(--cream)_96%,transparent)] text-[var(--ink)]"
                  : "bg-[var(--ink)] text-[var(--cream)]"
              }`}
            >
              {kind === "uiux" ? (
                <WireframeReveal title={title} />
              ) : (
                <CodeReveal reveal={reveal} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.article>
    </Magnetic>
  );
}

function UIRender() {
  return (
    <div className="absolute inset-0 p-6 flex flex-col gap-3">
      <div className="h-3 w-2/3 rounded-full bg-foreground/15" />
      <div className="h-3 w-1/2 rounded-full bg-foreground/15" />
      <div className="mt-auto grid grid-cols-3 gap-2">
        <div className="h-16 rounded-md bg-primary/80" />
        <div className="h-16 rounded-md bg-foreground/10" />
        <div className="h-16 rounded-md bg-foreground/10" />
      </div>
    </div>
  );
}

function CodeRender() {
  return (
    <div className="absolute inset-0 p-6 flex items-center justify-center">
      <div className="font-mono text-[var(--cream)] text-sm opacity-90 leading-relaxed text-center">
        <div>{"{ build: 'shipped' }"}</div>
        <div className="text-foreground/40 text-xs mt-2">v1.2.0 • production</div>
      </div>
    </div>
  );
}

function WireframeReveal({ title }: { title: string }) {
  return (
    <div className="absolute inset-0 p-8 flex flex-col">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-60">
        Wireframe / Sketch
      </div>
      <div className="mt-4 flex-1 relative">
        <svg viewBox="0 0 400 500" className="w-full h-full" stroke="currentColor" fill="none" strokeWidth="1.5">
          <rect x="20" y="20" width="360" height="40" rx="4" strokeDasharray="4 4" />
          <rect x="20" y="80" width="220" height="14" />
          <rect x="20" y="104" width="180" height="14" />
          <rect x="20" y="140" width="170" height="160" rx="6" strokeDasharray="3 3" />
          <rect x="210" y="140" width="170" height="75" rx="6" strokeDasharray="3 3" />
          <rect x="210" y="225" width="170" height="75" rx="6" strokeDasharray="3 3" />
          <line x1="20" y1="320" x2="380" y2="320" />
          <rect x="20" y="340" width="100" height="32" rx="16" />
          <text x="38" y="361" fontFamily="monospace" fontSize="11" stroke="none" fill="currentColor">CTA →</text>
          <rect x="20" y="400" width="360" height="80" rx="6" strokeDasharray="2 6" />
        </svg>
        <div className="absolute bottom-2 right-2 font-mono text-[10px] opacity-50">
          {title.toLowerCase().replace(/\s+/g, "-")}.fig
        </div>
      </div>
    </div>
  );
}

function CodeReveal({ reveal }: { reveal: ReactNode }) {
  return (
    <div className="absolute inset-0 p-6 overflow-hidden">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
        source.ts
      </div>
      <pre className="mt-4 font-mono text-[11px] leading-relaxed text-foreground/90 whitespace-pre-wrap">
        {reveal}
      </pre>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--ink)] to-transparent" />
    </div>
  );
}
