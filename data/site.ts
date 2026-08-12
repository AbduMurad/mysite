export const site = {
  name: "Abdu Murad",
  domain: "https://abdumurad.com",
  email: "hi@abdumurad.com",
  github: "https://github.com/AbduMurad",
  linkedin: "https://www.linkedin.com/in/murad-abdu/",
} as const;

export type ProjectMeta = {
  order: number;
  slug: string;
  title: string;
  short: string; // card / palette / prev-next label
  tagline: string;
  accent: string;
  accentMuted: string;
  live: boolean; // green status dot
  kind: string; // eyebrow, e.g. "Client contract · deep dive"
};

const A = (hex: string, a = 0.12) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
};

export const projects: ProjectMeta[] = [
  {
    order: 1,
    slug: "isms",
    title: "ISMS Compliance Platform",
    short: "ISMS Compliance Platform",
    tagline: "Multi-tenant SaaS that takes organizations through information-security certification — ISO 27001 and beyond.",
    accent: "#E8483A",
    accentMuted: A("#E8483A"),
    live: false,
    kind: "Client contract · flagship",
  },
  {
    order: 2,
    slug: "infrastructure",
    title: "Self-Hosted Infrastructure",
    short: "Self-Hosted Infrastructure",
    tagline: "Architecting, building and running the technology stack a working organization depends on.",
    accent: "#2DA44E",
    accentMuted: A("#2DA44E"),
    live: true,
    kind: "Employment — current role",
  },
  {
    order: 3,
    slug: "proposal",
    title: "AI Proposal Generator",
    short: "AI Proposal Generator",
    tagline: "Reads your winning documents and drafts what you need next — a bid, a report, a summary.",
    accent: "#14B8A6",
    accentMuted: A("#14B8A6"),
    live: false,
    kind: "Employment project",
  },
  {
    order: 4,
    slug: "v1-v2",
    title: "Rebuilding a Platform, v1 to v2",
    short: "Platform v1 → v2",
    tagline: "Seven services rebuilt around the right boundaries — both architectures mine.",
    accent: "#8957E5",
    accentMuted: A("#8957E5"),
    live: false,
    kind: "Client contract · 2022 – 2026",
  },
  {
    order: 5,
    slug: "pipeline",
    title: "Secure File Ingest Pipeline",
    short: "Secure File Ingest Pipeline",
    tagline: "Every uploaded document scanned, quarantined, and traceable before it lands.",
    accent: "#D29922",
    accentMuted: A("#D29922"),
    live: false,
    kind: "Client contract · deep dive",
  },
  {
    order: 6,
    slug: "attendance",
    title: "Biometric Attendance Platform",
    short: "Biometric Attendance Platform",
    tagline: "A fingerprint terminal, a legacy system to replace, and the discipline to ship both.",
    accent: "#388BFD",
    accentMuted: A("#388BFD"),
    live: true,
    kind: "Employment project",
  },
  {
    order: 7,
    slug: "isend",
    title: "iSend SMS Platform",
    short: "iSend SMS Platform",
    tagline: "Self-hosted, multi-user SMS sending with quotas, 2FA, and an audit trail.",
    accent: "#C9A46A",
    accentMuted: A("#C9A46A"),
    live: true,
    kind: "Employment — built within the current role",
  },
  {
    order: 8,
    slug: "three-sites",
    title: "Three-Site Showcase",
    short: "Three-Site Showcase",
    tagline: "Three bilingual site demos — a PR firm, a media studio, and a summit with a working registration flow.",
    accent: "#C9A46A",
    accentMuted: A("#C9A46A"),
    live: false,
    kind: "Spec build · August 2026",
  },
];

export const bySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)!;

export const prevNext = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  const n = projects.length;
  return {
    prev: projects[(i - 1 + n) % n],
    next: projects[(i + 1) % n],
  };
};
