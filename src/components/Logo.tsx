export default function Logo({
  className = "",
  variant = "ink",
}: {
  className?: string;
  variant?: "ink" | "light";
}) {
  // The logo's signature bright blue
  const brand = "#1F8FCF";
  const wordmarkSecondary = variant === "light" ? "#FAFAF7" : "#0B3A5C";
  const triangle = variant === "light" ? "#0B3A5C" : "#0B3A5C";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Mark — quarter-circle (rotated D shape) with inner triangle, echoing the original */}
      <svg
        viewBox="0 0 48 48"
        className="h-8 w-8 md:h-9 md:w-9 shrink-0"
        aria-hidden
      >
        <path d="M4 4 H28 A20 20 0 0 1 28 44 H4 Z" fill={brand} />
        <path d="M9 9 L24 24 L9 24 Z" fill={triangle} />
      </svg>

      <span className="font-display text-[22px] md:text-[24px] tracking-tight leading-none">
        <span style={{ color: brand }}>Donga</span>
        <span style={{ color: wordmarkSecondary }}> & Co.</span>
      </span>
    </div>
  );
}
