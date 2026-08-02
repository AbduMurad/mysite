/** Evidence-weighted skills — the infographic's data (plan §4).
 *  Weight = number of linked case studies. No proficiency numbers, ever
 *  (locked no-invented-metrics rule). Every evidence entry is checkable:
 *  it links to a case study that shows the skill in use. */

export type Skill = {
  name: string;
  evidence: { slug: string; note: string }[];
};

export type Domain = { name: string; skills: Skill[] };

export const domains: Domain[] = [
  {
    name: "Backend & services",
    skills: [
      {
        name: "NestJS",
        evidence: [
          { slug: "isms", note: "seven services, one platform" },
          { slug: "v1-v2", note: "both architectural generations" },
          { slug: "pipeline", note: "the document domain service" },
          { slug: "proposal", note: "the generator's API" },
          { slug: "attendance", note: "terminal integration + API" },
        ],
      },
      {
        name: "TypeScript",
        evidence: [
          { slug: "isms", note: "end to end" },
          { slug: "v1-v2", note: "both generations" },
          { slug: "pipeline", note: "service + shared contracts" },
          { slug: "proposal", note: "API + prompt pipeline" },
          { slug: "attendance", note: "full stack" },
        ],
      },
      {
        name: "NATS JetStream",
        evidence: [
          { slug: "isms", note: "the platform's event bus" },
          { slug: "v1-v2", note: "the v2 backbone decision" },
          { slug: "pipeline", note: "file.uploaded events" },
        ],
      },
      {
        name: "REST & WebSocket APIs",
        evidence: [
          { slug: "isms", note: "gateway + service APIs" },
          { slug: "v1-v2", note: "single-ingress gateway design" },
          { slug: "attendance", note: "live dashboard updates" },
        ],
      },
      {
        name: "Hardware integration (UDP)",
        evidence: [
          { slug: "attendance", note: "fingerprint terminal protocol" },
        ],
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "Angular",
        evidence: [
          { slug: "isms", note: "the platform SPA" },
          { slug: "v1-v2", note: "the v2 client" },
          { slug: "attendance", note: "HR + employee dashboard" },
        ],
      },
      {
        name: "React / Next.js",
        evidence: [
          { slug: "v1-v2", note: "the v1 client (Next.js)" },
        ],
      },
    ],
  },
  {
    name: "Infrastructure & ops",
    skills: [
      {
        name: "Kubernetes + Helm / Helmfile",
        evidence: [
          { slug: "isms", note: "per-service releases" },
          { slug: "v1-v2", note: "Skaffold→Helmfile evolution" },
          { slug: "pipeline", note: "the scan engine as its own release" },
        ],
      },
      {
        name: "Docker",
        evidence: [
          { slug: "isms", note: "every service containerized" },
          { slug: "v1-v2", note: "builds cut 120s → 1.2s" },
          { slug: "pipeline", note: "scan gate in-cluster" },
          { slug: "attendance", note: "production containers" },
        ],
      },
      {
        name: "Proxmox virtualization",
        evidence: [
          { slug: "infrastructure", note: "bare metal to VMs, owned" },
        ],
      },
      {
        name: "Linux + Bash automation",
        evidence: [
          { slug: "infrastructure", note: "anything done twice gets scripted" },
          { slug: "attendance", note: "deploy + backup scripts" },
        ],
      },
      {
        name: "Backups & disaster recovery",
        evidence: [
          { slug: "infrastructure", note: "automated, offsite, restore-tested" },
        ],
      },
    ],
  },
  {
    name: "Data & messaging",
    skills: [
      {
        name: "MongoDB",
        evidence: [
          { slug: "isms", note: "per-service data ownership" },
          { slug: "v1-v2", note: "operator-managed in v2" },
        ],
      },
      {
        name: "Redis",
        evidence: [
          { slug: "isms", note: "caching + sessions" },
          { slug: "v1-v2", note: "managed infra component" },
        ],
      },
      {
        name: "MySQL",
        evidence: [{ slug: "attendance", note: "the system of record" }],
      },
      {
        name: "MinIO / S3",
        evidence: [
          { slug: "pipeline", note: "in-cluster object storage" },
          { slug: "isms", note: "document storage boundary" },
        ],
      },
      {
        name: "Event-driven architecture",
        evidence: [
          { slug: "isms", note: "services react, never call" },
          { slug: "v1-v2", note: "the entity→context rethink" },
          { slug: "pipeline", note: "notify without coupling" },
        ],
      },
    ],
  },
  {
    name: "Security",
    skills: [
      {
        name: "Scan-before-store pipelines",
        evidence: [
          { slug: "pipeline", note: "antivirus gate — infected files never land" },
        ],
      },
      {
        name: "ISO 27001 domain knowledge",
        evidence: [
          { slug: "isms", note: "the platform's whole subject" },
        ],
      },
      {
        name: "Secrets management",
        evidence: [
          { slug: "infrastructure", note: "self-hosted vault in production" },
        ],
      },
    ],
  },
  {
    name: "AI & tooling",
    skills: [
      {
        name: "Gemini / Vertex AI",
        evidence: [
          { slug: "proposal", note: "RFP analysis → drafted bids" },
        ],
      },
      {
        name: "Agent-assisted audits",
        evidence: [
          { slug: "isms", note: "production-readiness audit, 7 services" },
        ],
      },
    ],
  },
];

/* The "What's not here" gaps section was removed at Abdu's request (30 Jul 2026). */
