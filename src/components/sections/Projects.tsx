import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "./Experience";
import { projects } from "@/data/projects";
import type { ProjectKind } from "@/data/projects";

type Filter = "all" | ProjectKind;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.kind === filter);

  return (
    <section id="projects" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="03" title="Projects" subtitle="Case studies and code, side by side." />

      <div className="mb-12 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
        {(
          [
            { id: "all", label: `All — ${projects.length}` },
            { id: "uiux", label: "UI/UX Case Studies" },
            { id: "code", label: "Technical / Code" },
          ] as { id: Filter; label: string }[]
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-full border transition-colors ${
              filter === tab.id
                ? "bg-[var(--cream)] text-[var(--ink)] border-[var(--cream)]"
                : "border-foreground/25 text-foreground/70 hover:border-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p, i) => (
          <ProjectCard
            key={p.slug}
            index={i}
            slug={p.slug}
            kind={p.kind}
            title={p.title}
            tag={p.tag}
            description={p.description}
            meta={p.meta}
            reveal={p.reveal ?? ""}
          />
        ))}
      </motion.div>
    </section>
  );
}
