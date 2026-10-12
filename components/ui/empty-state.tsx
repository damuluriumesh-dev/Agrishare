import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SearchX, Tractor, RotateCcw } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onReset?: () => void;
  icon?: "search" | "equipment";
}

export function EmptyState({
  title = "No equipment found nearby",
  description = "Try widening your search radius, selecting a different equipment category, or checking adjacent villages.",
  actionLabel = "Clear all filters",
  actionHref,
  onReset,
  icon = "search",
}: EmptyStateProps) {
  const Icon = icon === "search" ? SearchX : Tractor;

  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-dashed border-stone-300 dark:border-stone-700 bg-stone-50/50 dark:bg-stone-900/50 max-w-lg mx-auto">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-[#166534] dark:text-emerald-400 mb-4 shadow-sm">
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 font-heading mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm mb-6">
        {description}
      </p>
      {actionHref ? (
        <Link href={actionHref}>
          <Button variant="default">
            <RotateCcw className="h-4 w-4" />
            {actionLabel}
          </Button>
        </Link>
      ) : onReset ? (
        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
