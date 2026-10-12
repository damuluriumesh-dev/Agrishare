import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { CheckCircle2, ShieldCheck, Wrench, Sparkles } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-emerald-100 text-[#166534] dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
        amber:
          "bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
        stone:
          "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300 border border-stone-200 dark:border-stone-700",
        success:
          "bg-emerald-50 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300",
        warning:
          "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300",
        danger:
          "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300 border border-red-300",
        info:
          "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-300",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        md: "px-3 py-1 text-xs",
        lg: "px-3.5 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export function VerifiedBadge({ label = "Verified Owner" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-[#166534] border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800">
      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
      {label}
    </span>
  );
}

export function OperatorChip({ included = false }: { included: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium border",
        included
          ? "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800"
          : "bg-stone-50 text-stone-600 border-stone-200 dark:bg-stone-800/50 dark:text-stone-400 dark:border-stone-700"
      )}
    >
      <Wrench className="h-3 w-3" />
      {included ? "Operator Included" : "Self-Drive / Operator Optional"}
    </span>
  );
}

export function StatusPill({
  status,
}: {
  status: "active" | "completed" | "cancelled" | "pending";
}) {
  const configs = {
    active: {
      label: "Active Rental",
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
      dot: "bg-emerald-500",
    },
    completed: {
      label: "Completed",
      color: "bg-stone-100 text-stone-700 border-stone-200",
      dot: "bg-stone-400",
    },
    cancelled: {
      label: "Cancelled",
      color: "bg-red-50 text-red-800 border-red-200",
      dot: "bg-red-500",
    },
    pending: {
      label: "Pending Confirmation",
      color: "bg-amber-50 text-amber-900 border-amber-200",
      dot: "bg-amber-500",
    },
  };

  const current = configs[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold border",
        current.color
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", current.dot)} />
      {current.label}
    </span>
  );
}
