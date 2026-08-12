import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import ConsoleEgg from "@/components/ConsoleEgg";
import { site } from "@/data/site";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Abdu Murad — Full-Stack Engineer",
    template: "%s — Abdu Murad",
  },
  description:
    "Full-stack engineer. From the interface to the infrastructure.",
  openGraph: {
    siteName: "Abdu Murad",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Abdu Murad — Full-stack engineer. From the interface to the infrastructure.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdu Murad — Full-Stack Engineer",
    description:
      "Full-stack engineer. From the interface to the infrastructure.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        {children}
        <Footer />
        <CommandPalette />
        <ConsoleEgg />
      </body>
    </html>
  );
}
