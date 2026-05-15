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
      <Image width={180} height={180} src={'/logo.png'} alt="Logo" />
    </div>
  );
}