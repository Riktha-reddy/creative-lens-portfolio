import { motion } from "motion/react";

const work = [
  { year: "2024 — Now", role: "Lead Product Designer & Engineer", org: "Independent Studio", note: "Design systems, AI tooling, brand-led product." },
  { year: "2022 — 2024", role: "Senior UI/UX Designer", org: "Northbeam Labs", note: "Owned web platform and onboarding redesign (+38% activation)." },
  { year: "2020 — 2022", role: "Frontend Developer", org: "Forma Interactive", note: "Built component libraries used across 14 production apps." },
  { year: "2018 — 2020", role: "Product Designer", org: "Studio Veil", note: "Editorial, e-commerce, and brand systems for early-stage startups." },
];

const education = [
  { year: "2023", role: "Interaction Design — Advanced", org: "IDF", note: "Specialization in motion and complex flows." },
  { year: "2019", role: "B.Sc. Computer Science", org: "University of Lisbon", note: "Focus on HCI, compilers, and graphics." },
  { year: "2017", role: "Visual Communication Diploma", org: "ESAD", note: "Editorial design and typography." },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="02" title="Experience" subtitle="A timeline of work and learning." />

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <Column heading="Work" items={work} accent />
        <Column heading="Education" items={education} />
      </div>
    </section>
  );
}

function Column({
  heading,
  items,
  accent = false,
}: {
  heading: string;
  items: { year: string; role: string; org: string; note: string }[];
  accent?: boolean;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3 mb-10">
        <h3 className="font-display text-2xl font-semibold">{heading}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
          {items.length} entries
        </span>
      </div>
      <ol className="relative border-l border-border pl-8 space-y-10">
        {items.map((it, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative"
          >
            <span
              className={`absolute -left-[37px] top-2 w-3 h-3 rounded-full ${
                accent ? "bg-primary ring-4 ring-primary/20" : "bg-[var(--cream)]"
              }`}
            />
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
              {it.year}
            </div>
            <div className="mt-2 font-display text-xl md:text-2xl font-medium text-balance">
              {it.role}
            </div>
            <div className="text-sm text-primary mt-1">{it.org}</div>
            <p className="mt-2 text-sm text-foreground/65 text-pretty max-w-md">{it.note}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50 mb-3">
          {index} / {title}
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-[-0.03em] text-balance">
          {title}.
        </h2>
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/60 max-w-xs">
        {subtitle}
      </p>
    </div>
  );
}
