import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="foot-links">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.github} rel="noopener">
            GitHub ↗
          </a>
          <a href={site.linkedin} rel="noopener">
            LinkedIn ↗
          </a>
        </div>
        <small>Designed and built by Abdu Murad · © 2026</small>
      </div>
    </footer>
  );
}
