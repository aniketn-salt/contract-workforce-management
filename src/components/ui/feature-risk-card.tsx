"use client";

import { cn } from "@/lib/utils";

export type BusinessRisk = {
  id: string;
  title: string;
  description: string;
};

type FeatureRiskCardProps = {
  risk: BusinessRisk;
  className?: string;
};

export function FeatureRiskCard({ risk, className }: FeatureRiskCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-1 flex-col gap-4 p-0 shadow-[var(--shadow-xs)]",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className="h-4 w-4 shrink-0 rotate-90 bg-eilisys-orange-highlight"
          aria-hidden="true"
        />
        <div className="h-px flex-1 bg-[#E4E7EC] transition-colors duration-200 group-hover:bg-eilisys-primary-blue/30" />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-heading text-h4 text-eilisys-primary-text">
          {risk.title}
        </h3>
        <p className="font-body text-body-4 text-eilisys-subtext">
          {risk.description}
        </p>
      </div>
    </article>
  );
}
