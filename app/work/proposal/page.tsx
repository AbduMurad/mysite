import type { Metadata } from "next";
import Link from "next/link";
import Accent from "@/components/Accent";
import Reveal from "@/components/Reveal";
import { PrevNext } from "@/components/Shared";

export const metadata: Metadata = {
  title: "AI Proposal Generator",
  description:
    "Reads your winning documents and drafts what you need next — a bid, a report, a summary.",
};

export default function Page() {
  return (
    <main id="main">
      <Accent color="#14B8A6" muted="rgba(20,184,166,.12)" />
      <style>{`
/* TTL ring on the cache chip */
.ttl{fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:126 42;opacity:.8}
.ttl{transform-origin:472px 178px;animation:ttlspin 60s linear infinite}
@keyframes ttlspin{to{transform:rotate(360deg)}}
@media(prefers-reduced-motion:reduce){.ttl{animation:none}}
`}</style>

      <section className="chead">
        <div className="wrap">
          <Link className="crumb" href="/#work">← Work</Link>
          <p className="eyebrow" style={{ marginTop: "var(--space-8)" }}>Employment — built within the current role · December 2025</p>
          <h1>
            <span className="line"><span>AI Proposal</span></span>
            <span className="line"><span>Generator</span></span>
          </h1>
          <p className="tagline">Reads your winning documents and drafts what you need next — a bid, a report, a summary.</p>
          <div className="meta">
            <span><b>ROLE</b>&nbsp; Sole developer of concept and application</span>
            <span className="status"><b>STATUS</b>&nbsp;<span className="off" aria-hidden="true" /> Delivered — late 2025</span>
            <span><b>FOR</b>&nbsp; a humanitarian organization</span>
          </div>
          <ul className="chips">
            <li>NestJS (TypeScript)</li>
            <li>Vertex AI — Gemini 2.0 Flash</li>
            <li>Context caching</li>
            <li>Google Cloud Storage</li>
            <li>Prisma + SQLite</li>
            <li>Docker</li>
            <li>Tailwind CSS</li>
          </ul>
          <div className="mband">
            <span>archive cached <b>server-side once</b> — not re-sent per query</span>
            <span>cache <b>1h TTL, refresh on demand</b></span>
            <span>RFP input: <b>PDF · scan · text</b></span>
          </div>
        </div>
      </section>

      {/* hero visual — the archive rides along */}
      <section className="section">
        <div className="wrap">
          <Reveal as="figure" className="dframe">
            <svg viewBox="0 0 920 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* archive stack */}
              <rect className="node" x="40" y="120" width="150" height="40" rx="6" transform="rotate(-3 115 140)" />
              <rect className="node" x="44" y="140" width="150" height="40" rx="6" />
              <rect className="node" x="48" y="160" width="150" height="40" rx="6" />
              <text className="dlabel" x="123" y="185" textAnchor="middle">winning proposals</text>
              <text className="dfaint" x="123" y="222" textAnchor="middle">GCS bucket — folder prefix = knowledge base</text>
              <path className="edge" id="p-in" d="M198,178 L360,178" />
              {/* cache chip */}
              <rect className="core" x="368" y="146" width="208" height="64" rx="10" />
              <circle className="ttl" cx="472" cy="178" r="26.7" style={{ opacity: 0.18 }} />
              <text className="dlabel" x="472" y="174" textAnchor="middle">context cache</text>
              <text className="dfaint" x="472" y="192" textAnchor="middle">Gemini 2.0 Flash · 1h TTL</text>
              {/* rfp in */}
              <rect className="node" x="368" y="40" width="208" height="44" rx="8" />
              <text className="dlabel" x="472" y="59" textAnchor="middle">RFP</text>
              <text className="dfaint" x="472" y="75" textAnchor="middle">PDF · scan · pasted text</text>
              <path className="edge" id="p-rfp" d="M472,84 L472,144" />
              {/* api */}
              <path className="edge" id="p-api" d="M576,178 L668,178" />
              <rect className="node" x="676" y="152" width="120" height="52" rx="8" />
              <text className="dlabel" x="736" y="182" textAnchor="middle">NestJS API</text>
              {/* outputs */}
              <path className="edge" d="M736,204 L736,236 L620,268" />
              <path className="edge" d="M736,204 L736,236 L852,268" />
              <rect className="node" x="508" y="272" width="224" height="56" rx="8" />
              <text className="dlabel" x="620" y="295" textAnchor="middle">compatibility verdict</text>
              <text className="dfaint" x="620" y="313" textAnchor="middle">matches + uniqueness rating</text>
              <rect className="node" x="756" y="272" width="150" height="56" rx="8" />
              <text className="dlabel" x="831" y="295" textAnchor="middle">drafted proposal</text>
              <text className="dfaint" x="831" y="313" textAnchor="middle">→ human review</text>
              {/* prompts */}
              <rect className="node" x="368" y="252" width="120" height="44" rx="8" strokeDasharray="3 4" />
              <text className="dfaint" x="428" y="271" textAnchor="middle">editable prompts</text>
              <text className="dfaint" x="428" y="287" textAnchor="middle">Prisma / SQLite</text>
              <path className="edge" d="M428,252 Q440,225 460,212" strokeDasharray="3 4" />
              {/* pulses: every query carries the cache */}
              <circle className="pulse" r="3">
                <animateMotion dur="1.6s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1">
                  <mpath href="#p-rfp" />
                </animateMotion>
              </circle>
              <circle className="pulse" r="3">
                <animateMotion dur="1.6s" begin=".8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;1" keySplines="0.65 0 0.35 1">
                  <mpath href="#p-api" />
                </animateMotion>
              </circle>
            </svg>
            {/* mockup note — build version: the document stack compresses into the chip (400ms), which docks and stays for the whole page; a 60-minute depletion ring makes the TTL visible. The chip's whole point: every query carries the archive. */}
          </Reveal>
        </div>
      </section>

      {/* hook */}
      <section className="section">
        <Reveal className="prose wrap">
          <p style={{ fontSize: "var(--text-lg)" }}>An organization's strongest asset when bidding for grants is every proposal it has ever won — and nobody rereads them. This tool loads that entire archive into the model's context, so every new RFP is assessed and drafted against the organization's actual track record instead of a blank page.</p>
        </Reveal>
      </section>

      {/* recruiter view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For hiring managers</p></Reveal>
          <Reveal className="prose">
            <p><strong>This is a working LLM product</strong>, one of the AI-integrated systems built at this organization.</p>
            <ol>
              <li><strong>The knowledge base</strong> — an archive of past winning proposal PDFs in a Google Cloud Storage bucket is loaded into a Vertex AI context cache (Gemini 2.0 Flash) on startup: 1-hour TTL, refreshed on demand, with graceful fallback to uncached generation if the cache can't be built.</li>
              <li><strong>Scoped corpora</strong> — GCS folder prefixes act as switchable knowledge bases; the operator picks which slice of the archive the model reasons over.</li>
              <li><strong>Two operations</strong> — a <em>compatibility check</em> ("list matching past proposals and rate the uniqueness of this new request") and <em>proposal generation</em> ("using the style and format of the cached archive, draft a new proposal"). Both prompts live in SQLite via Prisma and are editable in the UI — the operator tunes behaviour without a redeploy.</li>
              <li><strong>Multi-modal input</strong> — the RFP arrives as a PDF, a scanned image, or pasted text. In a region where tender documents are routinely scans, that matters.</li>
              <li><strong>Handover-shape</strong> — dockerized with seeded startup, a complete README, and automatic text-direction handling (<code>dir="auto"</code>) for mixed Arabic/English content.</li>
            </ol>
            <p><strong>It deliberately isn't RAG.</strong> The fashionable architecture in 2025 was a retrieval pipeline — chunking, embeddings, a vector store, tuned similarity thresholds. At this corpus size, that machinery has no payoff. Context caching keeps whole documents intact: style, structure, and the eligibility clauses buried in appendices stay in view. There is nothing to chunk, embed, or tune, and cached input tokens bill at a reduced rate.</p>
          </Reveal>
        </div>
      </section>

      {/* client view */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head"><p className="eyebrow">For clients</p></Reveal>
          <Reveal className="prose">
            <p>Winning grant and tender work is how the organization funds its programmes, and the bottleneck is human attention. The compatibility check answers "have we done something like this before, and how unusual is this request?" before anyone commits days of drafting. The generator then produces a first draft grounded in the organization's own winning style rather than the model's generic idea of a proposal. A person decides what to submit; the tool just gets a first draft onto the page.</p>
          </Reveal>
        </div>
      </section>

      {/* hard problem */}
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <p className="eyebrow">The hard problem</p>
            <h2>Matching the architecture to the corpus</h2>
          </Reveal>
          <Reveal className="prose">
            <p>The default assumption in 2025 was that grounding a model in documents means RAG. But a retrieval pipeline has real costs: a chunking strategy to design, embeddings to maintain, thresholds to tune — and chunking severs exactly what matters in proposals, where the winning <em>style</em> is a whole-document property and the clause that disqualifies a bid hides in an appendix. Context caching inverts the trade: the entire archive stays intact and visible to every query, at the price of a hard ceiling — the corpus must fit the model's context window, and the cache has a lifecycle to manage (TTL, refresh on archive change, a 1024-token minimum, and a fallback path when creation fails).</p>
            <p><strong>The second hard problem is trust.</strong> A fluent draft that misreads a mandatory eligibility criterion is dangerous. Grounding generation in the actual archive makes the output checkable against real past work, and a human makes the submission decision.</p>
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
                  <tr><td>Context caching over a RAG pipeline</td><td>Whole documents intact — style and buried clauses in view; nothing to chunk, embed, or tune; reduced-rate cached tokens</td><td>Corpus capped by the context window; hourly cache storage cost; an approach that stops scaling where RAG starts</td></tr>
                  <tr><td>Vertex AI over self-hosted</td><td>Managed model and caching, no GPU estate to run</td><td>Cloud dependency and per-query cost, in an organization that self-hosts everything else</td></tr>
                  <tr><td>Prompts as data, editable in UI</td><td>Operator tunes behaviour without a developer</td><td>No versioning beyond a timestamp; a bad edit changes production behaviour instantly</td></tr>
                  <tr><td>1-hour cache TTL, manual refresh</td><td>No invalidation logic to write; refresh is one endpoint call</td><td>Expiry isn't self-healing — after 60 minutes the cache must be re-initialized manually, a known v1 limitation</td></tr>
                  <tr><td>Draft, don't submit</td><td>Human catches misreadings before they cost a bid</td><td>The review remains; only the first draft is automated</td></tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <PrevNext slug="proposal" />
    </main>
  );
}
