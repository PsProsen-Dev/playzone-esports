import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-body font-bold uppercase tracking-widest clip-slant-sm",
  {
    variants: {
      variant: {
        default: "bg-pz-amber text-black",
        secondary: "bg-white/10 text-white",
        outline: "border border-white/25 text-white/80",
        live: "bg-red-600 text-white",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
