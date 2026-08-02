"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects, site } from "@/data/site";

type Item = { label: string; hint: string; go: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const items: Item[] = useMemo(
    () => [
      { label: "Home", hint: "/", go: () => router.push("/") },
      ...projects.map((p) => ({
        label: p.short,
        hint: `/work/${p.slug}/`,
        go: () => router.push(`/work/${p.slug}/`),
      })),
      { label: "Skills", hint: "/skills/", go: () => router.push("/skills/") },
      { label: "About", hint: "/about/", go: () => router.push("/about/") },
      {
        label: "Learning",
        hint: "/learning/",
        go: () => router.push("/learning/"),
      },
      {
        label: "Email Abdu",
        hint: site.email,
        go: () => {
          location.href = `mailto:${site.email}`;
        },
      },
    ],
    [router]
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s
      ? items.filter((i) => i.label.toLowerCase().includes(s))
      : items;
  }, [q, items]);

  const close = useCallback(() => {
    setOpen(false);
    setQ("");
    setSel(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        close();
      }
    };
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="palette-backdrop"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <input
          ref={inputRef}
          className="palette-input"
          placeholder="Go to…"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setSel(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setSel((s) => Math.min(s + 1, filtered.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setSel((s) => Math.max(s - 1, 0));
            } else if (e.key === "Enter" && filtered[sel]) {
              filtered[sel].go();
              close();
            }
          }}
          aria-label="Search pages"
        />
        <ul className="palette-list" role="listbox">
          {filtered.map((i, idx) => (
            <li key={i.label} role="option" aria-selected={idx === sel}>
              <button
                className={`palette-item${idx === sel ? " sel" : ""}`}
                onMouseEnter={() => setSel(idx)}
                onClick={() => {
                  i.go();
                  close();
                }}
              >
                <span>{i.label}</span>
                <span className="palette-hint">{i.hint}</span>
              </button>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="palette-empty">Nothing matches.</li>
          )}
        </ul>
        <div className="palette-foot">
          <kbd>↑↓</kbd> navigate · <kbd>↵</kbd> open · <kbd>esc</kbd> close
        </div>
      </div>
    </div>
  );
}
