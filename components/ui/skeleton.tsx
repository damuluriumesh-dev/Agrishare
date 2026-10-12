import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton-shimmer rounded-xl bg-stone-200 dark:bg-stone-800",
        className
      )}
      {...props}
    />
  );
}

export function EquipmentCardSkeleton() {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900 space-y-4">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="flex justify-between items-center pt-2 border-t border-stone-100 dark:border-stone-800">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-10 w-24 rounded-xl" />
      </div>
    </div>
  );
}
