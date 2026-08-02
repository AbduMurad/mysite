import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deploys to GitHub Pages (abdumurad.com custom domain = no basePath).
  output: "export",
  trailingSlash: true,
  // No runtime image server in a static export. Sources are pre-optimized WebP
  // (portrait 63KB, screenshots ≤56KB); next-image-export-optimizer is the
  // planned upgrade if srcset variants become worth it (plan §2).
  images: { unoptimized: true },
};

export default nextConfig;
