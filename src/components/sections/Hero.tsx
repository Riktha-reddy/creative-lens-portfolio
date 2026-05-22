import { motion } from "motion/react";
import { Magnetic } from "@/components/Magnetic";
import { setCursorMode } from "@/components/CustomCursor";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 overflow-hidden"
    >
      {/* Status bar */}
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60">
        <span>Portfolio / 2026</span>
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--cream)] animate-blink" />
          Available for work
        </span>
      </div>

      {/* Headline */}
      <div className="my-auto py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6"
        >
          <span className="inline-block px-3 py-1 border border-primary bg-primary text-[var(--cream)]">
            01 — Introducing
          </span>
        </motion.div>

        <h1 className="font-display font-semibold text-[clamp(2.75rem,9vw,9rem)] leading-[0.92] tracking-[-0.04em] text-balance">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block"
          >
            UI/UX Designer
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="block"
          >
            <span className="italic font-light text-foreground/60">&amp;</span> Technical
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block"
          >
            <span className="text-primary bg-[var(--cream)] px-3">Developer.</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 max-w-xl text-base md:text-lg text-foreground/70 text-pretty"
        >
          I design interfaces that feel inevitable, and write the code that ships them.
          Half studio, half engineering bench — built around clarity, speed, and a strong point of view.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic as="a" href="#contact">
            <span
              onMouseEnter={() => setCursorMode("link")}
              onMouseLeave={() => setCursorMode("default")}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[var(--cream)] text-[var(--ink)] font-medium hover-invert border border-[var(--cream)]"
            >
              Start a project
              <span aria-hidden>→</span>
            </span>
          </Magnetic>
          <Magnetic as="a" href="#projects">
            <span
              onMouseEnter={() => setCursorMode("link")}
              onMouseLeave={() => setCursorMode("default")}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-full border border-foreground/30 text-foreground hover-invert"
            >
              View work
            </span>
          </Magnetic>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 pt-8 border-t border-border">
        <div>
          <div className="text-foreground text-2xl font-display tracking-tight normal-case">6+</div>
          <div className="mt-1">Years shipping</div>
        </div>
        <div>
          <div className="text-foreground text-2xl font-display tracking-tight normal-case">40+</div>
          <div className="mt-1">Products launched</div>
        </div>
        <div>
          <div className="text-foreground text-2xl font-display tracking-tight normal-case">12</div>
          <div className="mt-1">Design systems</div>
        </div>
        <div>
          <div className="text-foreground text-2xl font-display tracking-tight normal-case">∞</div>
          <div className="mt-1">Cups of espresso</div>
        </div>
      </div>
    </section>
  );
}
