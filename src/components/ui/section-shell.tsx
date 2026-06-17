import { cn } from "@/lib/utils";

export type SectionShellProps = {
  id?: string;
  ariaLabelledby?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  background?: "white" | "cream" | "light-blue" | "dark";
};

const backgroundStyles = {
  white: "bg-eilisys-white",
  cream: "bg-eilisys-cream-bg",
  "light-blue": "bg-eilisys-light-blue-surface",
  dark: "bg-eilisys-dark-bg",
};

export function SectionShell({
  id,
  ariaLabelledby,
  children,
  className,
  innerClassName,
  background = "white",
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "px-[var(--section-x)] py-[var(--section-y)]",
        backgroundStyles[background],
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-[var(--content-inner)]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
