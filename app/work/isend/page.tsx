import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "iSend SMS Platform",
  description:
    "Self-hosted, multi-user SMS sending with quotas, 2FA, and an audit trail.",
};

export default function Page() {
  return (
    <main id="main">
      <section className="chead">
        <div className="wrap">
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>
            Employment — built within the current role · 2026
          </p>
          <h1>
            <span className="line">
              <span>iSend SMS</span>
            </span>
            <span className="line">
              <span>Platform</span>
            </span>
          </h1>
          <p className="tagline">
            Self-hosted, multi-user SMS sending with quotas, 2FA, and an audit
            trail.
          </p>
          <div className="meta">
            <span>
              <b>ROLE</b>&nbsp; Sole developer
            </span>
            <span className="status">
              <b>STATUS</b>&nbsp;
              <span className="on" aria-hidden="true" /> In production, serving
              real users
            </span>
            <span>
              <b>FOR</b>&nbsp; a humanitarian organization
            </span>
          </div>
          <ul className="chips">
            <li>Next.js</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Prisma</li>
            <li>SQLite</li>
            <li>NextAuth</li>
            <li>Tailwind CSS</li>
            <li>Vitest</li>
          </ul>
          <div className="mband">
            <span>
              sending gated by <b>TOTP 2FA</b>
            </span>
            <span>
              quotas <b>reserved upfront, refunded on failure</b>
            </span>
            <span>
              every action <b>audit-logged</b>
            </span>
          </div>
        </div>
      </section>

      {/* hero visual — the governance layer around a raw gateway */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="dframe">
            <svg viewBox="0 0 920 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect className="node" x={30} y={120} width={130} height={48} rx={8} />
              <text className="dlabel" x={95} y={148} textAnchor="middle">Browser</text>
              <path className="edge" d="M160,144 L230,144" />
              <rect className="core" x={230} y={62} width={300} height={168} rx={10} />
              <text className="dlabel" x={380} y={96} textAnchor="middle">The platform</text>
              <text className="dfaint" x={380} y={122} textAnchor="middle">auth + TOTP 2FA · per-user quotas</text>
              <text className="dfaint" x={380} y={142} textAnchor="middle">batch ledger · background status poller</text>
              <text className="dfaint" x={380} y={162} textAnchor="middle">encrypted credentials · kill-switch</text>
              <text className="dfaint" x={380} y={182} textAnchor="middle">immutable audit log</text>
              <path className="edge" d="M530,130 L640,130" />
              <text className="dfaint" x={585} y={118} textAnchor="middle">send, chunked</text>
              <path className="edge" d="M640,160 L530,160" strokeDasharray="4 4" />
              <text className="dfaint" x={585} y={180} textAnchor="middle">status, polled</text>
              <rect className="node" x={640} y={106} width={180} height={80} rx={8} />
              <text className="dlabel" x={730} y={140} textAnchor="middle">iSend gateway</text>
              <text className="dfaint" x={730} y={162} textAnchor="middle">isend.ly — third-party API</text>
              <text className="dfaint" x={95} y={260}>
                The gateway knows messages. The platform knows users, budgets, history, and accountability.
              </text>
            </svg>
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>
            A raw SMS gateway understands one sentence: send this text to these
            numbers. Everything an organization actually needs around that —
            accounts, budgets, history, accountability — doesn&apos;t exist.
            This platform supplies all of it on top of iSend (isend.ly), a
            third-party Libyan SMS provider — integrated purely through its
            public API.
          </p>
        </Reveal>
      </section>

      {/* recruiter view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">For hiring managers</p>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>
                <strong>
                  The architecture treats every send as spending real money,
                  because it is.
                </strong>{" "}
                Quota is reserved upfront inside the same transaction that
                creates the batch and its per-recipient message rows — then
                refunded per message or per chunk when the gateway rejects.
                There is no state where money moved and the ledger
                doesn&apos;t know.
              </p>
              <p>
                Recipient lists arrive as raw paste, CSV, or XLSX; numbers are
                normalized against a configurable country code, deduplicated,
                and chunked before the gateway ever sees them. A background
                poller streams delivery status back per message, throttled and
                deduplicated, so history pages show live progress without
                hammering the API.
              </p>
              <p>
                The security posture matches the stakes: TOTP 2FA is enforced
                the moment a live gateway credential exists, credentials are
                encrypted at rest and activated one at a time, a kill-switch
                stops all sending instantly, and every administrative action
                lands in an immutable audit log. Tests run on Vitest with the
                gateway mocked at the network boundary.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* client view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">For clients</p>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>
                Paste a list, pick a message, send — and see exactly what
                happened to every recipient, live. Administrators create users,
                set their budgets, and read the full history of who sent what,
                when. The organization owns the whole system on its own
                infrastructure; no per-seat SaaS, no data leaving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="isend" />
    </main>
  );
}
