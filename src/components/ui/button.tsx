import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
};

const variantStyles = {
  primary:
    "bg-eilisys-primary-blue text-eilisys-white hover:bg-[#3a7ae8] active:bg-[#2f6fd9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eilisys-primary-blue",
  outline:
    "border border-eilisys-primary-blue bg-transparent text-eilisys-primary-blue hover:bg-eilisys-light-blue-bg active:bg-[#dbeafe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-eilisys-primary-blue",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm font-heading font-semibold leading-6 gap-2",
  md: "px-6 py-3 text-base font-heading font-semibold leading-6 gap-2",
  lg: "px-6 py-3 text-lg font-heading font-semibold leading-7 gap-2",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  showArrow = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-sm)] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
      {showArrow ? (
        <ArrowRight className="size-5 shrink-0" aria-hidden="true" />
      ) : null}
    </button>
  );
}
