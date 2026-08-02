import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Rebuilding a Platform, v1 to v2",
  description:
    "Seven services rebuilt around the right boundaries — both architectures mine.",
};

export default function Page() {
  return (
    <main id="main">
      <style>{`
/* v1 nodes that merge into the v2 user domain get the accent tint (colour-matched, per motion-spec reduced-motion state) */
.merge{fill:var(--accent-muted);stroke:var(--accent)}
.vlabel{font-family:var(--font-mono);font-size:14px;fill:var(--text);letter-spacing:.08em}
`}</style>

      <section className="chead">
        <div className="wrap">
          <Link className="crumb" href="/#work">← Work</Link>
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>Client contract · 2022 – 2026</p>
          <h1>
            <span className="line"><span>Two generations.</span></span>
            <span className="line"><span>One architect.</span></span>
          </h1>
          <p className="tagline">Seven services rebuilt around the right boundaries — both architectures mine.</p>
          <div className="meta">
            <span><b>ROLE</b>&nbsp; Architect and lead engineer — both generations</span>
            <span className="status"><b>STATUS</b>&nbsp;<span className="off" aria-hidden="true" /> v1 superseded — v2 architecturally complete</span>
            <span><b>FOR</b>&nbsp; a regional information-security consultancy</span>
          </div>
          <ul className="chips">
            <li>NestJS</li><li>TypeScript</li><li>NATS</li><li>Kubernetes</li><li>Skaffold</li><li>Helmfile</li><li>MongoDB</li><li>Redis</li><li>React / Next.js</li><li>Angular</li>
          </ul>
          <div className="mband">
            <span>v1: <b>7 services</b>, split per entity</span>
            <span>v2: <b>7 services</b>, split by bounded context</span>
            <span>+ <b>6</b> managed infra components</span>
          </div>
        </div>
      </section>

      {/* hero visual — two decompositions, side by side */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="dframe">
            <svg viewBox="0 0 920 430" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* v1 panel */}
              <text className="vlabel" x="60" y="44">v1 — BY ENTITY</text>
              <rect className="node" x="60" y="66" width="330" height="40" rx="8" />
              <text className="dlabel" x="225" y="90" textAnchor="middle">client (Next.js)</text>
              {/* six small entity nodes; auth/users/entities tinted = they merge into the user domain */}
              <g><rect className="merge" x="60" y="140" width="98" height="36" rx="6" /><text className="dlabel" x="109" y="162" textAnchor="middle">auth</text></g>
              <g><rect className="merge" x="176" y="140" width="98" height="36" rx="6" /><text className="dlabel" x="225" y="162" textAnchor="middle">users</text></g>
              <g><rect className="merge" x="292" y="140" width="98" height="36" rx="6" /><text className="dlabel" x="341" y="162" textAnchor="middle">entities</text></g>
              <g><rect className="node" x="60" y="192" width="98" height="36" rx="6" /><text className="dlabel" x="109" y="214" textAnchor="middle">projects</text></g>
              <g><rect className="node" x="176" y="192" width="98" height="36" rx="6" /><text className="dlabel" x="225" y="214" textAnchor="middle">mail</text></g>
              <g><rect className="node" x="292" y="192" width="98" height="36" rx="6" /><text className="dlabel" x="341" y="214" textAnchor="middle">dashboard</text></g>
              {/* tangle: one action fans out */}
              <path className="edge" d="M109,176 L225,192" /><path className="edge" d="M225,176 L109,192" /><path className="edge" d="M341,176 L225,192" /><path className="edge" d="M109,176 L341,192" />
              <text className="dfaint" x="225" y="258" textAnchor="middle">one user-facing action → three or four services</text>
              <text className="dfaint" x="225" y="286" textAnchor="middle">Skaffold → kubectl → hand-written manifests</text>
              {/* divider arrow */}
              <path className="edge-accent" d="M420,210 L496,210" markerEnd="none" />
              <text className="vlabel" x="458" y="196" textAnchor="middle" style={{ fill: "var(--accent)" }}>→</text>
              {/* v2 panel */}
              <text className="vlabel" x="530" y="44">v2 — BY BOUNDED CONTEXT</text>
              <rect className="node" x="530" y="66" width="150" height="36" rx="8" /><text className="dlabel" x="605" y="88" textAnchor="middle">Angular SPA</text>
              <path className="edge" d="M680,84 L714,84" />
              <rect className="node" x="714" y="66" width="146" height="36" rx="8" /><text className="dlabel" x="787" y="88" textAnchor="middle">API Gateway</text>
              <path className="edge" d="M787,102 L787,128" />
              <circle className="core" cx="787" cy="162" r="32" /><text className="dlabel" x="787" y="158" textAnchor="middle">NATS</text><text className="dfaint" x="787" y="174" textAnchor="middle">JetStream</text>
              {/* six domain nodes, user domain tinted to match its v1 sources */}
              <g><rect className="merge" x="530" y="140" width="130" height="36" rx="6" /><text className="dlabel" x="595" y="162" textAnchor="middle">User domain</text></g>
              <g><rect className="node" x="530" y="192" width="130" height="36" rx="6" /><text className="dlabel" x="595" y="214" textAnchor="middle">Core domain</text></g>
              <g><rect className="node" x="530" y="244" width="130" height="36" rx="6" /><text className="dlabel" x="595" y="266" textAnchor="middle">Document domain</text></g>
              <g><rect className="node" x="676" y="216" width="130" height="36" rx="6" /><text className="dlabel" x="741" y="238" textAnchor="middle">Analytics domain</text></g>
              <g><rect className="node" x="676" y="268" width="130" height="36" rx="6" /><text className="dlabel" x="741" y="290" textAnchor="middle">Support domain</text></g>
              <g><rect className="node" x="730" y="320" width="130" height="36" rx="6" /><text className="dlabel" x="795" y="342" textAnchor="middle">Ops domain</text></g>
              <path className="edge" d="M660,158 L755,162" /><path className="edge" d="M660,210 Q740,190 758,180" /><path className="edge" d="M660,262 Q750,230 764,188" /><path className="edge" d="M741,216 L775,192" /><path className="edge" d="M760,268 L783,194" /><path className="edge" d="M795,320 L788,194" />
              <text className="dfaint" x="695" y="388" textAnchor="middle">Helmfile → operators (Mongo · Redis · MinIO · NATS · NGINX)</text>
              <text className="dfaint" x="225" y="388" textAnchor="middle">tinted nodes merge → one identity-owning domain</text>
            </svg>
            {/* mockup note — build version is morph-v1-v2: scroll-pinned, the tinted v1 nodes physically migrate and merge into the user domain while the rest regroup around the event bus. Shown here as the static side-by-side (the reduced-motion state). Domain names generic; internals stay the client's. */}
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>The same product, architected twice. The second version isn't bigger; it's decomposed along different lines. This page is about that difference.</p>
        </Reveal>
      </section>

      {/* recruiter view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For hiring managers</p></Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>Two generations of the same system are better evidence than one polished diagram: they show the decomposition was reasoned about.</p>
              <p><strong>v1</strong> split services roughly per entity — auth, users, entities, projects, mail, dashboard — deployed with Skaffold against raw <code>kubectl</code> manifests, with a React/Next.js front end.</p>
              <p><strong>v2</strong> splits by bounded context instead — the user domain absorbs auth, users, organizations, permissions and subscriptions into one service that owns identity end to end; the core domain owns the entire compliance workflow; the document, analytics, ops and support domains each own a capability rather than a table. Infrastructure moved from hand-written manifests to Helmfile-managed operators (MongoDB Community Operator, Redis Operator, MinIO Operator). The front end moved to Angular.</p>
              <p><strong>Where v1's shape came from:</strong> in May 2022 I completed Stephen Grider's <em>Microservices with Node JS and React</em>, which teaches exactly this stack: Node services, NATS, Skaffold, Kubernetes, decomposed per entity. v1 is that pattern applied to a real product, months later. v2 came from living with it.</p>
              <p>I took the pattern from a course, applied it to a real product, and mapped exactly where it stops working.</p>
              <p><strong>The lesson:</strong> v1's split followed the data model, which meant a single user-facing action fanned out across three or four services and every feature touched multiple repos. v2's split follows the <em>domain</em>, so most changes land in one service. Service boundaries drawn around entities produce distributed monoliths; boundaries drawn around business capabilities produce independently deployable systems.</p>
              <p>I only reached that conclusion by building the wrong version first.</p>
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
              <p>The rebuild cut the number of services a typical feature has to touch, replaced hand-maintained Kubernetes manifests with managed operators that handle backup and failover, and moved secrets out of version control. The result is a platform a team can extend without needing the original architect in the room.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* hard problem */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The hard problem</p>
            <h2>Knowing when to stop cutting</h2>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>The instinct in microservices is that smaller is better, and v1 followed it — a service per entity looks clean on a diagram. It fails because entities aren't independent: creating a user touches auth, users, and mail simultaneously, so three services deploy together, share a release cadence, and are microservices in name only.</p>
              <p>v2 asks a different question of every boundary: <em>can this service be deployed, scaled, and reasoned about alone?</em> The user domain is larger than any single v1 service, deliberately: identity is one bounded context, and splitting it produced coupling without buying independence. The question isn't how small services can be; it's where the seams hold under change.</p>
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
                  <tr><td>Rebuild rather than refactor v1</td><td>Clean boundaries; no legacy compromise carried forward</td><td>Months of work reproducing behaviour that already existed</td></tr>
                  <tr><td>Larger services in v2</td><td>Most changes land in one place; genuinely independent deploys</td><td>Less granular scaling; the user domain is now big enough to need internal structure of its own</td></tr>
                  <tr><td>Helmfile + operators over raw manifests</td><td>Backup, failover and upgrades handled by the operator</td><td>A new layer of abstraction to learn and debug when it misbehaves</td></tr>
                  <tr><td>React (v1) → Angular (v2)</td><td>Consistency with the rest of the client work</td><td>Replaced a working front end purely for consistency</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ margin: "var(--space-8) auto 0" }}>
              <p>The v1→v2 rebuild was the right architectural decision and an expensive one. A team under delivery pressure would likely have been better served by refactoring boundaries incrementally inside v1 — same destination without a rewrite, shipping throughout. The rewrite was affordable here because the platform wasn't yet serving users. That context makes the decision defensible.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="v1-v2" />
    </main>
  );
}
