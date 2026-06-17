import Image from "next/image";
import {
  Clock3,
  FileSpreadsheet,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ASSETS } from "@/lib/constants/assets";
import { cn } from "@/lib/utils";

type ImpactCard = {
  title: string;
  description: string;
  variant: "dark" | "surface-a" | "surface-b";
  icon?: React.ComponentType<{ className?: string }>;
  iconColor?: string;
};

const impacts: ImpactCard[] = [
  {
    title: "Lower billing disputes",
    description:
      "Match attendance, role approvals and payout data more clearly to reduce billing confusion.",
    variant: "dark",
    icon: FileSpreadsheet,
    iconColor: "text-amber-400",
  },
  {
    title: "Stronger compliance control",
    description:
      "Keep records, alerts and statutory workflows better aligned with operational requirements.",
    variant: "surface-a",
  },
  {
    title: "Faster audit response",
    description:
      "Access records, reports and compliance data faster when reviews or inspections happen.",
    variant: "surface-b",
    icon: Clock3,
    iconColor: "text-emerald-500",
  },
  {
    title: "Better headcount control",
    description:
      "Track active workers more accurately and reduce the risk of unverified or duplicate entries.",
    variant: "surface-b",
  },
  {
    title: "Clear contractor visibility",
    description:
      "Improve control over contractor deployment, compliance, billing and daily workforce handling.",
    variant: "surface-a",
    icon: Users,
    iconColor: "text-rose-500",
  },
  {
    title: "Better site-level visibility",
    description:
      "Give HR, site and contractor teams clearer visibility into attendance, deployment and worker status.",
    variant: "surface-b",
    icon: SlidersHorizontal,
    iconColor: "text-orange-500",
  },
];

const variantStyles = {
  dark: "bg-eilisys-dark-bg text-eilisys-light-text",
  "surface-a": "bg-[#fafbfc] text-eilisys-primary-text",
  "surface-b": "bg-[#f5f8fb] text-eilisys-primary-text",
};

function ImpactCardItem({ card }: { card: ImpactCard }) {
  const Icon = card.icon;
  const isDark = card.variant === "dark";

  return (
    <article
      className={cn(
        "relative flex h-[300px] flex-col justify-between overflow-hidden rounded-lg p-8",
        variantStyles[card.variant],
      )}
    >
      {isDark ? (
        <>
          <Image
            src={ASSETS.operationalImpactCardBg}
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-eilisys-dark-bg" aria-hidden="true" />
        </>
      ) : null}

      {Icon ? (
        <div
          className={cn(
            "relative z-10 flex size-12 items-center justify-center rounded-full bg-white/90 shadow-[var(--shadow-xs)]",
            isDark && "bg-white/10",
          )}
        >
          <Icon className={cn("size-6", card.iconColor)} aria-hidden="true" />
        </div>
      ) : (
        <div className="relative z-10 size-12" aria-hidden="true" />
      )}

      <div className="relative z-10 flex flex-col gap-2.5">
        <h3
          className={cn(
            "font-heading text-h4",
            isDark ? "text-eilisys-light-text" : "text-eilisys-primary-text",
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "font-body text-body-4",
            isDark ? "text-eilisys-dark-subtext" : "text-eilisys-subtext",
          )}
        >
          {card.description}
        </p>
      </div>
    </article>
  );
}

export function OperationalImpactSection() {
  return (
    <section
      aria-labelledby="impact-heading"
      className="bg-eilisys-cream-bg py-32"
    >
      <div className="mx-auto flex max-w-[var(--content-inner)] flex-col gap-16 px-[var(--section-x)]">
        <SectionHeader
          badge="Operational Impact"
          badgeVariant="white"
          headingId="impact-heading"
          title={
            <>
              <span className="text-eilisys-primary-text">What </span>
              <span className="text-eilisys-blue-highlight">
                stronger contract workforce
              </span>
              <br />
              <span className="text-eilisys-blue-highlight">control improves</span>
            </>
          }
          description="When worker verification, billing checks, attendance visibility and compliance workflows are structured, teams can reduce operational risk and improve control across sites and contractors."
        />

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {impacts.slice(0, 3).map((card) => (
              <ImpactCardItem key={card.title} card={card} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {impacts.slice(3).map((card) => (
              <ImpactCardItem key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
