import type { Metadata } from "next";
import Link from "next/link";
import Accent from "@/components/Accent";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About ten years writing code.",
};

/* Copy is the contract (mirrors the pack's about draft — voice rules apply).
   Portrait: blended cutout, final form — no geometry, no JS-gated reveal
   (locked: the wireframe treatment died to the hexagram catch; a clip reveal
   once blanked the photo entirely). */

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdu Murad",
  jobTitle: "Full-Stack Engineer",
  url: `${site.domain}/about`,
  image: `${site.domain}/images/portrait/abdu-studio.jpg`,
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
};

export default function About() {
  return (
    <main id="main">
      <Accent color="#E8483A" muted="rgba(232,72,58,.12)" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      {/* bio + portrait */}
      <section className="chead">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <div className="bio-grid" style={{ marginTop: "var(--space-12)" }}>
            <h1 className="bio-open">
              I&apos;ve been writing code for about ten years.
            </h1>
            <figure className="portrait">
              <div className="portrait-glow" aria-hidden="true" />
              <picture>
                <source
                  srcSet="/images/portrait/abdu-cutout.webp"
                  type="image/webp"
                />
                <img
                  src="/images/portrait/abdu-cutout.png"
                  alt="Abdu Murad"
                  width={720}
                  height={928}
                  decoding="async"
                />
              </picture>
            </figure>
            <div
              className="prose bio-prose"
              style={{ margin: "var(--space-8) 0 0" }}
            >
              <p>
                The first five were course projects — nothing in production. I
                started getting paid in 2020, and that&apos;s where the
                certificate trail starts too.
              </p>
              <p>
                Most of that paid work has been on a compliance platform for ISO
                27001 certification — seven NestJS services talking over a NATS
                event bus, orchestrated on Kubernetes with Helm, with an Angular
                application on top. I architected and built it, and I&apos;ve
                lived with both decisions since.
              </p>
              <p>
                That&apos;s taught me more than any single stack would.
                I&apos;ve built the wrong service boundaries and then rebuilt
                them correctly. I&apos;ve run an agent-assisted
                production-readiness audit across all seven services, measuring
                my development environment against production standards — the
                kind of gaps that are easy to create and hard to catch by
                reading. And I&apos;ve cut a Docker build from two minutes to
                just over a second — small, until you multiply it by every
                build a team runs.
              </p>
              <p>
                Currently I run the technology stack for a humanitarian NGO — a
                Proxmox host carrying ERP, telephony, workflow automation,
                secrets management and field data collection, plus the web
                applications on top — with no dedicated ops team behind it.
                It&apos;s the counterweight to the platform work: one system I
                designed at scale, another I keep running at 2am.
              </p>
              <p>
                I also do the other end — interfaces people use all day: a
                call-center agent UI, an attendance dashboard, and a consumer
                campaign build where smooth animation on a mid-range phone was
                the requirement.
              </p>
              <p>
                <strong>
                  The NGO&apos;s technical team is two people — the IT manager
                  and me.
                </strong>{" "}
                We test each other&apos;s work before it ships and debug
                together. On architecture we argue it out; the final call is
                his, and I&apos;ve shipped decisions I first disagreed with.
                I&apos;ve also tested and hardened freelancer-built apps before
                they went to production.
              </p>
              <p>
                How I work with AI: I research what the system needs first,
                then talk it through with AI to compare technologies and
                trade-offs. We draft a plan. I critique it and look for outside
                sources that push back on it. Then I split it into phases,
                build, and test the UI and the logic myself.
              </p>
              <p>
                Open to opportunities and selected freelance work. Remote,
                UTC+2. I&apos;ve owned entire stacks alone; what I&apos;m
                optimizing for now is a team where the problems are bigger than
                one person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Timeline</p>
            <h2>2015 to now</h2>
          </Reveal>
          <div className="tline">
            {/* client band height is measured against entries in the build —
                78% spans NGO+bank+platform+first-paid (2020–2026) */}
            <div className="cband" style={{ top: 0, height: "78%" }}>
              <small>same client, 2020 – 2026</small>
            </div>

            <Reveal className="tentry now">
              <span className="twhen">Mid-2024 — present</span>
              <h3>Humanitarian NGO — technical owner</h3>
              <p>
                Architecture, build and operations for the organization&apos;s
                technology stack —{" "}
                <Link href="/work/infrastructure/">the infrastructure</Link>,
                plus product work in production:{" "}
                <Link href="/work/attendance/">the attendance platform</Link>, a
                call-center platform used daily by 24 operators across two
                deployments, and{" "}
                <Link href="/work/proposal/">an AI proposal generator</Link>.
                AWS EC2 instances maintained alongside the self-hosted estate.
              </p>
            </Reveal>

            <Reveal className="tentry">
              <span className="twhen">Mar — Jun 2024</span>
              <h3>Bank — internal systems</h3>
              <p>
                Maintained internal banking systems and shipped a
                mobile-network-operator airtime purchasing feature delivered
                over SMS. Left for the NGO role — broader hands-on ownership.
              </p>
            </Reveal>

            <Reveal className="tentry">
              <span className="twhen">2022 — 2026</span>
              <h3>The platform years</h3>
              <p>
                Architected and built{" "}
                <Link href="/work/isms/">
                  a seven-service compliance platform
                </Link>{" "}
                for the same client who started with a website — in phases,
                across{" "}
                <Link href="/work/v1-v2/">two architectural generations</Link>,
                with{" "}
                <Link href="/work/pipeline/">
                  a security-first file pipeline
                </Link>{" "}
                at its core. 2026 brought the v2 redesign and an agent-assisted
                production-readiness audit, delivered while running the
                NGO&apos;s infrastructure full-time.
              </p>
            </Reveal>

            <Reveal className="tentry">
              <span className="twhen">2020 — 2021</span>
              <h3>First paid work</h3>
              <p>
                A company website for a regional information-security
                consultancy. They kept coming back for six years — the
                engagement started with weekly agile reviews and relaxed into
                full ownership of their core product&apos;s architecture.
              </p>
            </Reveal>

            <Reveal className="tentry">
              <span className="twhen">~2015</span>
              <h3>Self-taught beginnings</h3>
              <p>
                YouTube, courses, some university study. Five years of learning
                projects before anything shipped.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* learning strip */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Learning</p>
            <h2>Learning that shipped</h2>
          </Reveal>
          <Reveal className="lstrip">
            <Link className="lcard" href="/learning/">
              <span className="cmeta">2022 · 54.5 HRS</span>
              <h3>Microservices with Node JS and React</h3>
              <span className="cmeta">→ became the platform, v1</span>
            </Link>
            <Link className="lcard" href="/learning/">
              <span className="cmeta">2024 · 8 HRS</span>
              <h3>Solution Architect</h3>
              <span className="cmeta">→ became the v2 redesign</span>
            </Link>
            <Link className="lcard" href="/learning/">
              <span className="cmeta">2024 · 8 HRS</span>
              <h3>Application Security</h3>
              <span className="cmeta">→ became the file pipeline</span>
            </Link>
          </Reveal>
          <Reveal>
            <p
              style={{
                marginTop: "var(--space-8)",
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-sm)",
              }}
            >
              <Link href="/learning/" style={{ color: "var(--accent)" }}>
                417.5 hours · the full record →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* cta */}
      <section className="section">
        <Reveal className="wrap" >
          <div style={{ maxWidth: "var(--container-text)", marginInline: "auto" }}>
            <p className="eyebrow">Next</p>
            <h2 style={{ marginBottom: "var(--space-6)" }}>Get in touch</h2>
            <div
              style={{
                display: "flex",
                gap: "var(--space-4)",
                marginTop: "var(--space-8)",
                flexWrap: "wrap",
              }}
            >
              <a
                className="btn btn-primary"
                href={`mailto:${site.email}?subject=Role%20—%20`}
              >
                {site.email} →
              </a>
              <Link className="btn btn-ghost" href="/#work">
                See the work →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
