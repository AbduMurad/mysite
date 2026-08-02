/** Monochrome brand marks in fanned tiles — color comes from currentColor via
 *  CSS mask, never from the asset (locked media rule). SVGs are copied from
 *  the simple-icons npm package into /public/logos at dev/build time. */
export default function LogoFan({
  marks,
}: {
  marks: { slug: string; title: string }[];
}) {
  return (
    <span className="logofan" aria-hidden="true">
      {marks.map((m) => (
        <span key={m.slug} className="logofan-tile" title={m.title}>
          <span
            className="logofan-mark"
            style={{
              width: 26,
              height: 26,
              WebkitMaskImage: `url(/logos/${m.slug}.svg)`,
              maskImage: `url(/logos/${m.slug}.svg)`,
            }}
          />
        </span>
      ))}
    </span>
  );
}
