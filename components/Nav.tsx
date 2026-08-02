"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work", match: null },
  { href: "/skills/", label: "Skills", match: "/skills" },
  { href: "/about/", label: "About", match: "/about" },
  { href: "/learning/", label: "Learning", match: "/learning" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  // close the overlay on route change; lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-in">
        <Link className="wordmark" href="/">
          abdu<b>·</b>murad
        </Link>
        <nav aria-label="Main">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={
                    l.match && pathname.startsWith(l.match)
                      ? "active"
                      : undefined
                  }
                  aria-current={
                    l.match && pathname.startsWith(l.match) ? "page" : undefined
                  }
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="nav-cta" href="/#contact">
                Contact
              </Link>
            </li>
          </ul>
          <button
            className="mnav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "close" : "menu"}
          </button>
        </nav>
      </div>
      {open && (
        <div className="mnav-overlay">
          <ul>
            {links.map((l, i) => (
              <li key={l.label} style={{ transitionDelay: `${i * 40}ms` }}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ transitionDelay: "160ms" }}>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
