"use client";
import { useState } from "react";
import Link from "next/link";
import { domains } from "@/data/skills";
import { bySlug } from "@/data/site";

/** Evidence-weighted grid (plan §4). Cell weight = linked case-study count —
 *  a real, checkable number. Tapping a cell opens its evidence panel inline
 *  (no floating popovers — works identically on touch and keyboard).
 *  No percentages, no bars, no levels. */

export default function SkillsGrid() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="skgrid">
      {domains.map((d) => {
        const openSkill = d.skills.find((s) => `${d.name}/${s.name}` === open);
        return (
          <div className="skdomain" key={d.name}>
            <h3 className="skdomain-name">{d.name}</h3>
            <div className="skcells" role="list">
              {d.skills.map((s) => {
                const key = `${d.name}/${s.name}`;
                const w = Math.min(s.evidence.length, 5);
                const isOpen = open === key;
                return (
                  <button
                    key={s.name}
                    role="listitem"
                    className={`skcell w${w}${isOpen ? " open" : ""}`}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : key)}
                  >
                    <span className="skname">{s.name}</span>
                    <span
                      className="skcount"
                      aria-label={`${s.evidence.length} linked ${
                        s.evidence.length === 1 ? "project" : "projects"
                      }`}
                    >
                      ×{s.evidence.length}
                    </span>
                  </button>
                );
              })}
            </div>
            {openSkill && (
              <div className="skpanel">
                <p className="skpanel-head">
                  {openSkill.name} — in the work:
                </p>
                <ul>
                  {openSkill.evidence.map((e) => (
                    <li key={e.slug}>
                      <Link href={`/work/${e.slug}/`}>
                        {bySlug(e.slug).short}
                      </Link>
                      <span> — {e.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
