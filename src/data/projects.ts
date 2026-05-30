export type ProjectKind = "uiux" | "code";

export interface ProjectData {
  slug: string;
  kind: ProjectKind;
  title: string;
  tag: string;
  description: string;
  meta: string;
  reveal?: string;
  // detail page fields
  year: string;
  role: string;
  client?: string;
  github?: string;
  liveUrl?: string;
  stack?: string[];
  // UI/UX case study
  overview?: string;
  problem?: string;
  process?: { title: string; body: string }[];
  wireframes?: { title: string; caption: string; type: "mobile" | "desktop" }[];
  outcomes?: string[];
  // Technical
  longDescription?: string;
  features?: string[];
  architecture?: string;
  codeSnippet?: string;
}

export const projects: ProjectData[] = [
  {
    slug: "halo-banking",
    kind: "uiux",
    title: "Halo — Banking, redrawn",
    tag: "Fintech / Product",
    description:
      "A consumer banking app focused on radical transparency and zero hidden friction.",
    meta: "2025 • Design lead",
    year: "2025",
    role: "Design lead",
    client: "Halo Financial (concept)",
    stack: ["Figma", "Framer", "Principle", "SwiftUI prototype"],
    overview:
      "Halo reimagines the consumer banking experience by stripping out hidden fees, dark patterns, and jargon. The core thesis: a bank should feel like a calm, honest companion — not a slot machine.",
    problem:
      "User research with 32 customers across three banks surfaced one common pain — opaque fee structures and aggressive upsell flows that erode trust. Engagement was high, satisfaction was low.",
    process: [
      {
        title: "Discovery",
        body: "Diary studies, 32 interviews, and a heuristic teardown of 6 competing apps. Mapped 14 trust-breaking moments across signup, transfer, and dispute flows.",
      },
      {
        title: "Define",
        body: "Synthesised three principles: show the math, name the cost, never surprise. Every screen later validated against these.",
      },
      {
        title: "Design",
        body: "120+ screens across iOS and web. Built a 90-token design system with a single accent and generous whitespace to keep numbers legible.",
      },
      {
        title: "Validate",
        body: "Two rounds of moderated testing (n=18). Task success rose from 62% to 94% on the dispute flow; trust score improved 41%.",
      },
    ],
    outcomes: [
      "Task success on disputes: 62% → 94%",
      "Perceived trust score: +41% vs. control",
      "Concept won internal innovation pitch and moved to pilot",
    ],
    wireframes: [
      { title: "Onboarding", caption: "3-step signup with plain-language consent", type: "mobile" },
      { title: "Account home", caption: "Balance, recent activity, fee transparency strip", type: "mobile" },
      { title: "Transfer flow", caption: "Show-the-math sheet before confirm", type: "mobile" },
      { title: "Dispute center", caption: "Web dashboard for tracking & evidence upload", type: "desktop" },
    ],
  },
  {
    slug: "pulse-realtime-sdk",
    kind: "code",
    title: "Pulse Realtime SDK",
    tag: "Infra / TypeScript",
    description:
      "A websocket-backed sync engine powering collaborative cursors at 60fps.",
    meta: "2025 • Open source",
    year: "2025",
    role: "Author & maintainer",
    github: "https://github.com/example/pulse-realtime",
    stack: ["TypeScript", "WebSockets", "Rust (server)", "Vitest"],
    longDescription:
      "Pulse is a tiny realtime sync engine that powers presence, cursors, and CRDT-style state for collaborative apps. It maintains a steady 60fps under 200 concurrent participants and reconnects gracefully across network drops.",
    features: [
      "Exponential backoff reconnect with jitter",
      "Binary frames + delta encoding (≈80% bandwidth saving vs JSON)",
      "Typed channel API with Zod-validated payloads",
      "First-class React hooks: useChannel, usePresence, useCursors",
      "Optional Rust edge server for sub-20ms regional fanout",
    ],
    architecture:
      "Client maintains a single multiplexed socket. A central Channel router fans events to React subscribers via a tiny store with structural sharing. Server is a stateless fanout node backed by Redis pub/sub.",
    codeSnippet: `export const channel = createChannel({
  url: env.WS_URL,
  reconnect: { backoff: "exp", max: 8 },
});

channel.on("cursor", (msg) => {
  store.upsert(msg.userId, msg.point);
});

await channel.subscribe("room:42");`,
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
    slug: "forma-os",
    kind: "uiux",
    title: "Forma OS",
    tag: "Enterprise / Design system",
    description:
      "A 240-token system spanning web, iOS and embedded displays for a logistics platform.",
    meta: "2024 • Lead designer",
    year: "2024",
    role: "Lead designer",
    client: "Forma Logistics",
    stack: ["Figma", "Style Dictionary", "Storybook", "Tailwind"],
    overview:
      "Forma OS is a cross-surface design system serving a logistics platform used by warehouse operators, dispatchers, and drivers — each on different hardware, lighting, and attention budgets.",
    problem:
      "Five disconnected product teams shipped diverging UI. Drivers struggled to read screens in sunlight; dispatchers had alert fatigue; QA cost ballooned.",
    process: [
      {
        title: "Audit",
        body: "Catalogued 1,800+ unique components across 5 apps. 84% were near-duplicates with subtle inconsistencies.",
      },
      {
        title: "Tokenise",
        body: "Defined 240 semantic tokens (color, type, space, motion) with surface-specific themes for sunlight, dim, and embedded screens.",
      },
      {
        title: "Ship",
        body: "Rolled out via Storybook + Style Dictionary. Migrated 3 apps over 4 months with a co-pilot model — designer paired with each team.",
      },
    ],
    outcomes: [
      "Component count reduced from 1,800 to 220",
      "QA defects related to UI inconsistency down 67%",
      "New feature design-to-ship cycle: 3 weeks → 6 days",
    ],
    wireframes: [
      { title: "Dispatcher console", caption: "Multi-pane layout with live fleet map", type: "desktop" },
      { title: "Warehouse tablet", caption: "High-contrast pick-list for bright environments", type: "desktop" },
      { title: "Driver app", caption: "Glanceable next-stop card with one-tap actions", type: "mobile" },
      { title: "Token gallery", caption: "Storybook view of color, type & spacing tokens", type: "desktop" },
    ],
  },
  {
    slug: "glyph-cli",
    kind: "code",
    title: "Glyph CLI",
    tag: "Tooling / Rust",
    description:
      "Static analysis for icon libraries — flags drift, duplicates and accessibility gaps.",
    meta: "2024 • Solo build",
    year: "2024",
    role: "Solo build",
    github: "https://github.com/example/glyph-cli",
    stack: ["Rust", "Rayon", "SVG parser", "GitHub Actions"],
    longDescription:
      "Glyph is a CLI that audits icon libraries for consistency. It detects non-standard viewBoxes, duplicate paths, missing titles for screen readers, and stroke-width drift — running across 5,000+ icons in under a second.",
    features: [
      "Parallel parsing via Rayon (sub-second runs on 5k icons)",
      "Rules engine with JSON config and per-rule severity",
      "GitHub Action with PR-comment integration",
      "JSON, SARIF, and human-readable reporters",
    ],
    architecture:
      "Single-binary Rust CLI. SVGs are parsed into a normalized IR, then a vector of rules is applied in parallel. Findings stream into pluggable reporters.",
    codeSnippet: `fn audit(set: &IconSet) -> Vec<Finding> {
  set.icons.par_iter()
    .filter_map(|i| {
      if i.viewbox != "0 0 24 24" {
        Some(Finding::warn(i, "non-standard viewbox"))
      } else { None }
    })
    .collect()
}`,
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
    slug: "lumen-health",
    kind: "uiux",
    title: "Lumen Health",
    tag: "Healthcare / Mobile",
    description:
      "A calm, jargon-free companion for patients managing chronic conditions.",
    meta: "2023 • Product designer",
    year: "2023",
    role: "Product designer",
    client: "Lumen Health",
    stack: ["Figma", "Lottie", "Maze"],
    overview:
      "Lumen helps patients with chronic conditions track symptoms, medications, and appointments without feeling clinical. The tone is warm; the data is precise.",
    problem:
      "Existing apps either oversimplified (and lost clinical value) or overwhelmed (and lost patients). Adherence rates were under 40%.",
    process: [
      {
        title: "Co-design",
        body: "Ran six co-design sessions with patients and two with care teams. Sketched the daily check-in flow together.",
      },
      {
        title: "Plain language",
        body: "Worked with a medical writer to rewrite every label. No acronyms, no medical Latin, no shame.",
      },
      {
        title: "Test",
        body: "Eight weeks of in-the-wild testing with 24 patients. Iterated weekly on the medication reminder flow.",
      },
    ],
    outcomes: [
      "Daily check-in adherence: 38% → 71%",
      "Net Promoter Score: 64",
      "Featured by App Store in Health & Fitness",
    ],
  },
  {
    slug: "atlas-edge-router",
    kind: "code",
    title: "Atlas Edge Router",
    tag: "Backend / Workers",
    description:
      "Edge-first router with type-safe RPC and zero-config auth middleware.",
    meta: "2023 • Maintainer",
    year: "2023",
    role: "Maintainer",
    github: "https://github.com/example/atlas-edge-router",
    stack: ["TypeScript", "Cloudflare Workers", "Zod", "Vitest"],
    longDescription:
      "Atlas is a tiny edge-native router with first-class TypeScript ergonomics. Define routes with input validation, middleware composition, and typed handlers — deploy anywhere V8 isolates run.",
    features: [
      "Sub-100 LOC core, tree-shakeable",
      "Zod-powered input validation with inferred handler types",
      "Composable middleware (auth, rate-limit, cors) — no class inheritance",
      "Adapters: Cloudflare Workers, Bun, Node, Deno",
    ],
    architecture:
      "A single router object compiles routes into a radix tree at construction. Handlers are pure functions taking a typed context. Middleware is just function composition — no DI container, no magic.",
    codeSnippet: `export const route = router({
  POST: handler()
    .input(z.object({ name: z.string() }))
    .use(requireAuth)
    .run(async ({ data, user }) => {
      return db.post.create({ ...data, userId: user.id });
    }),
});`,
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

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
