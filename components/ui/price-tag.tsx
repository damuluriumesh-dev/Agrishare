import { IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  amount: number;
  period?: "hour" | "day" | "acre";
  size?: "sm" | "md" | "lg";
  className?: string;
  subtext?: string;
}

export function PriceTag({
  amount,
  period = "day",
  size = "md",
  className,
  subtext,
}: PriceTagProps) {
  const sizeConfig = {
    sm: {
      symbol: "h-3.5 w-3.5",
      amount: "text-base font-bold",
      period: "text-xs",
    },
    md: {
      symbol: "h-4 w-4",
      amount: "text-xl font-extrabold",
      period: "text-xs",
    },
    lg: {
      symbol: "h-5 w-5",
      amount: "text-3xl font-black",
      period: "text-sm",
    },
  };

  const current = sizeConfig[size];

  const periodLabels = {
    hour: "hr",
    day: "day",
    acre: "acre",
  };

  return (
    <div className={cn("inline-flex flex-col", className)}>
      <div className="inline-flex items-baseline gap-0.5 text-stone-900 dark:text-stone-50">
        <span className="flex items-center text-[#166534] dark:text-emerald-400 font-bold">
          ₹
        </span>
        <span className={cn("tracking-tight font-heading", current.amount)}>
          {amount.toLocaleString("en-IN")}
        </span>
        <span className={cn("text-stone-500 dark:text-stone-400 font-normal ml-0.5", current.period)}>
          /{periodLabels[period]}
        </span>
      </div>
      {subtext && (
        <span className="text-[11px] text-stone-500 dark:text-stone-400">
          {subtext}
        </span>
      )}
    </div>
  );
}
