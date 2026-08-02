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
                    l.match && pathname.startsWith(l.match) ? "active" : undefined
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
        </nav>
      </div>
    </header>
  );
}
