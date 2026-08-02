import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SkillsGrid from "@/components/SkillsGrid";

export const metadata: Metadata = {
  title: "Skills, with evidence",
  description:
    "Every skill mapped to where it was used. Where evidence is thin, it says so.",
};

export default function Skills() {
  return (
    <main id="main">
      <section className="chead">
        <div className="wrap">
          <p className="eyebrow">Skills</p>
          <h1>
            <span className="line">
              <span>Skills,</span>
            </span>
            <span className="line">
              <span>with evidence</span>
            </span>
          </h1>
          <p className="tagline">
            Each skill&apos;s weight is the number of case studies it appears
            in — every one linked, every one checkable. No self-rated bars, no
            percentages. Where evidence is thin, the cell says so.
          </p>
          <div className="meta">
            <span>
              <b>READ IT AS</b>&nbsp; bigger cell = more shipped work behind it
            </span>
            <span>
              <b>TAP A CELL</b>&nbsp; to see exactly where
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <SkillsGrid />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <p
              style={{
                marginTop: "var(--space-8)",
                color: "var(--text-muted)",
                maxWidth: "70ch",
              }}
            >
              The profile has three parts that cover each other: architectural
              work that stayed pre-production, operations that are live right
              now, and working LLM products.
            </p>
            <p style={{ marginTop: "var(--space-6)" }}>
              <Link className="link-quiet" href="/#work">
                The work itself →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
