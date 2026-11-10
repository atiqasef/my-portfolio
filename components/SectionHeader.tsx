import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  tag?: string;
  title: string | React.ReactNode;
  onDark?: boolean;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  onDark = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <FadeUp>
        {tag ? (
          <span
            className={`font-mono text-xs tracking-[0.14em] block mb-5 ${
              onDark ? "text-ondark-muted" : "text-ink-faint"
            }`}
          >
            {tag}
          </span>
        ) : null}
        <h2
          className={`font-display font-light text-[clamp(2.25rem,5vw,3.75rem)] tracking-tight leading-[1.08] ${
            onDark ? "text-ondark" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </FadeUp>
    </div>
  );
}
