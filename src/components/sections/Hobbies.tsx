import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { SectionHeader } from "./Experience";
import painting from "@/assets/hobby-painting.jpg";
import photography from "@/assets/hobby-photography.jpg";
import crafts from "@/assets/hobby-crafts.jpg";
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import craft1 from "@/assets/craft-1.jpg";
import craft2 from "@/assets/craft-2.jpg";
import craft3 from "@/assets/craft-3.jpg";

const hobbies = [
  {
    title: "Painting",
    sub: "Oil & acrylic",
    body: "Loose, expressive studies in colour and gesture — mostly weekends.",
    cover: painting,
    gallery: [painting1, painting2, painting3],
  },
  {
    title: "Photography",
    sub: "35mm + medium format",
    body: "Street and architectural work, mostly shot in Lisbon and Tokyo.",
    cover: photography,
    gallery: [photo1, photo2, photo3],
  },
  {
    title: "Arts & Crafts",
    sub: "Paper, thread, wood",
    body: "Hands-on making — bookbinding, collage, and small printed objects.",
    cover: crafts,
    gallery: [craft1, craft2, craft3],
  },
];

function HobbyCard({ h, i }: { h: (typeof hobbies)[number]; i: number }) {
  const [hover, setHover] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!hover) {
      setIdx(0);
      return;
    }
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % h.gallery.length);
    }, 1400);
    return () => clearInterval(t);
  }, [hover, h.gallery.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden rounded-2xl border border-border bg-[color-mix(in_oklab,var(--cream)_4%,var(--ink))]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={h.cover}
          alt={h.title}
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <AnimatePresence>
          {hover && (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={h.gallery[idx]}
                alt={`${h.title} ${idx + 1}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />

        {/* Progress dots */}
        <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {h.gallery.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`h-1 rounded-full transition-all duration-300 ${
                dotIdx === idx ? "w-6 bg-[var(--cream)]" : "w-1.5 bg-[var(--cream)]/40"
              }`}
            />
          ))}
        </div>
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
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="relative px-6 md:px-12 py-32 border-t border-border">
      <SectionHeader index="04" title="Off the clock" subtitle="What I do when I'm not designing." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hobbies.map((h, i) => (
          <HobbyCard key={h.title} h={h} i={i} />
        ))}
      </div>
    </section>
  );
}
