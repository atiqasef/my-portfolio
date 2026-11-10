import FadeUp from "./FadeUp";

interface SectionHeaderProps {
  tag: string;
  title: string | React.ReactNode;
}

export default function SectionHeader({ tag, title }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-14">
      <FadeUp>
        <span className="font-mono text-xs text-accent tracking-[0.12em] block mb-4">
          {tag}
        </span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-ink">
          {title}
        </h2>
        <div className="w-10 h-0.5 bg-accent mt-4" />
      </FadeUp>
    </div>
  );
}
