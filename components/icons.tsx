import * as React from "react";
import { cn } from "@/lib/utils";

/* Brand icons (lucide-react 1.x removed brand glyphs) — inline SVGs sized like lucide icons. */

type IconProps = React.SVGProps<SVGSVGElement>;

export function YoutubeIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M23 12s0-3.85-.46-5.58a2.9 2.9 0 0 0-2.04-2.04C18.75 4 12 4 12 4s-6.75 0-8.5.38A2.9 2.9 0 0 0 1.46 6.42C1 8.15 1 12 1 12s0 3.85.46 5.58a2.9 2.9 0 0 0 2.04 2.04c1.75.38 8.5.38 8.5.38s6.75 0 8.5-.38a2.9 2.9 0 0 0 2.04-2.04C23 15.85 23 12 23 12Zm-9.75 3.5v-7L18.5 12l-5.25 3.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
