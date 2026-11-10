/** Inline SVG icons — no external icon library. */

import type { ReactElement } from "react";

type IconProps = { className?: string; size?: number };

const defaults = { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: 1.6 } as const;

export function IconHtml({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 3h16l-1.5 17L12 22 5.5 20 4 3z" strokeLinejoin="round" />
      <path d="M8.5 9h7l-.4 4.2H10l.2 2.2h4.2L14 18.2 12 18.8l-2-.6-.2-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCss({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M4 3h16l-1.5 17L12 22 5.5 20 4 3z" strokeLinejoin="round" />
      <path d="M8.5 9h7M9 13h5.5M10.2 17.2 12 17.8l1.8-.6.3-2.6H10l.2 2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconJs({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M11 8v7.2c0 1.2-.5 1.8-1.5 1.8-.7 0-1.2-.3-1.5-.8M14 12.5c.3-.5.9-.9 1.6-.9 1 0 1.7.6 1.7 1.7 0 1.6-2.3 1.4-2.3 2.8 0 .5.4.9 1 .9.7 0 1.2-.4 1.5-.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconReact({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function IconNext({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 8v8M9 8h2.2c1.8 0 3 1.1 3 3s-1.2 3-3 3H9M14.5 16l2.5-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconNode({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3.5 19 7.5v9l-7 4-7-4v-9l7-4z" strokeLinejoin="round" />
      <path d="M12 12v8.5M12 12 5.5 8.2M12 12l6.5-3.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconMongo({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3c2.5 3 4.5 6.2 4.5 10.2 0 3.2-1.8 5.3-4.5 7.3-2.7-2-4.5-4.1-4.5-7.3C7.5 9.2 9.5 6 12 3z" strokeLinejoin="round" />
      <path d="M12 14v6" strokeLinecap="round" />
    </svg>
  );
}

export function IconFirebase({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6.5 17.5 9 5l3.2 5.8L15 4.5l2.5 13H6.5z" strokeLinejoin="round" />
      <path d="M6.5 17.5 12 20.5l5.5-3" strokeLinejoin="round" />
    </svg>
  );
}

export function IconTailwind({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M6.5 12c1.5-4 3.5-6 6-6 2.5 0 3.5 1.5 5 1.5 1.2 0 2.2-.7 3.5-2-1.5 4-3.5 6-6 6-2.5 0-3.5-1.5-5-1.5-1.2 0-2.2.7-3.5 2zM3 17c1.5-4 3.5-6 6-6 2.5 0 3.5 1.5 5 1.5 1.2 0 2.2-.7 3.5-2-1.5 4-3.5 6-6 6-2.5 0-3.5-1.5-5-1.5-1.2 0-2.2.7-3.5 2z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPayments({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 14h3" strokeLinecap="round" />
    </svg>
  );
}

export function IconGit({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="7" r="2" />
      <circle cx="12" cy="17" r="2" />
      <path d="M7 9v3.5c0 1.5 1 2.5 2.5 2.5H12M17 9v2c0 1.5-1 2.5-2.5 2.5H12" strokeLinecap="round" />
    </svg>
  );
}

export function IconTs({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5h5M10.5 10.5V17M14 13.2c.3-.4.8-.7 1.4-.7.9 0 1.5.5 1.5 1.4 0 1.3-1.9 1.2-1.9 2.4 0 .4.3.7.8.7.6 0 1.1-.3 1.3-.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPostgres({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <ellipse cx="12" cy="7" rx="7" ry="3.2" />
      <path d="M5 7v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2V7M5 12v5c0 1.8 3.1 3.2 7 3.2s7-1.4 7-3.2v-5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDocker({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 13.5h13.5v3.2c0 1.3-3 2.3-6.8 2.3S3 18 3 16.7v-3.2zM5 13.5V11h2.2v2.5M8 13.5V11h2.2v2.5M11 13.5V11h2.2v2.5M8 11V8.5h2.2V11M11 11V8.5h2.2V11M16.5 13.5c1.5 0 3.5-.4 4.5-1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function IconAws({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M5 15.5c2.5 2 5.2 3 9.5 3 3.2 0 5.7-.8 7-2" strokeLinecap="round" />
      <path d="M8 5.5 11.5 16h1.8L17 5.5M9.2 12.5h4.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFullstack({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="12" width="18" height="8" rx="1.5" />
      <path d="M7 7h2M7 16h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconApi({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M8 8 4.5 12 8 16M16 8l3.5 4L16 16M13.2 6l-2.4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGlobe({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" strokeLinecap="round" />
    </svg>
  );
}

export function IconCalendar({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" strokeLinecap="round" />
    </svg>
  );
}

export function IconPin({ className, size = 20 }: IconProps) {
  return (
    <svg {...defaults} width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}

const skillMap: Record<string, (p: IconProps) => ReactElement> = {
  html: IconHtml,
  css: IconCss,
  js: IconJs,
  react: IconReact,
  next: IconNext,
  node: IconNode,
  mongo: IconMongo,
  firebase: IconFirebase,
  tailwind: IconTailwind,
  payments: IconPayments,
  git: IconGit,
  ts: IconTs,
  postgres: IconPostgres,
  docker: IconDocker,
  aws: IconAws,
  fullstack: IconFullstack,
  api: IconApi,
};

export function SkillIcon({ name, className, size }: { name: string } & IconProps) {
  const Comp = skillMap[name] ?? IconGlobe;
  return <Comp className={className} size={size} />;
}
