"use client";
import { useEffect } from "react";
import { site } from "@/data/site";

export default function ConsoleEgg() {
  useEffect(() => {
    if ((window as unknown as Record<string, unknown>).__egg) return;
    (window as unknown as Record<string, unknown>).__egg = true;
    console.log(
      "%cabdu·murad",
      "font-family:monospace;font-size:20px;color:#C9A46A"
    );
    console.log(
      `Reading the console counts as due diligence.\nThe stack: Next.js static export, one champagne accent, no invented numbers.\nSay hi: ${site.email}`
    );
  }, []);
  return null;
}
