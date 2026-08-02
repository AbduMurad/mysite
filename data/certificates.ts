/** 20 certificates, 417.5 hours, three bursts (04-CERTIFICATES.md).
 *  Hours are real numbers — they size the book spines on /learning.
 *  Verification URLs pending extraction; books link to their detail anchors
 *  until then (swap is a data edit). No ratings, no invented anything. */

export type Cert = {
  id: string;
  n: number;
  date: string;
  year: number;
  title: string;
  hours: number;
  instructor: string;
  became?: { slug: string; note: string } | { note: string };
};

export const certs: Cert[] = [
  { id: "laravel", n: 1, date: "23 Jun 2020", year: 2020, title: "PHP with Laravel for Beginners", hours: 43, instructor: "Edwin Diaz" },
  { id: "zero-mastery", n: 2, date: "2 Oct 2020", year: 2020, title: "The Complete Web Developer: Zero to Mastery", hours: 35, instructor: "Andrei Neagoie" },
  { id: "js-advanced", n: 3, date: "9 Oct 2020", year: 2020, title: "JavaScript: The Advanced Concepts", hours: 25, instructor: "Andrei Neagoie" },
  { id: "css-sass", n: 4, date: "23 Oct 2020", year: 2020, title: "Advanced CSS and Sass: Flexbox, Grid, Animations", hours: 28, instructor: "Jonas Schmedtmann" },
  { id: "gatsby", n: 5, date: "26 Nov 2020", year: 2020, title: "Gatsby Fundamentals", hours: 4, instructor: "Philip Sparks" },
  { id: "react-complete", n: 6, date: "16 Oct 2021", year: 2021, title: "Complete React Developer (Redux, Hooks, GraphQL)", hours: 42, instructor: "Neagoie / Zhang" },
  { id: "electron", n: 7, date: "14 Jan 2022", year: 2022, title: "Electron for Desktop Apps", hours: 8, instructor: "Stephen Grider" },
  { id: "microservices", n: 8, date: "15 May 2022", year: 2022, title: "Microservices with Node JS and React", hours: 54.5, instructor: "Stephen Grider", became: { slug: "isms", note: "became the platform, v1" } },
  { id: "microfrontends", n: 9, date: "22 May 2022", year: 2022, title: "Microfrontends with React", hours: 9, instructor: "Stephen Grider" },
  { id: "typescript", n: 10, date: "6 Jun 2022", year: 2022, title: "TypeScript: The Complete Developer's Guide", hours: 24.5, instructor: "Stephen Grider", became: { note: "every project since" } },
  { id: "nestjs", n: 11, date: "13 Jun 2022", year: 2022, title: "NestJS: The Complete Developer's Guide", hours: 19.5, instructor: "Stephen Grider", became: { slug: "isms", note: "all seven platform services" } },
  { id: "mean", n: 12, date: "24 Jan 2024", year: 2024, title: "Angular & NodeJS — The MEAN Stack Guide", hours: 12.5, instructor: "Maximilian Schwarzmüller", became: { note: "a campaign build (spec) + org products" } },
  { id: "angular-nest", n: 13, date: "12 Feb 2024", year: 2024, title: "Angular and NestJS: A Rapid Guide — Advanced", hours: 9, instructor: "Antonio Papa", became: { slug: "attendance", note: "the attendance platform" } },
  { id: "solution-architect", n: 14, date: "16 Feb 2024", year: 2024, title: "How To Become An Outstanding Solution Architect", hours: 8, instructor: "Mark Farragher", became: { slug: "v1-v2", note: "became the v2 redesign" } },
  { id: "angular-bootcamp", n: 15, date: "21 Mar 2024", year: 2024, title: "The Modern Angular Bootcamp", hours: 45.5, instructor: "Stephen Grider", became: { slug: "isms", note: "the platform front end" } },
  { id: "digital-banking", n: 16, date: "23 Mar 2024", year: 2024, title: "Digital Banking — Masterclass & Fintech", hours: 9.5, instructor: "Rian Chapman" },
  { id: "sql", n: 17, date: "17 May 2024", year: 2024, title: "Complete SQL and Databases Bootcamp", hours: 24.5, instructor: "Neagoie / Binni" },
  { id: "clean-code", n: 18, date: "21 May 2024", year: 2024, title: "Write Clean Code: 20 Code Smells", hours: 6, instructor: "Lauro Fialho Müller" },
  { id: "uml", n: 19, date: "22 May 2024", year: 2024, title: "UML and Object-Oriented Design Foundations", hours: 2, instructor: "Karoly Nyisztor" },
  { id: "appsec", n: 20, date: "4 Jun 2024", year: 2024, title: "Application Security — The Complete Guide", hours: 8, instructor: "Derek Fisher", became: { slug: "pipeline", note: "became the file pipeline" } },
];

export const totalHours = 417.5;

export const bursts: { label: string; range: string; ids: string[] }[] = [
  {
    label: "Foundations",
    range: "2020 – 2021",
    ids: ["laravel", "zero-mastery", "js-advanced", "css-sass", "gatsby", "react-complete"],
  },
  {
    label: "The platform toolkit",
    range: "2022",
    ids: ["electron", "microservices", "microfrontends", "typescript", "nestjs"],
  },
  {
    label: "Depth on demand",
    range: "2024",
    ids: ["mean", "angular-nest", "solution-architect", "angular-bootcamp", "digital-banking", "sql", "clean-code", "uml", "appsec"],
  },
];

/** spine thickness from real hours (px at desktop) */
export const spineW = (hours: number) =>
  Math.round(Math.min(96, 34 + hours * 1.1));
