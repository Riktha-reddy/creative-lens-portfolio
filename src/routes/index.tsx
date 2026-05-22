import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Hobbies } from "@/components/sections/Hobbies";
import { Contact } from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Studio/Dev — UI/UX Designer & Technical Developer" },
      {
        name: "description",
        content:
          "Portfolio of a UI/UX designer and technical developer. Case studies, code projects, and a place to start work together.",
      },
      { property: "og:title", content: "Studio/Dev — UI/UX Designer & Technical Developer" },
      { property: "og:description", content: "Half studio, half engineering bench. Design and code, shipped." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative bg-background text-foreground">
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <footer className="px-6 md:px-12 py-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/50">
        <span>© 2026 Studio/Dev — All rights, all wrongs.</span>
        <span>Crafted with intention in Lisbon</span>
      </footer>
      <Toaster />
    </div>
  );
}
