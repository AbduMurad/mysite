import Link from "next/link";
import Reveal from "@/components/Reveal";
import Topology from "@/components/Topology";
import LogoFan from "@/components/LogoFan";
import ParticlePortrait from "@/components/ParticlePortrait";
import { site } from "@/data/site";
/* Copy is the contract — mirrors the pack; voice rules apply. */

/* Home — ported from the verified mockup. Copy is the contract; don't edit
   here without mirroring the pack (voice rules apply). Default accent = ISMS red. */

type CardData = {
  idx: string;
  slug: string;
  title: string;
  blurb: string;
  meta: string;
  chips: string[];
  status: string;
  live: boolean;
  metric: { n: string; cap: string };
  fan?: { slug: string; title: string }[];
};

const cards: CardData[] = [
  {
    idx: "02",
    slug: "infrastructure",
    title: "Self-Hosted Infrastructure",
    blurb:
      "Architecting, building and running the technology stack a working organization depends on.",
    meta: "Technical owner · mid-2024 – present",
    chips: ["Proxmox", "ERPNext", "Asterisk", "Dokploy", "+8"],
    status: "In production — current role",
    live: true,
    metric: { n: "08", cap: "self-hosted services in production" },
    fan: [
      { slug: "proxmox", title: "Proxmox" },
      { slug: "frappe", title: "Frappe" },
      { slug: "asterisk", title: "Asterisk" },
      { slug: "n8n", title: "n8n" },
    ],
  },
  {
    idx: "03",
    slug: "proposal",
    title: "AI Proposal Generator",
    blurb:
      "Reads your winning documents and drafts what you need next — a bid, a report, a summary.",
    meta: "Sole developer · December 2025",
    chips: ["NestJS", "Vertex AI", "Gemini", "GCS", "+3"],
    status: "Delivered — late 2025",
    live: false,
    metric: { n: "RFP→draft", cap: "grounded in the documents that won before" },
    fan: [
      { slug: "googlegemini", title: "Gemini" },
      { slug: "googlecloud", title: "Google Cloud" },
      { slug: "nestjs", title: "NestJS" },
      { slug: "prisma", title: "Prisma" },
    ],
  },
  {
    idx: "04",
    slug: "v1-v2",
    title: "Rebuilding a Platform, v1 to v2",
    blurb: "Seven services rebuilt around the right boundaries — both architectures mine.",
    meta: "Architect, both generations · 2022–2026",
    chips: ["NestJS", "NATS", "Kubernetes", "MongoDB", "+6"],
    status: "v2 architecturally complete",
    live: false,
    metric: { n: "×2", cap: "architectural generations, one architect" },
    fan: [
      { slug: "kubernetes", title: "Kubernetes" },
      { slug: "nestjs", title: "NestJS" },
      { slug: "natsdotio", title: "NATS" },
      { slug: "helm", title: "Helm" },
    ],
  },
  {
    idx: "05",
    slug: "pipeline",
    title: "Secure File Ingest Pipeline",
    blurb:
      "Every uploaded document scanned, quarantined, and traceable before it lands.",
    meta: "Architect & lead engineer",
    chips: ["Antivirus scanning", "MinIO", "NATS", "NestJS", "+5"],
    status: "Built — not deployed",
    live: false,
    metric: { n: "scan→store", cap: "every upload gated before it lands" },
    fan: [
      { slug: "minio", title: "MinIO" },
      { slug: "amazons3", title: "Amazon S3" },
      { slug: "natsdotio", title: "NATS" },
      { slug: "kubernetes", title: "Kubernetes" },
    ],
  },
  {
    idx: "06",
    slug: "attendance",
    title: "Biometric Attendance Platform",
    blurb:
      "A fingerprint terminal, a legacy system to replace, and the discipline to ship both.",
    meta: "Sole developer · 2026 — actively developed",
    chips: ["NestJS", "Angular", "MySQL", "ZKTeco", "+4"],
    status: "In production — 2026",
    live: true,
    metric: { n: "2026", cap: "in production, actively developed" },
    fan: [
      { slug: "angular", title: "Angular" },
      { slug: "mysql", title: "MySQL" },
      { slug: "nginx", title: "nginx" },
      { slug: "docker", title: "Docker" },
    ],
  },
];

