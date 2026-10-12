import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxStars?: number;
  reviewCount?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
}

export function RatingStars({
  rating,
  maxStars = 5,
  reviewCount,
  size = "md",
  showCount = true,
}: RatingStarsProps) {
  const starSizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base font-semibold",
  };

  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: maxStars }).map((_, index) => {
          const filled = index < Math.floor(rating);
          const half = !filled && index < rating;

          return (
            <Star
              key={index}
              className={cn(
                starSizes[size],
                filled
                  ? "fill-amber-400 text-amber-400"
                  : half
                  ? "fill-amber-200 text-amber-400"
                  : "text-stone-300 dark:text-stone-600"
              )}
            />
          );
        })}
      </div>
      <span className={cn("font-bold text-stone-900 dark:text-stone-100", textSizes[size])}>
        {rating.toFixed(1)}
      </span>
      {showCount && reviewCount !== undefined && (
        <span className={cn("text-stone-500 dark:text-stone-400", textSizes[size])}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
}
