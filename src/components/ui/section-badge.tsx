import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  label: string;
  variant?: "light" | "dark" | "white";
  className?: string;
};

export function SectionBadge({
  label,
  variant = "light",
  className,
}: SectionBadgeProps) {
  const variantStyles = {
    light:
      "border-eilisys-blue-badge-border bg-eilisys-light-blue-bg",
    dark: "border-[rgba(43,108,176,0.56)] bg-eilisys-light-blue-bg",
    white: "border-[rgba(43,108,176,0.24)] bg-eilisys-white",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-5 py-3",
        variantStyles[variant],
        className,
      )}
    >
      <span
        className="size-2 shrink-0 rotate-90 bg-eilisys-orange-highlight"
        aria-hidden="true"
      />
      <span className="font-heading text-sm leading-5 text-eilisys-primary-text">
        {label}
      </span>
    </div>
  );
}
