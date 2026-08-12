import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Three-Site Showcase",
  description:
    "Three bilingual site demos — a PR firm, a media studio, and a summit with a working registration flow.",
};

export default function Page() {
  return (
    <main id="main">
      <section className="chead">
        <div className="wrap">
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>
            Spec build · August 2026
          </p>
          <h1>
            <span className="line">
              <span>Three-Site</span>
            </span>
            <span className="line">
              <span>Showcase</span>
            </span>
          </h1>
          <p className="tagline">
            Three bilingual site demos — a PR firm, a media studio, and a
            summit with a working registration flow — presented in one
            interactive viewer.
          </p>
          <div className="meta">
            <span>
              <b>ROLE</b>&nbsp; Sole designer &amp; developer
            </span>
            <span className="status">
              <b>STATUS</b>&nbsp;
              <span className="off" aria-hidden="true" /> Spec build — demos
              live
            </span>
            <span>
              <b>FOR</b>&nbsp; a prospective client · brands fictionalized
            </span>
          </div>
          <ul className="chips">
            <li>HTML</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>AR/EN · RTL</li>
            <li>Hash routing</li>
          </ul>
          <div className="mband">
            <span>
              <b>3</b> distinct art directions
            </span>
            <span>
              full <b>Arabic/English</b> with RTL mirroring
            </span>
            <span>
              registration flow with <b>reference numbers</b>
            </span>
          </div>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>
            An offer, delivered as working software instead of a slide deck:
            three interactive site previews in a device-frame viewer — switch
            between desktop, tablet, and mobile, flip each site to Arabic, and
            run the summit&apos;s registration flow end to end.
          </p>
        </Reveal>
      </section>

      {/* the work */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">What it demonstrates</p>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>
                Each demo is a self-contained page with hash routing, its own
                art direction, and full bilingual content — a light editorial
                look for the PR consultancy, a dark visual-first treatment for
                the media studio, and an event site for the summit with
                speakers, agenda, and a registration form that validates,
                confirms, and returns a reference number. The viewer wraps all
                three in scaled device frames with a persistent switcher.
              </p>
              <p>
                Built for a prospective client; the engagement didn&apos;t
                proceed. The demos stay — brands fictionalized, pricing removed
                — because the build is the point: this is what a proposal looks
                like when an engineer makes it.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <p
              style={{
                textAlign: "center",
                marginTop: "var(--space-8)",
              }}
            >
              <a className="btn btn-primary" href="/showcase/three-sites/">
                Open the live showcase ↗
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="three-sites" />
    </main>
  );
}
