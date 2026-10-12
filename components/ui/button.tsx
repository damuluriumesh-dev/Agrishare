import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-[#166534] text-white shadow-sm hover:bg-[#14532D] hover:shadow-md active:bg-[#052E16] dark:bg-emerald-600 dark:hover:bg-emerald-500",
        accent:
          "bg-[#F59E0B] text-stone-950 font-bold shadow-sm hover:bg-[#D97706] hover:shadow-md active:bg-[#B45309]",
        secondary:
          "bg-stone-100 text-stone-800 hover:bg-stone-200 border border-stone-200 dark:bg-stone-800 dark:text-stone-100 dark:border-stone-700 dark:hover:bg-stone-700",
        outline:
          "border-2 border-[#166534] text-[#166534] hover:bg-[#166534] hover:text-white dark:border-emerald-500 dark:text-emerald-400 dark:hover:bg-emerald-600 dark:hover:text-white",
        ghost:
          "text-stone-700 hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 active:bg-red-800",
        link: "text-[#166534] underline-offset-4 hover:underline dark:text-emerald-400 p-0 h-auto",
      },
      size: {
        default: "min-h-[48px] px-6 py-2.5",
        sm: "min-h-[40px] px-4 text-xs",
        lg: "min-h-[52px] px-8 text-base",
        xl: "min-h-[56px] px-10 text-lg",
        icon: "min-h-[48px] min-w-[48px] p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
