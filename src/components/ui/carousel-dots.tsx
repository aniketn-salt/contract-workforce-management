"use client";

import { cn } from "@/lib/utils";

export type CarouselDotsProps = {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
  variant?: "light" | "dark";
  className?: string;
  ariaLabel?: string;
};

export function CarouselDots({
  total,
  activeIndex,
  onSelect,
  variant = "light",
  className,
  ariaLabel = "Carousel pagination",
}: CarouselDotsProps) {
  const inactiveClass =
    variant === "dark" ? "bg-white/30" : "bg-[#D0D5DD]";

  return (
    <div
      className={cn("flex items-center gap-3", className)}
      role="tablist"
      aria-label={ariaLabel}
    >
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          aria-label={`Slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className="flex h-2 w-5 items-center justify-center"
        >
          <span
            className={cn(
              "block h-5 w-2 rounded-full transition-colors duration-200",
              index === activeIndex
                ? "bg-[#ff3f00]"
                : inactiveClass,
            )}
          />
        </button>
      ))}
    </div>
  );
}
