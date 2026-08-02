import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Self-Hosted Infrastructure",
  description:
    "Architecting, building and running the technology stack a working organization depends on.",
};

export default function Page() {
  return (
    <main id="main">
      <style>{`
/* rack diagram specifics */
.rack .svc{fill:var(--bg-overlay);stroke:var(--border-strong)}
.rack .up{fill:var(--status-ok)}
.rack .up{animation:pulse 2s ease-in-out infinite}
`}</style>

      <section className="chead">
        <div className="wrap">
          <Link className="crumb" href="/#work">← Work</Link>
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>Employment — current role · mid-2024 – present</p>
          <h1>
            <span className="line"><span>Self-Hosted</span></span>
            <span className="line"><span>Infrastructure</span></span>
          </h1>
          <p className="tagline">Architecting, building and running the technology stack a working organization depends on.</p>
          <div className="meta">
            <span><b>ROLE</b>&nbsp; Technical owner — architecture, build, deployment, operations</span>
            <span className="status"><b>STATUS</b>&nbsp;<span className="on" aria-hidden="true" /> In production, serving real users</span>
            <span><b>FOR</b>&nbsp; a humanitarian organization</span>
          </div>
          <ul className="chips">
            <li>Proxmox</li><li>Frappe / ERPNext</li><li>n8n</li><li>Asterisk</li><li>FreePBX</li><li>KoboToolbox</li><li>Bitwarden</li><li>Dokploy</li><li>RustDesk</li><li>Bash</li><li>cron</li><li>Linux</li>
          </ul>
          <div className="mband">
            <span><b>8</b> self-hosted services in production</span>
            <span>backups <b>automated, offsite</b></span>
            <span>restore path <b>exercised on every migration</b></span>
          </div>
        </div>
      </section>

      {/* hero visual — the stack that's alive */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="dframe">
            <svg className="rack" viewBox="0 0 920 470" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="20" y="20" width="880" height="330" rx="14" fill="none" stroke="var(--accent)" opacity=".7" />
              <text className="dlabel" x="44" y="50">Proxmox — bare metal</text>
              <text className="dfaint" x="44" y="68">VMs · networking · backups · upgrades — all owned</text>
              {/* service cards row 1 */}
              <g><rect className="svc" x="44" y="92" width="196" height="64" rx="8" /><circle className="up" cx="60" cy="110" r="3" /><text className="dlabel" x="74" y="114">Frappe / ERPNext</text><text className="dfaint" x="74" y="134">operations</text></g>
              <g><rect className="svc" x="256" y="92" width="196" height="64" rx="8" /><circle className="up" cx="272" cy="110" r="3" /><text className="dlabel" x="286" y="114">n8n</text><text className="dfaint" x="286" y="134">workflow automation</text></g>
              <g><rect className="svc" x="468" y="92" width="196" height="64" rx="8" /><circle className="up" cx="484" cy="110" r="3" /><text className="dlabel" x="498" y="114">Asterisk / FreePBX</text><text className="dfaint" x="498" y="134">telephony</text></g>
              <g><rect className="svc" x="680" y="92" width="196" height="64" rx="8" /><circle className="up" cx="696" cy="110" r="3" /><text className="dlabel" x="710" y="114">Dokploy</text><text className="dfaint" x="710" y="134">self-hosted PaaS</text></g>
              {/* scripts spine */}
              <path className="edge" id="spine" d="M142,156 L142,196 L776,196 L776,156" />
              <path className="edge" d="M354,156 L354,196" />
              <path className="edge" d="M566,156 L566,196" />
              <rect className="svc" x="330" y="180" width="260" height="32" rx="8" />
              <text className="dlabel" x="460" y="200" textAnchor="middle">custom scripts & integrations</text>
              <text className="dfaint" x="460" y="232" textAnchor="middle">Bash · cron · web apps</text>
              {/* row 2 */}
              <g><rect className="svc" x="44" y="252" width="196" height="64" rx="8" /><circle className="up" cx="60" cy="270" r="3" /><text className="dlabel" x="74" y="274">KoboToolbox</text><text className="dfaint" x="74" y="294">field data collection</text></g>
              <g><rect className="svc" x="256" y="252" width="196" height="64" rx="8" /><circle className="up" cx="272" cy="270" r="3" /><text className="dlabel" x="286" y="274">Bitwarden</text><text className="dfaint" x="286" y="294">secrets</text></g>
              <g><rect className="svc" x="468" y="252" width="196" height="64" rx="8" /><circle className="up" cx="484" cy="270" r="3" /><text className="dlabel" x="498" y="274">RustDesk</text><text className="dfaint" x="498" y="294">remote support</text></g>
              <g><rect className="svc" x="680" y="252" width="196" height="64" rx="8" /><circle className="up" cx="696" cy="270" r="3" /><text className="dlabel" x="710" y="274">web apps</text><text className="dfaint" x="710" y="294">programme sites & tools</text></g>
              {/* below the host */}
              <path className="edge" d="M460,350 L460,386" />
              <text className="dlabel" x="460" y="410" textAnchor="middle">Programme websites & web applications</text>
              <path className="edge-accent" id="bk" d="M760,350 Q820,392 870,430" strokeDasharray="3 5" />
              <text className="dfaint" x="712" y="446">offsite backups — scripts + Dokploy → cloud</text>
              {/* slow automation pulses (3s — deliberately slower than the ISMS page) */}
              <circle className="pulse" r="3"><animateMotion dur="3s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#spine" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#bk" /></animateMotion></circle>
            </svg>
            {/* mockup note — build version animates per the page's creative direction: services stagger in, automation pulses on a slow 3000ms loop, ambient uptime dots. No invented uptime numbers. */}
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>
            An organization with no dedicated ops team.
            Virtualization, ERP, telephony, automation, and every internal web
            application, in production for the people who rely on them daily.
          </p>
        </Reveal>
      </section>

      {/* recruiter view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For hiring managers</p></Reveal>
          <Reveal className="prose">
            <p>
              <strong>Scope: technical owner.</strong> Architecture, build,
              deployment and operations — with no dedicated ops or platform
              team behind it.
            </p>
            <p>
              <strong>Virtualization and hosting.</strong> Everything runs on
              Proxmox — bare-metal virtualization, meaning the machines, the
              VMs, the networking, the backups, and the upgrades are all owned.
              Not a managed platform; the hard parts are mine. Dokploy provides
              a self-hosted PaaS layer for application deployment on top.
            </p>
            <p>
              <strong>ERP.</strong> Deployed and maintained Frappe/ERPNext, and
              wrote installation scripts to make the deployment repeatable.
              Frappe is a notoriously involved install; the script means the
              deployment can be rebuilt after a failure instead of being a
              one-off.
            </p>
            <p>
              <strong>Telephony.</strong> Custom applications and scripts
              integrating with Asterisk and FreePBX, both to extract
              operational data from the phone system and to streamline the work
              of the operators using it. Most web developers never touch a
              phone system.
            </p>
            <p>
              <strong>Automation.</strong> n8n for workflow automation, plus
              cron jobs and shell scripts across multiple servers for scheduled
              operations. This layer decides whether the stack runs itself or
              needs someone watching it.
            </p>
            <p>
              <strong>Data collection.</strong> KoboToolbox — the standard
              humanitarian data-collection platform, used across the sector for
              field surveys and needs assessments.
            </p>
            <p>
              <strong>Security and support.</strong> Self-hosted Bitwarden for
              credential management, RustDesk for remote support.
            </p>
            <p>
              <strong>Applications.</strong> Websites and web applications
              built, architected and maintained across the organization's
              programmes. One public-facing site among them was built on a
              purchased template. The claim here is the infrastructure, not
              that site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* client view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For clients</p></Reveal>
          <Reveal className="prose">
            <p>
              Self-hosting turns recurring per-seat licence costs into
              hardware and one engineer's time — if someone can operate it.
              That operating capability is what this page demonstrates.
            </p>
            <p>
              The result: an ERP system, a phone system, workflow automation,
              secure credential management, field data collection, and the
              organization's web presence, all running on infrastructure the
              organization owns outright, with no vendor able to raise prices
              or discontinue a product they depend on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* hard problem */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The hard problem</p>
            <h2>Being the entire operations team</h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              Eight production services, and no second person to catch a
              mistake before it reaches users. Every update has to land without
              breaking the systems that depend on it.
            </p>
            <p>
              <strong>Backups are automated and offsite</strong> — the compute
              may sit on one machine; the data never does.
            </p>
            <p>
              That forces a discipline a larger team never has to develop:
              <strong> anything done twice gets scripted</strong>, anything
              that depends on someone remembering gets automated, and every
              change to a live, stateful system is planned before it's made.
            </p>
          </Reveal>
        </div>
      </section>

      {/* restore path */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Backups</p>
            <h2>The restore path is exercised, not assumed</h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              <strong>Backups are automated, offsite, and restore-tested.</strong> On
              top of scheduled verification, every migration and upgrade is
              performed by restoring from backup — so the recovery path is
              proven against real data each time the infrastructure changes,
              not just when a test says so. If a restore fails, it fails
              visibly, long before an emergency needs it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* what breaking looks like */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Incidents</p>
            <h2>What breaking looks like here</h2>
          </Reveal>
          <Reveal className="prose">
            <p>
              Incidents in this environment aren't exotic: a mobile-signal
              coverage drop takes telephony quality down, or a power cut
              reboots a host and the operator panel doesn't come back on boot.
              The fix for the second is service supervision and start-order
              dependencies, so the next power cut passes without incident.
              Infrastructure work here means designing for an environment where
              electricity and signal are part of the threat model, not just
              disks and processes.
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
                <thead><tr><th>Decision</th><th>Bought</th><th>Paid</th></tr></thead>
                <tbody>
                  <tr><td>Self-hosting over SaaS</td><td>Costs collapse; full data control; no vendor lock-in</td><td>Every outage is mine; upgrades are my job</td></tr>
                  <tr><td>Self-hosted compute, cloud backup</td><td>Durability that survives losing the building, without paying for hosted compute</td><td>An ongoing cloud cost</td></tr>
                  <tr><td>Restore as the migration mechanism</td><td>The recovery path is continuously proven against real data</td><td>Migrations take as long as a restore takes — a slow restore is felt every time</td></tr>
                  <tr><td>Proxmox bare metal over cloud</td><td>Cheapest per unit of compute; no egress fees</td><td>No managed failover; hardware is a real risk</td></tr>
                  <tr><td>Frappe/ERPNext over custom build</td><td>Mature ERP feature set for free</td><td>Heavy system to operate; customization fights the framework</td></tr>
                  <tr><td>n8n over bespoke scripts</td><td>Non-developers can read and modify workflows</td><td>Another service to host and keep running</td></tr>
                  <tr><td>Ownership concentrated in one engineer</td><td>Fast decisions, deep system knowledge</td><td><strong>A concentration of risk — and most of it points at me</strong></td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ margin: "var(--space-8) auto 0" }}>
              <p>
                A single-owner infrastructure works until the owner is
                unavailable. Repeatable installation scripts and automated
                offsite backups are real mitigation — the system can be rebuilt
                and the data survives — but neither solves one person holding
                the operating knowledge.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose" style={{ margin: "var(--space-8) auto 0" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                Certified alongside this role: Solution Architect · UML & OO
                Design · Clean Code · Application Security — 125.5 hours,
                Jan–Jun 2024. <Link href="/learning/" style={{ color: "var(--accent)" }}>The full record →</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="infrastructure" />
    </main>
  );
}
