"use client";
import { useEffect, useRef } from "react";

/** Hero particle portrait (plan 09 §4.5) — the cutout photo sampled into a
 *  canvas particle field. One canvas, zero DOM nodes per particle (the
 *  renderer-freeze class of bug cannot exist here). rAF pauses when the hero
 *  leaves the viewport or the tab hides. Reduced motion: single static draw.
 *  Coarse pointers: ambient drift only, no pointer force. */

type P = {
  hx: number; // home
  hy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number; // alpha
  gold: boolean;
  ph: number; // drift phase
};

export default function ParticlePortrait() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    const narrow = matchMedia("(max-width: 900px)").matches;
    const dpr = Math.min(devicePixelRatio || 1, 2);

    let particles: P[] = [];
    let dust: P[] = [];
    let raf = 0;
    let running = false;
    let t = 0;
    const mouse = { x: -9999, y: -9999 };

    const IVORY = "245,242,236";
    const GOLD = "201,164,106";

    function size() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width, height };
    }

    function build(img: HTMLImageElement) {
      const { width, height } = size();
      if (width < 40 || height < 40) return;
      // fit image into the canvas box, anchored bottom-right-ish
      const scale = Math.min((width * 0.92) / img.width, (height * 0.96) / img.height);
      const iw = img.width * scale;
      const ih = img.height * scale;
      const ox = width - iw - width * 0.02;
      const oy = height - ih;

      const off = document.createElement("canvas");
      const step = narrow ? 6 : 4; // sampling grid (px in image space)
      off.width = Math.max(1, Math.round(img.width / step));
      off.height = Math.max(1, Math.round(img.height / step));
      const octx = off.getContext("2d")!;
      octx.drawImage(img, 0, 0, off.width, off.height);
      const data = octx.getImageData(0, 0, off.width, off.height).data;

      particles = [];
      for (let gy = 0; gy < off.height; gy++) {
        for (let gx = 0; gx < off.width; gx++) {
          const i = (gy * off.width + gx) * 4;
          const alpha = data[i + 3];
          if (alpha < 128) continue;
          const lum =
            (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) /
            255;
          const x = ox + ((gx * step) / img.width) * iw;
          const y = oy + ((gy * step) / img.height) * ih;
          particles.push({
            hx: x,
            hy: y,
            x: x + (Math.random() - 0.5) * 30,
            y: y + (Math.random() - 0.5) * 30,
            vx: 0,
            vy: 0,
            r: 0.5 + lum * 1.1,
            a: 0.25 + lum * 0.65,
            gold: Math.random() < 0.02,
            ph: Math.random() * Math.PI * 2,
          });
        }
      }
      // ambient dust
      dust = Array.from({ length: narrow ? 18 : 40 }, () => ({
        hx: Math.random() * width,
        hy: Math.random() * height,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        r: 0.6 + Math.random() * 1.2,
        a: 0.08 + Math.random() * 0.2,
        gold: Math.random() < 0.25,
        ph: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      for (const d of dust) {
        d.x += Math.sin(t * 0.0004 + d.ph) * 0.15;
        d.y -= 0.05 + Math.cos(t * 0.0003 + d.ph) * 0.05;
        if (d.y < -4) d.y = height + 4;
        ctx.fillStyle = `rgba(${d.gold ? GOLD : IVORY},${d.a})`;
        ctx.fillRect(d.x, d.y, d.r, d.r);
      }
      for (const p of particles) {
        // gentle home-drift
        const dx0 = Math.sin(t * 0.0006 + p.ph) * 0.6;
        const dy0 = Math.cos(t * 0.0005 + p.ph) * 0.6;
        let tx = p.hx + dx0;
        let ty = p.hy + dy0;
        if (fine) {
          const mx = p.x - mouse.x;
          const my = p.y - mouse.y;
          const d2 = mx * mx + my * my;
          if (d2 < 8100) {
            const d = Math.sqrt(d2) || 1;
            const f = ((90 - d) / 90) * 6;
            tx += (mx / d) * f * 10;
            ty += (my / d) * f * 10;
          }
        }
        p.vx = (p.vx + (tx - p.x) * 0.06) * 0.82;
        p.vy = (p.vy + (ty - p.y) * 0.06) * 0.82;
        p.x += p.vx;
        p.y += p.vy;
        ctx.fillStyle = `rgba(${p.gold ? GOLD : IVORY},${p.a})`;
        ctx.fillRect(p.x, p.y, p.r, p.r);
      }
    }

    function loop(now: number) {
      t = now;
      draw();
      if (running) raf = requestAnimationFrame(loop);
    }

    const start = () => {
      if (!running && !reduced) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const img = new Image();
    img.src = "/images/portrait/abdu-cutout.webp";
    img.onload = () => {
      build(img);
      if (reduced) {
        // static stipple render
        for (const p of particles) {
          p.x = p.hx;
          p.y = p.hy;
        }
        draw();
      } else {
        start();
      }
    };

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.05 }
    );
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (fine && !reduced) {
      // listen on window so the field reacts even though the canvas ignores pointer events
      addEventListener("pointermove", onMove, { passive: true });
      addEventListener("pointerleave", onLeave);
    }

    const onResize = () => {
      build(img);
      if (reduced) draw();
    };
    addEventListener("resize", onResize);

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerleave", onLeave);
      removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="hero-visual"
      aria-hidden="true"
      style={{ height: "100%" }}
    />
  );
}
