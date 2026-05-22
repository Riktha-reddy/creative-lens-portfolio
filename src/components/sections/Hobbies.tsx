import { motion } from "motion/react";
import { SectionHeader } from "./Experience";

const hobbies = [
  {
    title: "Photography",
    sub: "35mm + medium format",
    body: "Street and architectural work, mostly shot in Lisbon and Tokyo.",
    span: "md:col-span-2 md:row-span-2",
    accent: "primary",
  },
  {
    title: "Gaming",
    sub: "Slow, weird, beautiful",
    body: "Outer Wilds. Disco Elysium. Anything by Lucas Pope.",
    span: "",
    accent: "cream",
  },
  {
    title: "Reading",
    sub: "Currently",
    body: "“The Design of Everyday Things”, again. It never gets old.",
    span: "",
    accent: "outline",
  },
  {
    title: "Running",
    sub: "5km / day-ish",
    body: "Best time to think through interaction problems.",
    span: "md:col-span-2",
    accent: "outline",
  },
  {
    title: "Vinyl",
    sub: "Jazz & electronic",
    body: "Alice Coltrane, Floating Points, Nala Sinephro.",
    span: "",
    accent: "primary",
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="04" title="Off the clock" subtitle="What I do when I'm not designing." />

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[220px] gap-4">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-2xl p-6 flex flex-col justify-between hover-invert border ${h.span} ${
              h.accent === "primary"
                ? "bg-primary text-[var(--cream)] border-primary"
                : h.accent === "cream"
                ? "bg-[var(--cream)] text-[var(--ink)] border-[var(--cream)]"
                : "border-border text-foreground"
            }`}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
              0{i + 1} / {h.sub}
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {h.title}
              </div>
              <p className="mt-2 text-sm opacity-80 max-w-xs text-pretty">{h.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
