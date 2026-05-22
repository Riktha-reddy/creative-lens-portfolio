import { useState } from "react";
import { motion } from "motion/react";
import { ProjectCard, type ProjectKind } from "@/components/ProjectCard";
import { SectionHeader } from "./Experience";

type Filter = "all" | ProjectKind;

const projects = [
  {
    kind: "uiux" as const,
    title: "Halo — Banking, redrawn",
    tag: "Fintech / Product",
    description: "A consumer banking app focused on radical transparency and zero hidden friction.",
    meta: "2025 • Design lead",
    reveal: null,
  },
  {
    kind: "code" as const,
    title: "Pulse Realtime SDK",
    tag: "Infra / TypeScript",
    description: "A websocket-backed sync engine powering collaborative cursors at 60fps.",
    meta: "2025 • Open source",
    reveal: `export const channel = createChannel({
  url: env.WS_URL,
  reconnect: { backoff: "exp", max: 8 },
});

channel.on("cursor", (msg) => {
  store.upsert(msg.userId, msg.point);
});

await channel.subscribe("room:42");`,
  },
  {
    kind: "uiux" as const,
    title: "Forma OS",
    tag: "Enterprise / Design system",
    description: "A 240-token system spanning web, iOS and embedded displays for a logistics platform.",
    meta: "2024 • Lead designer",
    reveal: null,
  },
  {
    kind: "code" as const,
    title: "Glyph CLI",
    tag: "Tooling / Rust",
    description: "Static analysis for icon libraries — flags drift, duplicates and accessibility gaps.",
    meta: "2024 • Solo build",
    reveal: `fn audit(set: &IconSet) -> Vec<Finding> {
  set.icons.par_iter()
    .filter_map(|i| {
      if i.viewbox != "0 0 24 24" {
        Some(Finding::warn(i, "non-standard viewbox"))
      } else { None }
    })
    .collect()
}`,
  },
  {
    kind: "uiux" as const,
    title: "Lumen Health",
    tag: "Healthcare / Mobile",
    description: "A calm, jargon-free companion for patients managing chronic conditions.",
    meta: "2023 • Product designer",
    reveal: null,
  },
  {
    kind: "code" as const,
    title: "Atlas Edge Router",
    tag: "Backend / Workers",
    description: "Edge-first router with type-safe RPC and zero-config auth middleware.",
    meta: "2023 • Maintainer",
    reveal: `export const route = router({
  POST: handler()
    .input(z.object({ name: z.string() }))
    .use(requireAuth)
    .run(async ({ data, user }) => {
      return db.post.create({ ...data, userId: user.id });
    }),
});`,
  },
];

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

      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visible.map((p, i) => (
          <ProjectCard key={p.title} index={i} {...p} reveal={p.reveal ?? ""} />
        ))}
      </motion.div>
    </section>
  );
}
