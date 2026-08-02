import type { ReactNode } from "react";
import Link from "next/link";
import { prevNext } from "@/data/site";

/* Layout primitives — all placement flows through these (plan §3.3). */

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      {children}
    </section>
  );
}

export function Wrap({
  children,
  prose = false,
  className = "",
}: {
  children: ReactNode;
  prose?: boolean;
  className?: string;
}) {
  return (
    <div className={`${prose ? "prose wrap" : "wrap"} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: ReactNode;
  title?: ReactNode;
}) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      {title && <h2>{title}</h2>}
    </div>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="chips">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}

export function MetricBand({
  items,
}: {
  items: { b: string; rest: string; pre?: string }[];
}) {
  return (
    <div className="mband">
      {items.map((m, i) => (
        <span key={i}>
          {m.pre ? `${m.pre} ` : ""}
          <b>{m.b}</b> {m.rest}
        </span>
      ))}
    </div>
  );
}

export function StatusDot({ live }: { live: boolean }) {
  return (
    <span className="status">
      <span className={live ? "on" : "off"} aria-hidden="true" />{" "}
      {live ? "In production, serving real users" : undefined}
    </span>
  );
}

export function PrevNext({ slug }: { slug: string }) {
  const { prev, next } = prevNext(slug);
  return (
    <nav className="pn wrap" aria-label="More work">
      <Link href={`/work/${prev.slug}/`}>
        <small>← Previous</small>
        <p className="pn-t">{prev.short}</p>
      </Link>
      <Link href={`/work/${next.slug}/`} className="next">
        <small>Next →</small>
        <p className="pn-t">{next.short}</p>
      </Link>
    </nav>
  );
}
