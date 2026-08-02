import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Bookshelf, { CertDetails } from "@/components/Bookshelf";
import { totalHours } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Learned → Shipped",
  description:
    "20 certificates · 2020 – 2024 · three bursts. Each one links to the work it was used in; the ones that never made it into shipped work say so.",
};

export default function Learning() {
  return (
    <main id="main">
      <section className="chead">
        <div className="wrap">
          <p className="eyebrow">Learning</p>
          <h1>
            <span className="line">
              <span>Learned →</span>
            </span>
            <span className="line">
              <span>Shipped</span>
            </span>
          </h1>
          <p className="tagline">
            20 certificates · 2020 – 2024 · three bursts — 417.5 hours of
            deliberate study, each one below linked to the work it became.
          </p>
          <div className="mband">
            <span>
              <b>{totalHours}</b> hours total
            </span>
            <span>
              <b>20</b> certificates
            </span>
            <span>
              spine thickness = <b>hours</b> — the shelf is the data
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <Bookshelf />
          </Reveal>
          <p className="figcap" style={{ marginTop: "var(--space-6)" }}>
            Pull a book (hover or focus) to see its cover; select it to jump to
            the record below. Verification links land here once extracted.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The record</p>
            <h2>All twenty, dated</h2>
          </Reveal>
          <Reveal>
            <CertDetails />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
