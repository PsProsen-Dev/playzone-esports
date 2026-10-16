import Image from "next/image";
import { ChevronDown, Radio, Swords, Trophy } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const ticker = [
  { icon: Swords, label: "FREE CUSTOMS ×2 / WEEK" },
  { icon: Trophy, label: "PAID T2 / T3" },
  { icon: Radio, label: "LIVE ON YOUTUBE" },
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="PlayZone eSports hero"
      className="relative min-h-screen overflow-hidden bg-pz-black"
    >
      {/* Layered background */}
      <div aria-hidden="true" className="absolute inset-0 bg-tactical-grid" />
      <div aria-hidden="true" className="absolute inset-0 scanlines" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(255,184,0,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-pz-black"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Logo */}
        <Reveal>
          <Image
            src="/logo.png"
            alt="PlayZone eSports logo"
            width={96}
            height={96}
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            priority
          />
        </Reveal>

        {/* Eyebrow */}
        <Reveal delay={100}>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-pz-amber">
            A esports community — since 12 Feb 2020
          </p>
        </Reveal>

        {/* Headline */}
        <Reveal delay={200}>
          <h1 className="mt-6 font-display uppercase leading-[0.95] text-white text-[clamp(2.5rem,8vw,6rem)]">
            Drop in.
            <br />
            Squad up.
            <br />
            <span className="text-pz-amber">Win.</span>
          </h1>
        </Reveal>

        {/* Sub-copy */}
        <Reveal delay={300}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pz-muted sm:text-lg">
            Battle Royale &amp; shooter tournaments for India&apos;s grind —
            free customs twice a week, paid T2/T3 prize pools, and rooms
            streamed live on YouTube.
          </p>
        </Reveal>

        {/* Dual CTAs */}
        <Reveal delay={400}>
          <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <a
              href={siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto")}
            >
              Join our Discord
            </a>
            <a
              href="#tournaments"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
            >
              View tournaments
            </a>
          </div>
        </Reveal>

        {/* Mini-stat ticker */}
        <Reveal delay={500}>
          <ul
            aria-label="Community highlights"
            className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-3"
          >
            {ticker.map(({ icon: Icon, label }, i) => (
              <li key={label} className="flex items-center gap-4">
                {i > 0 && (
                  <span aria-hidden="true" className="font-bold text-pz-amber">
                    /
                  </span>
                )}
                <span className="inline-flex items-center gap-2 rounded border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90">
                  <Icon aria-hidden="true" className="h-4 w-4 text-pz-amber" />
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-6 z-10 flex justify-center">
        <ChevronDown className="h-6 w-6 animate-bounce text-pz-amber motion-reduce:animate-none" />
      </div>
    </section>
  );
}
