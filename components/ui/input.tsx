import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "w-full bg-pz-surface border border-white/15 px-4 py-3 text-base text-white placeholder:text-pz-muted/70",
        "focus:outline-none focus:border-pz-amber focus:ring-1 focus:ring-pz-amber",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-body font-bold uppercase tracking-widest text-pz-muted mb-2"
    >
      {children}
    </label>
  );
}

export { Input, FieldLabel };
