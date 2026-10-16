import Image from "next/image";
import { ArrowUp, Mail, MessagesSquare } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Teams", href: "#teams" },
  { label: "Gallery", href: "#gallery" },
  { label: "Join", href: "#join" },
];

const communityLinks = [
  {
    label: "Discord",
    href: siteConfig.discordUrl,
    Icon: MessagesSquare,
    primary: true,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@playzoneesports",
    Icon: YoutubeIcon,
    primary: false,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ig_playzone_esports",
    Icon: InstagramIcon,
    primary: false,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-pz-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="PlayZone eSports logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="font-display text-lg uppercase tracking-wide text-white">
                PlayZone eSports
              </span>
            </div>
            <p className="mt-4 text-pz-muted">{siteConfig.tagline}</p>
            <p className="mt-4 font-display text-sm uppercase tracking-widest text-pz-amber">
              || Jai Hind ||
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="font-display text-sm uppercase tracking-[0.25em] text-white">
              Navigate
            </h3>
            <ul className="mt-5 space-y-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="inline-flex min-h-[44px] items-center text-pz-muted transition-colors hover:text-pz-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Community */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.25em] text-white">
              Community
            </h3>
            <ul className="mt-5 space-y-1">
              {communityLinks.map(({ label, href, Icon, primary }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className={
                      "inline-flex min-h-[44px] items-center gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black " +
                      (primary
                        ? "font-bold text-pz-amber hover:text-white"
                        : "text-pz-muted hover:text-pz-amber")
                    }
                  >
                    <Icon className="size-5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm uppercase tracking-[0.25em] text-white">
              Contact
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-flex min-h-[44px] items-center gap-3 text-pz-muted transition-colors hover:text-pz-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black"
            >
              <Mail className="size-5" />
              {siteConfig.email}
            </a>
            <p className="mt-3 text-sm text-pz-muted">
              Based in India · Active since 12 Feb 2020
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-pz-muted">
            © 2026 PlayZone eSports · A esports community
          </p>
          <a
            href="#main"
            aria-label="Back to top"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-white/15 text-pz-muted transition-colors hover:border-pz-amber hover:text-pz-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black"
          >
            <ArrowUp className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
