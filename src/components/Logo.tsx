import Image from "next/image";

export default function Logo({
  className = "",
  variant = "ink",
}: {
  className?: string;
  variant?: "ink" | "light";
}) {
  const blue = "#2957C8";
  const mint = "#A7E7D3";
  const text = variant === "light" ? "#F8FAFC" : "#0F172A";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <Image width={50} height={50} src={'/logo.png'} alt="Logo" />

      {/* Wordmark */}
      <div className="leading-none tracking-tight">
        <span
          className="font-semibold text-[22px] md:text-[30px]"
          style={{ color: text }}
        >
          Donga
        </span>
        <span
          className="ml-1 font-medium text-[22px] md:text-[30px] opacity-80"
          style={{ color: text }}
        >
          & Co.
        </span>
      </div>
    </div>
  );
}