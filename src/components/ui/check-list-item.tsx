import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type CheckListItemProps = {
  title: string;
  description: string;
  className?: string;
};

export function CheckListItem({
  title,
  description,
  className,
}: CheckListItemProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex shrink-0 items-start py-1">
        <span
          className="flex size-5 items-center justify-center rounded-full bg-[#14be72]"
          aria-hidden="true"
        >
          <Check className="size-3 text-white" strokeWidth={3} />
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold leading-[30px] tracking-[-0.02em] text-eilisys-primary-text">
          {title}
        </h3>
        <p className="font-body text-sm leading-5 text-eilisys-subtext">
          {description}
        </p>
      </div>
    </div>
  );
}
