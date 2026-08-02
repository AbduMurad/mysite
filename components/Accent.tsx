/** Per-page accent — server component emitting a style tag after the global
 *  sheet, so var(--accent)/var(--accent-muted) cascade site-wide for the route.
 *  One accent per viewport (design-system rule) — pages set exactly one. */
export default function Accent({
  color,
  muted,
}: {
  color: string;
  muted: string;
}) {
  return (
    <style>{`:root{--accent:${color};--accent-muted:${muted}}`}</style>
  );
}
