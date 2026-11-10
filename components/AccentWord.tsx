interface AccentWordProps {
  children: React.ReactNode;
  /** Soft accent for dark backgrounds; dark accent for light backgrounds. */
  onDark?: boolean;
  className?: string;
}

/** One italic Instrument Serif accent word inside a light sans heading. */
export default function AccentWord({
  children,
  onDark = false,
  className = "",
}: AccentWordProps) {
  return (
    <em
      className={`font-serif italic font-normal ${
        onDark ? "text-accent-soft" : "text-accent-dark"
      } ${className}`}
    >
      {children}
    </em>
  );
}
