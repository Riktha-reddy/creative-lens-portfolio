import { useState, useEffect } from "react";
import { Magnetic } from "@/components/Magnetic";
import { setCursorMode } from "@/components/CustomCursor";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#hobbies", label: "Off the clock" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-[color-mix(in_oklab,var(--ink)_70%,transparent)] border-b border-border" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a
          href="#home"
          onMouseEnter={() => setCursorMode("link")}
          onMouseLeave={() => setCursorMode("default")}
          className="font-display text-lg font-semibold tracking-tight flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 bg-[var(--cream)] rounded-full" />
          studio<span className="text-primary">/</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.2em]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onMouseEnter={() => setCursorMode("link")}
              onMouseLeave={() => setCursorMode("default")}
              className="px-4 py-2 rounded-full hover-invert text-foreground/70 hover:text-current"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Magnetic as="a" href="#contact">
          <span
            onMouseEnter={() => setCursorMode("link")}
            onMouseLeave={() => setCursorMode("default")}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-[var(--cream)] font-mono text-[11px] uppercase tracking-[0.2em] hover-invert border border-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cream)] animate-blink" />
            Available
          </span>
        </Magnetic>
      </div>
    </header>
  );
}
