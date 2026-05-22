import { motion } from "motion/react";
import { SectionHeader } from "./Experience";
import painting from "@/assets/hobby-painting.jpg";
import photography from "@/assets/hobby-photography.jpg";
import crafts from "@/assets/hobby-crafts.jpg";

const hobbies = [
  {
    title: "Painting",
    sub: "Oil & acrylic",
    body: "Loose, expressive studies in colour and gesture — mostly weekends.",
    image: painting,
  },
  {
    title: "Photography",
    sub: "35mm + medium format",
    body: "Street and architectural work, mostly shot in Lisbon and Tokyo.",
    image: photography,
  },
  {
    title: "Arts & Crafts",
    sub: "Paper, thread, wood",
    body: "Hands-on making — bookbinding, collage, and small printed objects.",
    image: crafts,
  },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="04" title="Off the clock" subtitle="What I do when I'm not designing." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hobbies.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-[color-mix(in_oklab,var(--cream)_4%,var(--ink))]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={h.image}
                alt={h.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                0{i + 1} / {h.sub}
              </div>
              <div className="mt-2 font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {h.title}
              </div>
              <p className="mt-2 text-sm text-foreground/80 max-w-xs text-pretty">{h.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
