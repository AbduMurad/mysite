import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "ISMS Compliance Platform",
  description:
    "Multi-tenant SaaS that takes organizations through information-security certification — ISO 27001 and beyond.",
};

export default function Page() {
  return (
    <main id="main">
      <style>{`
/* app frame — screenshots */
.appframe{background:var(--bg-raised);border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-md)}
.af-bar{display:flex;align-items:center;gap:6px;height:36px;padding-inline:var(--space-4);border-bottom:1px solid var(--border)}
.af-bar i{width:8px;height:8px;border-radius:50%;background:var(--border-strong)}
.af-shot{position:relative;border-top:1px solid var(--border)}
.af-shot:first-of-type{border-top:0}
.af-shot img{width:100%;height:auto}
.af-cap{position:absolute;left:var(--space-4);bottom:var(--space-4);font-family:var(--font-mono);font-size:var(--text-xs);color:var(--text);background:rgba(10,10,11,.75);border:1px solid var(--border);border-radius:var(--radius-sm);padding:var(--space-1) var(--space-2)}
`}</style>

      {/* header */}
      <section className="chead">
        <div className="wrap">
          <Link className="crumb" href="/#work">← Work</Link>
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>Client contract · 2022 – 2026 · client since 2020</p>
          <h1>
            <span className="line"><span>ISMS Compliance</span></span>
            <span className="line"><span>Platform</span></span>
          </h1>
          <p className="tagline">Multi-tenant SaaS that takes organizations through information-security certification — ISO 27001 and beyond.</p>
          <div className="meta">
            <span><b>ROLE</b>&nbsp; Architect and lead engineer — all services</span>
            <span className="status"><b>STATUS</b>&nbsp;<span className="off" aria-hidden="true" /> Feature-complete — never deployed to production</span>
            <span><b>FOR</b>&nbsp; a regional information-security consultancy</span>
          </div>
          <ul className="chips">
            <li>NestJS</li><li>TypeScript</li><li>Angular</li><li>NATS JetStream</li><li>Kubernetes</li><li>Helm / Helmfile</li><li>MongoDB</li><li>Redis</li><li>MinIO</li><li>Antivirus scanning</li><li>Docker</li><li>Skaffold</li>
          </ul>
          <div className="mband">
            <span><b>7 services</b> + Angular SPA</span>
            <span><b>12</b> product modules</span>
            <span><b>6</b> infra components via Helmfile</span>
            <span>builds <b>120s → 1.2s</b></span>
            <span>images <b>60–90%</b> smaller</span>
          </div>
        </div>
      </section>

      {/* hero visual — topology (generic domains) */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="topo-frame">
            <svg className="topo topo-svg" viewBox="0 0 920 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path className="edge" id="e-spa" d="M460,66 L460,108" />
              <path className="edge" id="e-gw" d="M460,158 L460,220" />
              <path className="edge" id="e-1" d="M424,286 Q300,300 162,330" />
              <path className="edge" id="e-2" d="M436,296 Q360,340 282,414" />
              <path className="edge" id="e-3" d="M460,304 L460,438" />
              <path className="edge" id="e-4" d="M484,296 Q560,340 638,414" />
              <path className="edge" id="e-5" d="M496,286 Q620,300 758,330" />
              <path className="edge" id="e-6" d="M418,261 Q280,240 162,254" />
              <g className="tnode"><rect className="node" x="385" y="22" width="150" height="44" rx="8" /><text className="tlabel" x="460" y="48" textAnchor="middle">Angular SPA</text></g>
              <g className="tnode"><rect className="node" x="375" y="110" width="170" height="48" rx="8" /><text className="tlabel" x="460" y="139" textAnchor="middle">API Gateway</text></g>
              <g className="tnode"><circle className="core" cx="460" cy="262" r="42" /><text className="tlabel" x="460" y="258" textAnchor="middle">NATS</text><text className="tport" x="460" y="274" textAnchor="middle">JetStream</text></g>
              <g className="tnode"><rect className="node" x="30" y="232" width="132" height="44" rx="8" /><text className="tlabel" x="96" y="259" textAnchor="middle">User domain</text></g>
              <g className="tnode"><rect className="node" x="96" y="330" width="132" height="44" rx="8" /><text className="tlabel" x="162" y="357" textAnchor="middle">Core domain</text></g>
              <g className="tnode"><rect className="node" x="216" y="414" width="140" height="44" rx="8" /><text className="tlabel" x="286" y="441" textAnchor="middle">Document domain</text></g>
              <g className="tnode"><rect className="node" x="392" y="438" width="140" height="44" rx="8" /><text className="tlabel" x="462" y="465" textAnchor="middle">Analytics domain</text></g>
              <g className="tnode"><rect className="node" x="568" y="414" width="140" height="44" rx="8" /><text className="tlabel" x="638" y="441" textAnchor="middle">Support domain</text></g>
              <g className="tnode"><rect className="node" x="692" y="330" width="132" height="44" rx="8" /><text className="tlabel" x="758" y="357" textAnchor="middle">Ops domain</text></g>
              <text className="tfaint" x="460" y="540" textAnchor="middle">MongoDB · Redis · MinIO · antivirus</text>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-gw" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" begin="0.2s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-1" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" begin="0.5s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-2" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" begin="0.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-3" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" begin="0.35s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-4" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" begin="0.65s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-5" /></animateMotion></circle>
              <circle className="pulse" r="3"><animateMotion dur="1.2s" begin="0.95s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1"><mpath href="#e-6" /></animateMotion></circle>
            </svg>
            <ul className="topo-stack">
              <li>Angular SPA <span>front end</span></li>
              <li>API Gateway <span>single ingress</span></li>
              <li className="hub">NATS JetStream <span>event bus</span></li>
              <li>User domain <span>service</span></li>
              <li>Core domain <span>service</span></li>
              <li>Document domain <span>service</span></li>
              <li>Analytics domain <span>consumer</span></li>
              <li>Support domain <span>service</span></li>
              <li>Ops domain <span>consumer</span></li>
              <li>MongoDB · Redis · MinIO · antivirus <span>stores</span></li>
            </ul>
            {/* mockup note — in the build this is topology-scrub: pinned, assembling in three scroll stages. Domain names are deliberately generic; internals stay the client's. */}
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>A multi-tenant SaaS platform that guides organizations through ISO 27001 certification — seven independently deployable services communicating over an event bus, orchestrated on Kubernetes.</p>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--text)" }}>The client first hired me in 2020 to build their company website. Later they trusted me again — this time to build their core product on a microservices architecture.</p>
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
              <p><strong>I owned all of it:</strong> the architecture, the separation of the domains into services, the front end, and the deployment layer.</p>
              <p>The services deploy and fail independently. An API gateway is the single ingress point, authenticating requests and translating them into NATS subjects; backend services never expose themselves directly. Each service owns its own bounded context and publishes domain events (<code>user.created</code>, <code>project.updated</code>, <code>file.uploaded</code>) that other services subscribe to. The analytics and ops domains are pure consumers — they hold no write path of their own and rebuild their state entirely from the event stream.</p>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ maxWidth: "var(--container-text)", margin: "var(--space-8) auto" }}>
              <table>
                <thead><tr><th>Domain</th><th>Responsibility</th></tr></thead>
                <tbody>
                  <tr><td>API Gateway</td><td>Auth, validation, HTTP→NATS translation, WebSocket proxy</td></tr>
                  <tr><td>Analytics domain</td><td>Event-sourced dashboards and statistics</td></tr>
                  <tr><td>Domain services</td><td>Each owns the operations of its own bounded context — nothing reaches into another's data</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>Infrastructure is declarative end to end: NATS JetStream, MongoDB (replica set via the Community Operator), Redis, MinIO, an antivirus engine, and Ingress NGINX all managed through <code>helmfile</code>, with Skaffold providing hot-reload development against a live cluster.</p>
              <p><strong>Decisions, answered:</strong> event-driven over REST between services, because decoupled services absorb each other's downtime instead of cascading it. The gateway translates HTTP into NATS rather than proxying, so everything internal speaks one protocol and gets buffering and replay for free. The support domain keeps local read models, because a ticket query should never block on another service — the cost is reconciliation, paid deliberately. MinIO over S3 directly, because sensitive documents stay inside the cluster boundary while the S3 API keeps storage swappable.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* client view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For clients</p></Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>Information security management systems are document-heavy, evidence-heavy, deadline-driven work, and most organizations run them on spreadsheets and shared drives. This platform turns that into tracked work: standards decompose into projects, projects into tasks and required documents, and every action leaves an audit trail. Multi-tenancy means a consultancy can run many client organizations from one deployment without their data ever touching.</p>
              <p>The engagement started agile: weekly meetings, progress reviewed. Over time the client handed me the decisions and I led the build my own way, with a casual session when a design changed or a feature was added. By the final iteration the brief had widened beyond ISO tooling toward general project management, and the platform's workspace reflects that. The weekly reviews stopped because they stopped being needed.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* architecture note + screenshots */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Architecture</p>
            <h2>Why the gateway boundary matters</h2>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>The front end has no knowledge of the microservices or the broker. It talks only to the gateway, which means services can be split, merged, or rewritten without a single front-end change. This is what the extra complexity buys.</p>
            </div>
          </Reveal>
          <Reveal>
            <figure className="appframe" style={{ marginTop: "var(--space-8)" }}>
              <div className="af-bar" aria-hidden="true"><i /><i /><i /></div>
              <div className="af-shot clip"><img src="/images/isms/isms-monitoring.webp" alt="System monitoring screen: seven services reporting healthy with live response times" loading="lazy" /><span className="af-cap">system monitoring — 7 services healthy</span></div>
              <div className="af-shot clip"><img src="/images/isms/isms-workspace-dashboard.webp" alt="Multi-tenant workspace dashboard with projects, documents, tasks and charts over seeded data" loading="lazy" /><span className="af-cap">multi-tenant workspace</span></div>
              <div className="af-shot clip"><img src="/images/isms/isms-project-detail.webp" alt="ISO 27001 project detail with overview, controls and compliance tabs" loading="lazy" /><span className="af-cap">ISO 27001 project — controls & compliance</span></div>
              <div className="af-shot clip"><img src="/images/isms/isms-workspace-picker.webp" alt="Workspace picker: Admin Console and Project Workspace" loading="lazy" /><span className="af-cap">workspace entry</span></div>
              <figcaption className="figcap" style={{ padding: "var(--space-4)" }}>Live-system captures, July 2026 — running locally on Kubernetes via the platform's own Helm charts. Branding and tenant names redacted.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* hard problem */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The hard problem</p>
            <h2>Six services, consistent, without distributed transactions</h2>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>The support domain needs user and project data to render a ticket, but calling the user and core domains synchronously would couple all three — one slow service degrades the other two, and any outage cascades. The system instead has it subscribe to <code>user.*</code> and <code>project.*</code> events and maintain its own local read model. It answers every query from local state and never blocks on another service.</p>
              <p>The cost is eventual consistency, which has to be designed for up front: events must be idempotent, ordering can't be assumed, and a service restarting needs to catch up on everything it missed. That last requirement is why NATS runs in <strong>JetStream</strong> mode with a persistent <code>FileStore</code> — with a memory store, a pod restart silently loses the event log and consumers desynchronize permanently. That failure never shows up in development, and it can't be repaired in production.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* product */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The product</p>
            <h2>Twelve modules</h2>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>Twelve modules: Dashboard, Projects, Tasks, Documents, Meetings, Audits, Teams, Trainings, Templates, Support, Directory, Organization. Dark and light themes, and an EN/AR language toggle.</p>
              <p>The Documents module is where the domain expertise shows. It models real ISO 27001 artefacts — ISMS scope and boundaries, risk assessment methodology, statement of applicability mapping Annex A controls, access control procedures, incident management and business continuity plans — typed as Core Document, Methodology, Procedure, Plan, Guideline or Record, each moving through Draft → Review → Approved/Rejected. That taxonomy comes from four years inside the standard.</p>
              <p>Three primary flows: authentication and organization setup with 2FA and CASL-based abilities; document management from upload through virus scan, object storage and versioning; and audit management — create an audit, assign controls, attach evidence, export the report.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* honest status */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <div className="callout">
                <p className="eyebrow">Where it stands</p>
                <p>Feature-complete and demonstrably running with seeded data as of March 2026 — and stood up again in <strong>July 2026 on a local Kubernetes cluster via the platform's own Helm charts</strong>, multi-tenant seed data, monitoring and all. Still <strong>never deployed to production</strong>.</p>
                <p>In February 2026 I ran an <strong>agent-assisted production-readiness audit</strong> across all seven services — agentic tooling driving the codebase analysis and remediation planning under my direction. What it audited was my local development environment, measured against production standards, and it mapped the gap precisely: development defaults like single replicas and non-persistent stores, expired local certificates, secrets sitting in config. Remediation closed the part of that gap worth closing before a deployment exists — per-service secrets templated into each chart, the event store moved to persistent storage, certificates renewed. Auditing a dev environment against production standards is how you know the distance before you ship.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* delivery engineering */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">Delivery engineering</p>
            <h2>120 seconds to 1.2</h2>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>Alongside the architecture, a Docker build overhaul: multi-stage production builds, layer-cache mounts for npm, non-root container users, and Node 20. Measured result — <strong>incremental builds dropped from 120 seconds to 1.2 seconds</strong>, production images shrank 60–70%, and the frontend image shrank roughly 90% by serving through nginx instead of Node.</p>
            </div>
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
                  <tr><td>Event-driven over synchronous REST</td><td>Loose coupling; services survive each other's outages</td><td>Eventual consistency everywhere; no read-your-writes guarantee; debugging spans multiple logs</td></tr>
                  <tr><td>Gateway translates HTTP→NATS</td><td>One ingress, one auth boundary, services never exposed</td><td>Gateway becomes a single point of failure and a deployment bottleneck</td></tr>
                                    <tr><td>MongoDB across all services</td><td>One operational skill set; fast iteration</td><td>No cross-service joins, and compliance data is relational, which document modelling works against</td></tr>
                  <tr><td>MinIO in-cluster over managed S3</td><td>Evidence never leaves the cluster boundary</td><td>Object storage becomes mine to operate — backups, capacity, upgrades</td></tr>
                  <tr><td>Kubernetes from the start</td><td>Real horizontal scaling; declarative infrastructure</td><td>Heavy operational overhead</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ margin: "var(--space-8) auto 0" }}>
              <p>The platform's architecture was sound and its infrastructure ambition exceeded the environment available to run it. <strong>Given the same brief again, the right call is probably a modular monolith with the event boundaries drawn but not yet distributed</strong> — same design thinking, a fraction of the operational cost, and it would have shipped.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="isms" />
    </main>
  );
}
