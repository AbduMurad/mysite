import Link from "next/link";
import { bursts, certs, spineW, type Cert } from "@/data/certificates";

/** Certificates as designed book spines on shelves (plan §5).
 *  Spine thickness = real hours; no ratings, no invented anything.
 *  Pure CSS 3D — hover/focus pulls the book out and swings the cover into
 *  view; on touch/narrow screens the shelf becomes a vertical cascade of
 *  flat spines (the phone-native reading of "books on a shelf").
 *  Click → the cert's detail entry below (verification URLs pending —
 *  swapping to real links is a data-file edit).
 *  Geometry note: rectangles only. No triangles, closed or otherwise. */

function Book({ c, i }: { c: Cert; i: number }) {
  const w = spineW(c.hours);
  const h = 208 + (i % 3) * 8; // lived-in shelf, not machine-set
  const jitter = ((i * 7) % 3) - 1; // -1 | 0 | 1 deg
  return (
    <a
      className="book"
      href={`#cert-${c.id}`}
      style={
        {
          "--bw": `${w}px`,
          "--bh": `${h}px`,
          "--bj": `${jitter}deg`,
        } as React.CSSProperties
      }
    >
      <span className="book3d">
        <span className="bspine">
          <span className="bspine-title">{c.title}</span>
          <span className="bspine-hrs">{c.hours}h</span>
        </span>
        <span className="bcover" aria-hidden="true">
          <span className="bcover-meta">
            Udemy · {c.year} · {c.hours} hours
          </span>
          <span className="bcover-title">{c.title}</span>
          <span className="bcover-by">{c.instructor}</span>
          {c.became && (
            <span className="bcover-became">→ {c.became.note}</span>
          )}
          <span className="bcover-cta">details ↓</span>
        </span>
      </span>
    </a>
  );
}

export default function Bookshelf() {
  let idx = 0;
  return (
    <div className="shelves">
      {bursts.map((b) => (
        <div className="shelf-group" key={b.label}>
          <p className="shelf-label">
            <span>{b.label}</span>
            <span className="shelf-range">{b.range}</span>
          </p>
          <div className="shelf">
            {b.ids.map((id) => {
              const c = certs.find((x) => x.id === id)!;
              return <Book key={id} c={c} i={idx++} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export function CertDetails() {
  return (
    <ul className="certlist">
      {certs.map((c) => (
        <li key={c.id} id={`cert-${c.id}`} className="certrow">
          <span className="certrow-date">{c.date}</span>
          <span className="certrow-main">
            <strong>{c.title}</strong>
            <span className="certrow-by">
              {c.instructor} · {c.hours} hours
            </span>
          </span>
          <span className="certrow-became">
            {c.became ? (
              "slug" in c.became && c.became.slug ? (
                <Link href={`/work/${c.became.slug}/`}>{c.became.note} →</Link>
              ) : (
                c.became.note
              )
            ) : (
              <span className="certrow-quiet">stayed learning</span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}
