"use client";
import { useRef } from "react";

/** The platform topology — generic bounded-context labels only (locked rule 9).
 *  Hover-dim toggles classes from JS, never `:has(:hover)`: moving SMIL pulses
 *  under a `:has` selector caused a style-recalc storm that froze the renderer.
 *  Pulses carry pointer-events:none for the same reason.
 *  The <ul> below is the diagram's accessible/mobile equivalent. */

const NODES = [
  { label: "Angular SPA", rect: { x: 385, y: 22, w: 150, h: 44 }, tx: 460, ty: 48 },
  { label: "API Gateway", rect: { x: 375, y: 110, w: 170, h: 48 }, tx: 460, ty: 139 },
  { label: "User domain", rect: { x: 30, y: 232, w: 132, h: 44 }, tx: 96, ty: 259 },
  { label: "Core domain", rect: { x: 96, y: 330, w: 132, h: 44 }, tx: 162, ty: 357 },
  { label: "Document domain", rect: { x: 216, y: 414, w: 140, h: 44 }, tx: 286, ty: 441 },
  { label: "Analytics domain", rect: { x: 392, y: 438, w: 140, h: 44 }, tx: 462, ty: 465 },
  { label: "Support domain", rect: { x: 568, y: 414, w: 140, h: 44 }, tx: 638, ty: 441 },
  { label: "Ops domain", rect: { x: 692, y: 330, w: 132, h: 44 }, tx: 758, ty: 357 },
];

const EDGES = [
  { id: "e-spa", d: "M460,66 L460,108" },
  { id: "e-gw", d: "M460,158 L460,220" },
  { id: "e-1", d: "M424,286 Q300,300 162,330" },
  { id: "e-2", d: "M436,296 Q360,340 282,414" },
  { id: "e-3", d: "M460,304 L460,438" },
  { id: "e-4", d: "M484,296 Q560,340 638,414" },
  { id: "e-5", d: "M496,286 Q620,300 758,330" },
  { id: "e-6", d: "M418,261 Q280,240 162,254" },
];

const PULSES = ["e-gw", "e-1", "e-2", "e-3", "e-4", "e-5", "e-6"];
const BEGINS = ["0s", "0.2s", "0.5s", "0.8s", "0.35s", "0.65s", "0.95s"];

export default function Topology() {
  const svgRef = useRef<SVGSVGElement>(null);

  const hot = (on: boolean) => (e: React.MouseEvent<SVGGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.classList.toggle("dim", on);
    e.currentTarget.classList.toggle("hot", on);
  };

  return (
    <>
      <svg
        ref={svgRef}
        className="topo topo-svg"
        viewBox="0 0 920 560"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {EDGES.map((e) => (
          <path key={e.id} className="edge" id={e.id} d={e.d} />
        ))}
        {NODES.map((n) => (
          <g
            key={n.label}
            className="tnode"
            onMouseEnter={hot(true)}
            onMouseLeave={hot(false)}
          >
            <rect
              className="node"
              x={n.rect.x}
              y={n.rect.y}
              width={n.rect.w}
              height={n.rect.h}
              rx={8}
            />
            <text className="tlabel" x={n.tx} y={n.ty} textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}
        <g className="tnode" onMouseEnter={hot(true)} onMouseLeave={hot(false)}>
          <circle className="core" cx={460} cy={262} r={42} />
          <text className="tlabel" x={460} y={258} textAnchor="middle">
            NATS
          </text>
          <text className="tport" x={460} y={274} textAnchor="middle">
            JetStream
          </text>
        </g>
        <text className="tfaint" x={460} y={540} textAnchor="middle">
          MongoDB · Redis · MinIO · antivirus
        </text>
        {PULSES.map((edge, i) => (
          <circle key={edge} className="pulse" r={3}>
            <animateMotion
              dur="1.2s"
              begin={BEGINS[i]}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.65 0 0.35 1"
            >
              <mpath href={`#${edge}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
      <ul className="topo-stack">
        <li>
          Angular SPA <span>front end</span>
        </li>
        <li>
          API Gateway <span>single ingress</span>
        </li>
        <li className="hub">
          NATS JetStream <span>event bus</span>
        </li>
        <li>
          User domain <span>service</span>
        </li>
        <li>
          Core domain <span>service</span>
        </li>
        <li>
          Document domain <span>service</span>
        </li>
        <li>
          Analytics domain <span>consumer</span>
        </li>
        <li>
          Support domain <span>service</span>
        </li>
        <li>
          Ops domain <span>consumer</span>
        </li>
        <li>
          MongoDB · Redis · MinIO · antivirus <span>stores</span>
        </li>
      </ul>
    </>
  );
}
