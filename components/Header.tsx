"use client";

import * as React from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Teams", href: "#teams" },
  { label: "Gallery", href: "#gallery" },
  { label: "Join", href: "#join" },
];

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-pz-amber focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "sticky top-0 z-50 bg-pz-black/80 backdrop-blur transition-colors",
          scrolled && "border-b border-white/10"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#main" className="flex min-h-[44px] items-center gap-3" aria-label="PlayZone eSports — home">
            <Image
              src="/logo.png"
              alt="PlayZone eSports logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-display text-xl uppercase tracking-wide text-white">
              PlayZone
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold uppercase tracking-widest text-pz-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black"
              >
                {label}
              </a>
            ))}
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener"
              className={cn(buttonVariants({ size: "sm" }), "min-h-[44px]")}
            >
              Join Discord
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-white md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <nav aria-label="Mobile" className="border-t border-white/10 bg-pz-black px-4 pb-6 pt-2 md:hidden">
            <ul className="flex flex-col">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center text-sm font-semibold uppercase tracking-widest text-pz-muted transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href={siteConfig.discordUrl}
                  target="_blank"
                  rel="noopener"
                  className={cn(buttonVariants({ size: "default" }), "min-h-[44px] w-full")}
                >
                  Join Discord
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
