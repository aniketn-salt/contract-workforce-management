import { cn } from "@/lib/utils";
import { SectionBadge } from "@/components/ui/section-badge";

type SectionHeaderProps = {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  theme?: "light" | "dark";
  badgeVariant?: "light" | "dark" | "white";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  headingId?: string;
};

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
  theme = "light",
  badgeVariant,
  className,
  titleClassName,
  descriptionClassName,
  headingId,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const resolvedBadgeVariant =
    badgeVariant ?? (theme === "dark" ? "dark" : "light");

  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        isCenter ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {badge ? (
        <SectionBadge label={badge} variant={resolvedBadgeVariant} />
      ) : null}
      <h2
        id={headingId}
        className={cn(
          "max-w-[1024px] font-heading text-h2 text-eilisys-primary-text",
          theme === "dark" && "text-eilisys-light-text",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-[768px] font-body text-body-2 text-eilisys-subtext",
            theme === "dark" && "text-eilisys-dark-subtext",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
