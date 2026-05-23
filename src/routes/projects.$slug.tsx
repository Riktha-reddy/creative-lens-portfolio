import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { getProject, type ProjectData } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Studio/Dev` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl">Project not found</h1>
        <Link
          to="/"
          className="mt-6 inline-block font-mono text-[11px] uppercase tracking-[0.25em] underline"
        >
          ← Back home
        </Link>
      </div>
    </div>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="relative bg-background text-foreground min-h-screen">
      <CustomCursor />
      <Nav />
      <main className="px-6 md:px-12 pt-32 pb-24 max-w-5xl mx-auto">
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to projects
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              {project.tag}
            </span>
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full border ${
                project.kind === "uiux"
                  ? "border-foreground/30 text-foreground/80"
                  : "border-primary text-[var(--cream)] bg-primary"
              }`}
            >
              {project.kind === "uiux" ? "Case Study" : "Code"}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-balance">
            {project.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/75 max-w-3xl text-pretty">
            {project.description}
          </p>

          {/* Meta strip */}
          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.2em]">
            <MetaItem label="Year" value={project.year} />
            <MetaItem label="Role" value={project.role} />
            {project.client && <MetaItem label="Client" value={project.client} />}
            {project.stack && (
              <MetaItem label="Stack" value={project.stack.join(" · ")} />
            )}
          </dl>

          {(project.github || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-[var(--cream)] font-mono text-[11px] uppercase tracking-[0.2em] border border-primary hover-invert"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/25 font-mono text-[11px] uppercase tracking-[0.2em] hover:border-foreground hover:bg-foreground/5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Live
                </a>
              )}
            </div>
          )}
        </motion.header>

        {/* Body */}
        <div className="mt-20">
          {project.kind === "uiux" ? <UIUXBody p={project} /> : <CodeBody p={project} />}
        </div>

        {/* Footer nav */}
        <div className="mt-24 pt-10 border-t border-border">
          <Link
            to="/"
            hash="projects"
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/60 hover:text-foreground"
          >
            ← All projects
          </Link>
        </div>
      </main>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-foreground/50">{label}</dt>
      <dd className="mt-2 normal-case tracking-normal font-display text-base text-foreground">
        {value}
      </dd>
    </div>
  );
}

function UIUXBody({ p }: { p: ProjectData }) {
  return (
    <div className="space-y-20">
      {p.overview && (
        <Section index="01" title="Overview">
          <p className="text-lg leading-relaxed text-foreground/80">{p.overview}</p>
        </Section>
      )}
      {p.problem && (
        <Section index="02" title="The problem">
          <p className="text-lg leading-relaxed text-foreground/80">{p.problem}</p>
        </Section>
      )}
      {p.process && p.process.length > 0 && (
        <Section index="03" title="Process">
          <div className="grid md:grid-cols-2 gap-6">
            {p.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-border p-6 bg-[color-mix(in_oklab,var(--cream)_3%,var(--ink))]"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
      {p.outcomes && p.outcomes.length > 0 && (
        <Section index="04" title="Outcomes">
          <ul className="space-y-3">
            {p.outcomes.map((o) => (
              <li
                key={o}
                className="flex items-start gap-4 border-b border-border pb-3 text-lg text-foreground/85"
              >
                <span className="font-mono text-[var(--cream)] text-sm mt-1.5">→</span>
                <span className="text-pretty">{o}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}

function CodeBody({ p }: { p: ProjectData }) {
  return (
    <div className="space-y-20">
      {p.longDescription && (
        <Section index="01" title="What it is">
          <p className="text-lg leading-relaxed text-foreground/80">{p.longDescription}</p>
        </Section>
      )}
      {p.features && p.features.length > 0 && (
        <Section index="02" title="Features">
          <ul className="grid md:grid-cols-2 gap-3">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-border p-4 text-sm text-foreground/80 bg-[color-mix(in_oklab,var(--cream)_3%,var(--ink))]"
              >
                <span className="font-mono text-[var(--cream)] mt-0.5">▸</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}
      {p.architecture && (
        <Section index="03" title="Architecture">
          <p className="text-lg leading-relaxed text-foreground/80">{p.architecture}</p>
        </Section>
      )}
      {p.codeSnippet && (
        <Section index="04" title="Code">
          <div className="rounded-2xl border border-border overflow-hidden bg-[color-mix(in_oklab,var(--cream)_4%,var(--ink))]">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
              <span>source.ts</span>
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <Github className="w-3 h-3" /> View on GitHub
                </a>
              )}
            </div>
            <pre className="p-6 font-mono text-[12px] leading-relaxed text-foreground/90 overflow-x-auto whitespace-pre">
              {p.codeSnippet}
            </pre>
          </div>
          {p.github && (
            <div className="mt-6 rounded-2xl border border-border p-6 bg-[color-mix(in_oklab,var(--cream)_3%,var(--ink))] flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                  Repository
                </div>
                <div className="mt-1 font-mono text-sm text-foreground/85 break-all">
                  {p.github.replace(/^https?:\/\//, "")}
                </div>
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-[var(--cream)] font-mono text-[11px] uppercase tracking-[0.2em] border border-primary hover-invert"
              >
                <Github className="w-3.5 h-3.5" /> Open repo
              </a>
            </div>
          )}
        </Section>
      )}
    </div>
  );
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/40">
          {index}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>
      </div>
      <div className="md:pl-12">{children}</div>
    </motion.section>
  );
}