export default function Home() {
  return (
    <main id="main" className="home">
      {/* 1 · hero — name as display, particle portrait right */}
      <section className="hero" id="top">
        <div className="hero-mesh" aria-hidden="true" />
        <ParticlePortrait />
        <div className="wrap">
          <p className="microrow">
            <span className="dot" aria-hidden="true" />
            <span>Open for opportunities</span>
            <span>Remote · UTC+2</span>
          </p>
          <h1>
            <span className="line">
              <span>Abdu</span>
            </span>
            <span className="line dim">
              <span>Murad</span>
            </span>
          </h1>
          <p className="hero-value">
            Full-stack engineer — from the interface to the infrastructure.
          </p>
          <p className="hero-sub">
            I build the interfaces people use, architect the containerized
            microservices behind them, and keep{" "}
            <strong>production infrastructure</strong> running.
          </p>
          <div className="cta-pair">
            <a className="btn btn-primary" href="#work">
              View work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* 2 · selected work */}
      <section className="section" id="work">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Work · 01–06</p>
            <h2>Selected work</h2>
          </Reveal>
          <div className="grid">
            <Reveal className="span-all">
              <Link className="card card-feature" href="/work/isms/">
                <div className="cf-text">
                  <span className="card-idx">01 — flagship</span>
                  <h3>ISMS Compliance Platform</h3>
                  <p>
                    Multi-tenant SaaS that takes organizations through
                    information-security certification — ISO 27001 and beyond.
                  </p>
                  <span className="bmetric">
                    <b>07</b>
                    <span>services on one event bus</span>
                  </span>
                  <span className="card-meta">
                    Architect & lead engineer · 2022–2026 · client since 2020
                  </span>
                  <ul className="chips">
                    <li>NestJS</li>
                    <li>Angular</li>
                    <li>NATS</li>
                    <li>Kubernetes</li>
                    <li>+8</li>
                  </ul>
                  <span className="status">
                    <span className="off" aria-hidden="true" /> Feature-complete
                    — never deployed
                  </span>
                </div>
                <div className="shotstack" aria-hidden="true">
                  {/* real captures only — redacted set (locked media rule) */}
                  <img src="/images/isms/isms-workspace-dashboard.webp" alt="" loading="lazy" />
                  <img src="/images/isms/isms-project-detail.webp" alt="" loading="lazy" />
                  <img src="/images/isms/isms-monitoring.webp" alt="" loading="lazy" />
                </div>
              </Link>
            </Reveal>
            {cards.map((c, i) => (
              <Reveal key={c.slug} delay={0.05 * (i % 2)}>
                <Link className="card" href={`/work/${c.slug}/`}>
                  <div className="card-top">
                    <span className="card-idx">{c.idx}</span>
                    {c.fan && <LogoFan marks={c.fan} />}
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.blurb}</p>
                  <span className="bmetric">
                    <b>{c.metric.n}</b>
                    <span>{c.metric.cap}</span>
                  </span>
                  <span className="card-meta">{c.meta}</span>
                  <ul className="chips">
                    {c.chips.map((ch) => (
                      <li key={ch}>{ch}</li>
                    ))}
                  </ul>
                  <span className="status">
                    <span className={c.live ? "on" : "off"} aria-hidden="true" />{" "}
                    {c.status}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · the platform, in one visual */}
      <section className="section" id="platform">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The platform, in one visual</p>
            <h2>Seven services, one event bus</h2>
          </Reveal>
          <Reveal as="figure" className="topo-frame">
            <Topology />
            <figcaption className="topo-note">
              <p>
                The ISMS platform&apos;s architecture — event-driven over NATS
                JetStream, each service independently deployable on Kubernetes.
                Feature-complete; never deployed to production.
              </p>
              <Link className="link-quiet" href="/work/isms/">
                Read the case study →
              </Link>
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* 4 · capability strip */}
      <section className="section" id="skills">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>Frontend, backend, infrastructure</h2>
          </Reveal>
          <Reveal className="caps">
            <div className="cap">
              <h3>Frontend</h3>
              <ul>
                <li>
                  <strong>Angular</strong> across six years of product work
                </li>
                <li>Call-center agent UI — 24 operators daily, two deployments</li>
                <li>
                  A campaign build where smooth animation on mid-range phones
                  was the requirement
                </li>
              </ul>
            </div>
            <div className="cap">
              <h3>Backend</h3>
              <ul>
                <li>
                  <strong>Seven NestJS services</strong> over a NATS JetStream
                  event bus
                </li>
                <li>REST, WebSocket realtime, hardware integration over UDP</li>
                <li>Gemini / Vertex AI — working LLM products delivered</li>
              </ul>
            </div>
            <div className="cap">
              <h3>Infrastructure</h3>
              <ul>
                <li>
                  <strong>Kubernetes with Helmfile</strong>; Docker builds cut
                  120s → 1.2s
                </li>
                <li>8 self-hosted services on Proxmox — technical owner</li>
                <li>
                  Automated offsite backups; restore path exercised on every
                  migration
                </li>
              </ul>
            </div>
          </Reveal>
          <p className="caps-link">
            <Link className="link-quiet" href="/skills/">
              All skills, with evidence →
            </Link>
          </p>
        </div>
      </section>

      {/* 5 · contact */}
      <section className="section" id="contact">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Contact</p>
            <h2>Two ways to start</h2>
          </Reveal>
          <Reveal className="split">
            <div className="panel panel-primary">
              <p className="eyebrow">For hiring managers</p>
              <h3>Open for opportunities</h3>
              <p>
                Full-stack, remote, UTC+2. The work above says more than a CV —
                happy to walk through any of it.
              </p>
              <a
                className="btn btn-primary"
                href={`mailto:${site.email}?subject=Role%20—%20`}
              >
                {site.email} →
              </a>
            </div>
            <div className="panel panel-ghost">
              <p className="eyebrow">For clients</p>
              <h3>Have a project instead?</h3>
              <p>Selected freelance work. Include scope and timeline if you can.</p>
              <a
                className="btn btn-ghost"
                href={`mailto:${site.email}?subject=Project%20enquiry`}
              >
                Start the conversation →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
