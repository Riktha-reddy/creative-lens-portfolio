export type ProjectKind = "uiux" | "code";

export interface ProjectImage {
  src: string;
  alt?: string;
  caption?: string;
  type?: "mobile" | "desktop" | "hero";
  width?: number;
  height?: number;
}

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
  wireframes?: { title: string; caption: string; type: "mobile" | "desktop"; image?: string | ProjectImage }[];
  outcomes?: string[];
  image?: string | ProjectImage;
  // Technical
  longDescription?: string;
  features?: string[];
  architecture?: string;
  codeSnippet?: string;
  publication?: string;
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
  slug: "ai-therapist-app",
  kind: "code",
  title: "AI Therapist App",
  tag: "AI / Python",
  description:
    "An AI-powered conversational agent providing a private, non-judgmental mental health support space for college students.",
  meta: "2026 • Open source & Published",
  year: "2026",
  role: "Author & Lead Developer",
  github: "https://github.com/Riktha-reddy/therapist-app",
  publication: "https://ieeexplore.ieee.org/document/10940967/",
  stack: ["Python", "AutoGen", "NLTK", "Matplotlib"],
  longDescription:
    "Built to address academic pressures and social stigma, this AI Therapist acts as an accessible conversational agent. It leverages multi-agent orchestration to conduct text-based support sessions, run sentiment analysis, and securely track user emotional patterns over time.",
  features: [
    "Multi-agent conversation workflows powered by AutoGen",
    "Real-time NLP sentiment analysis classifying tone as positive, negative, or neutral",
    "Automated emotional data reports and trend visualizations using Matplotlib",
    "Actionable mental health insights and proactive coping strategy recommendations",
    "Peer-reviewed and published research framework featured in IEEE Xplore",
  ],
  architecture:
    "The system uses AutoGen to orchestrate specialist agents (Conversational Guide, Sentiment Analyzer, and Report Generator). User inputs pass through NLTK pipelines for emotional tone evaluation. Historical scores populate localized data structures to graph mood fluctuations without compromising student privacy.",
  codeSnippet: `import autogen
from nltk.sentiment import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt

# Initialize AutoGen orchestration agents
assistant = autogen.AssistantAgent(
    name="Therapist_Assistant",
    llm_config={"config_list": config_list, "temperature": 0.7}
)
user_proxy = autogen.UserProxyAgent(name="Student_User")

# Analyze emotional tone over time
sia = SentimentIntensityAnalyzer()
score = sia.polarity_scores(student_input)

# Plot emotional journey
plt.plot(session_dates, sentiment_scores)
plt.title("Student Wellbeing Journey")`,
  reveal: `import autogen
from nltk.sentiment import SentimentIntensityAnalyzer
import matplotlib.pyplot as plt

# Initialize AutoGen orchestration agents
assistant = autogen.AssistantAgent(
    name="Therapist_Assistant",
    llm_config={"config_list": config_list, "temperature": 0.7}
)
user_proxy = autogen.UserProxyAgent(name="Student_User")

# Analyze emotional tone over time
sia = SentimentIntensityAnalyzer()
score = sia.polarity_scores(student_input)

# Plot emotional journey
plt.plot(session_dates, sentiment_scores)
plt.title("Student Wellbeing Journey")`,
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
  slug: "soil-type-detection",
  kind: "code",
  title: "Soil Type Detection & Crop Predictor",
  tag: "ML / Computer Vision",
  description:
    "A computer vision pipeline that identifies soil classification types and predicts optimal crop matches for agricultural yield.",
  meta: "2026 • Open source",
  year: "2026",
  role: "Author & Developer",
  github: "https://github.com/Riktha-reddy/Soil-type-detection",
  stack: ["Python", "TensorFlow", "OpenCV", "Scikit-Learn"],
  longDescription:
    "An intelligent agricultural assistant designed to bridge the gap between computer vision and farming. The project processes macro imagery of regional soils, applies a binary classification matrix to determine foundational composition qualities, and cross-references results against agronomic rules to output optimal crop suggestions.",
  features: [
    "Image preprocessing and normalization workflows built using OpenCV",
    "Deep-learning binary classification model optimized for granular soil texture types",
    "Predictive mapping engine that matches analyzed soil traits to high-yield crops",
    "Localized data inference architecture running completely on lightweight Python frameworks",
  ],
  architecture:
    "Raw environmental imagery is ingested and cleaned via OpenCV contrast and noise-reduction filters. Feature extraction arrays pass into a binary classification network to resolve basic soil taxonomy. The resultant confidence scores are fed into a downstream decision-tree classifier that returns target crop matches.",
  codeSnippet: `import cv2
import numpy as np
from sklearn.tree import DecisionTreeClassifier

# Ingest and preprocess agricultural soil sample
image = cv2.imread("soil_sample.jpg")
resized = cv2.resize(image, (224, 224))
normalized = resized / 255.0

# Extract classification vectors and map to crop rules
features = np.expand_dims(normalized, axis=0)
soil_type = model.predict(features)

# Query predictive agronomy matrix
crop_engine = DecisionTreeClassifier()
recommended_crop = crop_engine.predict([soil_type])`,
  reveal: `import cv2
import numpy as np
from sklearn.tree import DecisionTreeClassifier

# Ingest and preprocess agricultural soil sample
image = cv2.imread("soil_sample.jpg")
resized = cv2.resize(image, (224, 224))
normalized = resized / 255.0

# Extract classification vectors and map to crop rules
features = np.expand_dims(normalized, axis=0)
soil_type = model.predict(features)

# Query predictive agronomy matrix
crop_engine = DecisionTreeClassifier()
recommended_crop = crop_engine.predict([soil_type])`,
},
  {
  slug: "ventao-journey-logger",
  kind: "uiux",
  title: "Ventao — Banking, redrawn",
  tag: "Product / Mobile Design",
  description:
    "A field employee mobility app mapping routes, dispatch assignments, and journey history with zero operational friction.",
  meta: "2023 • Product Designer",
  year: "2023",
  role: "UI/UX & Product Designer",
  client: "Internal / Field Operations",
  liveUrl: "https://behance.net",
  stack: ["Figma", "UI Design", "Mobile App Design"],
  overview:
    "Ventao simplifies the daily routine of field employees by merging route planning, task tracking, and historic logging into a singular, field-tested mobile interface. The core design thesis: minimize screen interaction time so workers can focus safely on their destinations.",
  problem:
    "Field professionals struggle with disjointed workflows—using navigation tools, separate spreadsheets, and manual checklists to report daily operations. This fragmentation leads to inaccurate mileage tracking, missed location objectives, and high cognitive fatigue.",
  process: [
    {
      title: "Discovery",
      body: "Analyzed day-in-the-life routines of mobile staff. Mapped out core needs: clear next-stop visibility, instant destination confirmation, and friction-free logging during short transits.",
    },
    {
      title: "Define",
      body: "Established three core UI objectives: high visual hierarchy for real-time map waypoints, a distraction-free checklist matrix, and one-tap access to historical routes.",
    },
    {
      title: "Design",
      body: "Developed an intuitive, mobile-first design language in Figma. Focused heavily on high-contrast pin drop markers, legible text elements for variable outdoor lighting, and touch targets scaled for rapid movement.",
    },
    {
      title: "Validate",
      body: "Refined map interaction patterns to ensure route lines and sequential drop-offs remain clear on small form-factor devices, lowering navigation stress.",
    },
  ],
  outcomes: [
    "Unified route guidance and task management into a single interface",
    "Streamlined daily operational workflows with high-contrast, glanceable maps",
    "Built a modular tracking system for verifiable worker journey logs",
  ],
  wireframes: [
    { 
      title: "Active Map View", 
      caption: "Interactive route map with current location pinpointing and step-by-step sequential destinations", 
      type: "mobile",
      image: "/images/projects/ventao-map-view.png"
    },
    { 
      title: "To-Do List", 
      caption: "Integrated daily tasks panel embedded below mapping layers for quick task clearance", 
      type: "mobile",
      image: "/images/projects/ventao-todo-list.png"
    },
    { 
      title: "Journey History", 
      caption: "Archived journey logs displaying chronological route histories and completed dispatch summaries", 
      type: "mobile",
      image: "/images/projects/ventao-journey-history.png"
    },
  ],
}


];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
