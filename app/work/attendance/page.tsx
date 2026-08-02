import type { Metadata } from "next";
import Link from "next/link";
import Accent from "@/components/Accent";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Biometric Attendance Platform",
  description:
    "A fingerprint terminal, a legacy system to replace, and the discipline to ship both.",
};

export default function Page() {
  return (
    <main id="main">
      <Accent color="#388BFD" muted="rgba(56,139,253,.12)" />
      <style>{`
.frozen{opacity:.45}
.dash{stroke-dasharray:5 5}
.chan{stroke:var(--accent);stroke-width:2.5}
.fp{fill:none;stroke:var(--accent);opacity:.7}
.statusdot{fill:var(--accent)}
.statusdot{animation:pulse 2s ease-in-out infinite}
`}</style>

      <section className="chead">
        <div className="wrap">
          <Link className="crumb" href="/#work">
            ← Work
          </Link>
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>
            Employment — built within the current role · 2026, actively developed
          </p>
          <h1>
            <span className="line">
              <span>Biometric</span>
            </span>
            <span className="line">
              <span>Attendance Platform</span>
            </span>
          </h1>
          <p className="tagline">
            A fingerprint terminal, a legacy system to replace, and the
            discipline to ship both.
          </p>
          <div className="meta">
            <span>
              <b>ROLE</b>&nbsp; Sole developer, working with AI agents under
              direction
            </span>
            <span className="status">
              <b>STATUS</b>&nbsp;
              <span className="on" aria-hidden="true" /> In production — 2026
            </span>
            <span>
              <b>FOR</b>&nbsp; a humanitarian organization
            </span>
          </div>
          <ul className="chips">
            <li>NestJS (TypeScript)</li>
            <li>TypeORM + MySQL</li>
            <li>Angular</li>
            <li>pnpm monorepo</li>
            <li>ZKTeco terminal (UDP)</li>
            <li>Docker Compose</li>
            <li>nginx</li>
            <li>n8n</li>
          </ul>
          <div className="mband">
            <span>
              replaces a <b>legacy Django system</b> — acceptance gated on
              report parity over a week of live data
            </span>
          </div>
        </div>
      </section>

      {/* hero visual — one door to the device */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="dframe">
            <svg
              viewBox="0 0 920 400"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* BEFORE panel */}
              <text
                className="dlabel"
                x="60"
                y="40"
                style={{ letterSpacing: ".08em" }}
              >
                BEFORE — POLLING
              </text>
              <g className="frozen">
                <rect className="node" x="60" y="60" width="110" height="40" rx="6" />
                <text className="dlabel" x="115" y="84" textAnchor="middle">API</text>
                <rect className="node" x="60" y="112" width="110" height="40" rx="6" />
                <text className="dlabel" x="115" y="136" textAnchor="middle">dashboard</text>
                <rect className="node" x="60" y="164" width="110" height="40" rx="6" />
                <text className="dlabel" x="115" y="188" textAnchor="middle">admin actions</text>
                <path className="edge dash" d="M170,80 L330,150" />
                <path className="edge dash" d="M170,132 L330,152" />
                <path className="edge dash" d="M170,184 L330,156" />
                <rect className="node" x="330" y="122" width="96" height="64" rx="10" />
                <text className="dlabel" x="378" y="150" textAnchor="middle">terminal</text>
                <text className="dfaint" x="378" y="168" textAnchor="middle">"Working…"</text>
              </g>
              <text className="dfaint" x="243" y="232" textAnchor="middle">
                every sync brackets reads with disable/enable — the device
                freezes, for everyone
              </text>
              {/* AFTER panel */}
              <text
                className="dlabel"
                x="520"
                y="40"
                style={{ letterSpacing: ".08em" }}
              >
                AFTER — SINGLE OWNER
              </text>
              <rect className="node" x="520" y="60" width="110" height="40" rx="6" />
              <text className="dlabel" x="575" y="84" textAnchor="middle">API</text>
              <rect className="node" x="520" y="112" width="110" height="40" rx="6" />
              <text className="dlabel" x="575" y="136" textAnchor="middle">dashboard</text>
              <rect className="node" x="520" y="164" width="110" height="40" rx="6" />
              <text className="dlabel" x="575" y="188" textAnchor="middle">admin actions</text>
              <path className="edge" d="M630,80 L688,128" />
              <path className="edge" d="M630,132 L688,134" />
              <path className="edge" d="M630,184 L688,140" />
              <rect className="core" x="688" y="106" width="104" height="56" rx="8" />
              <text className="dlabel" x="740" y="130" textAnchor="middle">worker</text>
              <text className="dfaint" x="740" y="148" textAnchor="middle">owns the socket</text>
              <path className="chan" id="chan" d="M792,134 L848,134" />
              <rect
                className="node"
                x="848"
                y="106"
                width="60"
                height="56"
                rx="10"
                stroke="var(--accent)"
              />
              <circle className="statusdot" cx="878" cy="98" r="3" />
              <text className="dlabel" x="878" y="132" textAnchor="middle">device</text>
              {/* fingerprint rings */}
              <path className="fp" d="M866,150 a12 12 0 0 1 24 0" />
              <path className="fp" d="M870,150 a8 8 0 0 1 16 0" opacity=".45" />
              <text className="dfaint" x="714" y="232" textAnchor="middle">
                on-demand reads · boot recovery · tz-aware decode — the ONLY
                device connection
              </text>
              {/* lower flow */}
              <path className="edge" d="M740,162 L740,268" />
              <rect className="node" x="672" y="272" width="136" height="40" rx="8" />
              <text className="dlabel" x="740" y="296" textAnchor="middle">MySQL</text>
              <text className="dfaint" x="740" y="336" textAnchor="middle">
                nginx same-origin proxy · authenticated WebSockets · nightly
                mysqldump
              </text>
              <circle className="pulse" r="3">
                <animateMotion
                  dur="1.6s"
                  repeatCount="indefinite"
                  calcMode="spline"
                  keyTimes="0;1"
                  keySplines="0.65 0 0.35 1"
                >
                  <mpath href="#chan" />
                </animateMotion>
              </circle>
            </svg>
            {/* mockup note — build version animates the collision: dashed lines collide, the device shudders and greys (the freeze), then retracts to one solid channel. Shown here as the static before/after (the reduced-motion state). */}
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>
            The fingerprint terminal by the door looks like an appliance. It's
            a networked device with a fragile UDP protocol, and careless
            traffic freezes it for the whole office. This system replaced a
            legacy attendance stack with one built around that reality, and
            it's in production now.
          </p>
        </Reveal>
      </section>

      {/* recruiter view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">For hiring managers</p>
          </Reveal>
          <Reveal className="prose">
            <p>
              <strong>
                This is current, in-production, full-stack work with a hardware
                edge
              </strong>{" "}
              — the newest system in this portfolio, still under active
              development.
            </p>
            <ol>
              <li>
                <strong>
                  A real device driver problem, solved in two phases.
                </strong>{" "}
                The terminal froze on its "Working…" screen because every sync
                bracketed reads with disable/enable commands over a single
                fragile connection. The fix was architectural: device I/O moved
                to a single-owner, on-demand model — a worker process is the
                only thing in the system allowed to open a device socket; the
                API never does. Handshake failures close the socket instead of
                leaking it; a boot-time recovery pass handles whatever state
                the device was left in; device timestamps are decoded
                timezone-aware, with the terminal's unreliable clock auto-sync
                disabled.
              </li>
              <li>
                <strong>Session security.</strong> Refresh-token rotation with
                family detection — a stolen refresh token that gets reused
                revokes the whole token family. Idle timeout, secure-cookie
                handling behind an nginx same-origin proxy, and an
                environment-gated first-admin setup flow.
              </li>
              <li>
                <strong>Secrets encrypted at rest.</strong> SMTP credentials
                entered through the UI are encrypted in the database with a
                dedicated key — never stored in plaintext or env files.
              </li>
              <li>
                <strong>Operational shape.</strong> Compose stack with
                health-gated startup order (database → migrations → API/worker
                → web), a documented systemd alternative for Docker-averse
                hosts, nightly <code>mysqldump</code> cron, and real-time
                device-status indicators pushed to the dashboard over
                authenticated WebSockets.
              </li>
              <li>
                <strong>HR-grade features, localized.</strong> Flexible shift
                timing (floating check-out, split grace periods), weekends and
                holidays, localized reports, a timesheet builder,
                and a monthly report scheduler.
              </li>
            </ol>
            <p>
              <strong>How AI was involved:</strong> the build ran plan-first —
              five written implementation plans, executed by AI agents under my
              direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* client view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">For clients</p>
          </Reveal>
          <Reveal className="prose">
            <p>
              The old attendance system was unmaintained and starting to fail.
              The replacement had one hard requirement: acceptance is gated on
              the new system's reports matching the old one's over a week of
              live data. Staff clock in on the same terminal as before, and HR
              gets reports it can trust. The organization gets a system one
              person can operate and extend.
            </p>
          </Reveal>
        </div>
      </section>

      {/* hard problem */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The hard problem</p>
            <h2>A device that can't be replaced</h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              The terminal is closed hardware with a UDP protocol that has
              strict expectations: sockets leak on failed handshakes, the
              firmware locks up when reads are bracketed with disable/enable
              commands, and the clock reports the wrong timezone. Hardware
              like that punishes a shared polling loop — concurrent access is
              exactly what it can't tolerate.
            </p>
            <p>
              The redesign inverts control. One process owns the device.
              Everything else — the API, the dashboard, admin actions — asks
              that owner, on demand, and gets an answer or a queued action. The
              device goes from a shared resource to a serialized one with a
              recovery path. That's the same discipline as a database
              connection pool or a hardware bus arbiter, applied to a
              fingerprint reader by the door.
            </p>
            <p>
              <strong>
                The other hard problem was the replacement itself.
              </strong>{" "}
              A payroll-adjacent system can't be wrong during the cutover.
              Gating acceptance on report parity with the legacy system over
              live data made the migration safe to approve.
            </p>
          </Reveal>
        </div>
      </section>

      {/* trade-offs */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Trade-offs</p>
            <h2>What it cost</h2>
          </Reveal>
          <Reveal>
            <div style={{ maxWidth: "var(--container)", margin: "0 auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>Decision</th>
                    <th>Bought</th>
                    <th>Paid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Single-owner, on-demand device I/O</td>
                    <td>
                      Device access serialized; failures contained and
                      recoverable
                    </td>
                    <td>
                      Every device interaction pays a hop through the worker;
                      "live" data is as fresh as the last read
                    </td>
                  </tr>
                  <tr>
                    <td>Report parity as acceptance gate</td>
                    <td>Cutover backed by evidence</td>
                    <td>
                      The new system inherits the old one's report semantics,
                      including their quirks
                    </td>
                  </tr>
                  <tr>
                    <td>Secrets encrypted in DB (UI-managed)</td>
                    <td>
                      Operators rotate SMTP credentials without a deploy
                    </td>
                    <td>
                      Key management becomes your problem; a lost key orphans
                      the secrets
                    </td>
                  </tr>
                  <tr>
                    <td>Compose + documented systemd path</td>
                    <td>Runs on the org's Docker hosts and on bare metal</td>
                    <td>Two deployment paths to keep honest</td>
                  </tr>
                  <tr>
                    <td>MySQL + TypeORM</td>
                    <td>Boring and migratable</td>
                    <td>None worth arguing — I picked boring on purpose</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* honest status */}
      <section className="section">
        <div className="wrap">
          <Reveal className="prose">
            <div className="callout">
              <p className="eyebrow">Where it stands</p>
              <p>
                In production for the organization's staff, actively developed
                through July 2026. Built solo in the directing-engineer sense:
                the plans, the architecture, and the final say on every change
                are mine. A large share of the implementation was executed by
                AI agents against those plans.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="attendance" />
    </main>
  );
}
