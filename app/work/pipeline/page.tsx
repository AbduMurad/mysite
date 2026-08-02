import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Secure File Ingest Pipeline",
  description:
    "Every uploaded document scanned, quarantined, and traceable before it lands.",
};

export default function Page() {
  return (
    <main id="main">
      <style>{`
/* the rejection is the only red on the page */
.reject{fill:rgba(218,54,51,.12);stroke:#DA3633}
.rejtext{fill:#DA3633}
.gate{fill:var(--accent-muted);stroke:var(--accent)}
`}</style>

      <section className="chead">
        <div className="wrap">
          <Link className="crumb" href="/#work">← Work</Link>
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>Client contract · deep dive</p>
          <h1>
            <span className="line"><span>Secure File</span></span>
            <span className="line"><span>Ingest Pipeline</span></span>
          </h1>
          <p className="tagline">Every uploaded document scanned, quarantined, and traceable before it lands.</p>
          <div className="meta">
            <span><b>ROLE</b>&nbsp; Architect and lead engineer</span>
            <span className="status"><b>STATUS</b>&nbsp;<span className="off" aria-hidden="true" /> Built — not deployed to production</span>
            <span><b>FOR</b>&nbsp; a regional information-security consultancy</span>
          </div>
          <ul className="chips">
            <li>NestJS</li><li>TypeScript</li><li>MinIO</li><li>Antivirus scanning</li><li>AWS S3</li><li>NATS JetStream</li><li>MongoDB</li><li>Kubernetes</li><li>Helm</li>
          </ul>
        </div>
      </section>

      {/* hero visual — a pipeline that visibly rejects something */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="dframe">
            <svg viewBox="0 0 920 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect className="node" x="30" y="90" width="120" height="48" rx="8" /><text className="dlabel" x="90" y="118" textAnchor="middle">Client</text>
              <path className="edge" id="s1" d="M150,114 L226,114" />
              <rect className="node" x="226" y="90" width="140" height="48" rx="8" /><text className="dlabel" x="296" y="112" textAnchor="middle">API Gateway</text><text className="dfaint" x="296" y="128" textAnchor="middle">→ document domain</text>
              <path className="edge" id="s2" d="M366,114 L442,114" />
              {/* scan gate */}
              <rect className="gate" x="442" y="82" width="128" height="64" rx="10" />
              <text className="dlabel" x="506" y="110" textAnchor="middle">Antivirus</text>
              <text className="dfaint" x="506" y="128" textAnchor="middle">scan gate</text>
              {/* clean path */}
              <path className="edge" id="s3" d="M570,114 L646,114" />
              <text className="dfaint" x="600" y="102" textAnchor="middle">clean</text>
              <rect className="node" x="646" y="90" width="130" height="48" rx="8" /><text className="dlabel" x="711" y="112" textAnchor="middle">MinIO</text><text className="dfaint" x="711" y="128" textAnchor="middle">S3-compatible, in-cluster</text>
              <path className="edge" id="s4" d="M776,114 L850,114" />
              <rect className="node" x="790" y="170" width="120" height="40" rx="8" transform="translate(-60 0)" />
              <text className="dlabel" x="790" y="195" textAnchor="middle">NATS</text>
              <path className="edge" d="M850,114 Q870,140 800,172" />
              <text className="dfaint" x="790" y="230" textAnchor="middle">file.uploaded →</text>
              <text className="dfaint" x="790" y="248" textAnchor="middle">analytics · ops · core</text>
              {/* reject path */}
              <path className="edge" id="sr" d="M506,146 L506,236" strokeDasharray="4 4" />
              <text className="rejtext" x="530" y="196" style={{ fontSize: "11px" }}>infected</text>
              <rect className="reject" x="426" y="240" width="160" height="52" rx="8" />
              <text className="rejtext" x="506" y="262" textAnchor="middle">✕ rejected</text>
              <text className="rejtext" x="506" y="280" textAnchor="middle" style={{ fontSize: "10.5px" }}>never stored</text>
              {/* two files loop the pipeline: one passes, one is rejected */}
              <circle className="pulse" r="4"><animateMotion dur="4s" repeatCount="indefinite" path="M150,114 L442,114 L570,114 L776,114 L850,114" /></circle>
              <circle className="pulse" r="4" style={{ fill: "#DA3633" }}><animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M150,114 L506,114 L506,236" /></circle>
              <text className="dfaint" x="90" y="320">Upload → Scan → Store → Notify — the storage write is gated on a clean verdict.</text>
            </svg>
            {/* mockup note — build version is pipeline-flow: two files loop, the second trips the gate, flashes red, and is removed. The rejection is the argument. The flash is the only red on this page — deliberately. */}
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>
            A compliance platform's core asset is uploaded evidence documents —
            which makes the upload path its largest attack surface. This
            service assumes every upload is infected until the scanner says
            otherwise.
          </p>
        </Reveal>
      </section>

      {/* recruiter view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For hiring managers</p></Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>
                The document domain owns upload, scanning, storage, and
                retrieval as one bounded context. Its architecture reflects a
                specific security stance: <strong>the storage write is not the first step, it's the last.</strong>
              </p>
              <p>
                An upload arrives at the gateway, is streamed to the document
                domain, and is held before it reaches durable storage. An antivirus engine —
                deployed into the cluster as its own Helm release rather than
                called as an external API — scans the payload. Only a clean
                result produces a write to MinIO and a <code>file.uploaded</code> event
                on NATS. An infected file never becomes a retrievable object.
              </p>
              <p>
                Storage is S3-compatible via MinIO running in-cluster, with AWS
                S3 used elsewhere in the platform. That choice keeps sensitive
                compliance evidence inside the cluster boundary while leaving
                the S3 API surface unchanged — the same client code works
                against either, so the decision is deployment-time rather than
                baked into the application.
              </p>
              <p>
                The <code>file.uploaded</code> event lets the rest of the
                platform react without coupling to this service: the analytics
                domain counts it, ops logs it, the core domain attaches it to
                the relevant control. None of them needs to know how storage
                works.
              </p>
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
              <p>
                For an ISO 27001 platform this is table stakes — an auditor
                will ask how uploaded evidence is protected, and "we scan every
                file before it's stored, and infected files never reach storage
                at all" is an answer auditors accept. Running the scanner
                inside the cluster also means document contents never leave the
                customer's infrastructure boundary, which matters when the
                documents <em>are</em> the security evidence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* hard problem */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The hard problem</p>
            <h2>Slow scans inside synchronous uploads</h2>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ marginInline: "auto" }}>
              <p>
                A virus scan takes real time, and holding an HTTP connection
                open through it means upload latency is bounded by the slowest
                scan — with timeouts on large files and no ability to scale
                scanning independently of ingest.
              </p>
              <p>
                The event-driven design keeps this tractable: the scan boundary
                is a decision, not a request/response call. Storage commits and
                downstream notification are decoupled from the client's
                connection through NATS, so the user-facing acknowledgement and
                the fan-out to the analytics, ops and core domains happen on
                different timelines. Scanning capacity scales as its own
                deployment.
              </p>
              <p>
                The ordering exists for one failure mode. If a file is written
                to storage <em>before</em> the scan result is known, then a
                crash between write and verdict leaves an unscanned object in a
                bucket the platform trusts — indistinguishable from a clean
                one. Ordering the pipeline so the storage write is gated on a
                clean verdict makes the dangerous state unrepresentable rather
                than merely unlikely.
              </p>
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
                <thead>
                  <tr><th>Decision</th><th>Bought</th><th>Paid</th></tr>
                </thead>
                <tbody>
                  <tr><td>Scan before storage write</td><td>An unscanned object can never exist in a trusted bucket</td><td>Upload latency bounded by scan time; a slow scanner degrades the whole ingest path</td></tr>
                  <tr><td>Antivirus in-cluster over a scanning API</td><td>Documents never leave the cluster boundary</td><td>The scanner and its signature database become mine to operate</td></tr>
                  <tr><td>Async fan-out via NATS</td><td>Ingest doesn't wait on analytics, logging or indexing</td><td>The client is acknowledged before downstream work completes — a failure there is invisible to the user</td></tr>
                  <tr><td>MinIO over direct S3</td><td>Same API, deployment-time choice, data stays local</td><td>Object storage becomes mine to operate</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div className="prose" style={{ margin: "var(--space-8) auto 0" }}>
              <p>
                The ordering is the sharpest trade-off. Writing to storage
                first would make uploads feel instant — and a crash between
                write and verdict would leave an unscanned file in a trusted
                bucket. For compliance evidence, slower uploads are the right
                price. <strong>Security properties that depend on cleanup running correctly are not security properties.</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="pipeline" />
    </main>
  );
}
