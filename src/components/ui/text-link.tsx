import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  showArrow = false,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 font-heading text-base font-semibold text-eilisys-blue-highlight transition-colors hover:text-eilisys-primary-blue",
        className,
      )}
    >
      {children}
      {showArrow ? (
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </Link>
  );
}
