"use client";

import { Mail, MessagesSquare, Send } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Button, buttonVariants } from "../ui/button";
import { Input, FieldLabel } from "../ui/input";

/*
 * The WhatsApp form NEVER points at the placeholder number.
 * Per CONTENT-GUIDE.md: until siteConfig.whatsappNumber holds a real
 * digits-only number, the form stays hidden and visitors use Discord.
 */
function isWhatsappLive(number: string): boolean {
  return /^[0-9]{10,15}$/.test(number) && !/X/.test(number);
}

const whatsappLive = isWhatsappLive(siteConfig.whatsappNumber);

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const inGameId = String(data.get("in-game-id") ?? "").trim();
  const phone = String(data.get("phone") ?? "").trim();

  const message = [
    "Hello PlayZone eSports! I want to join the squad.",
    `Name: ${name}`,
    `In-Game ID: ${inGameId}`,
    `Phone: ${phone}`,
  ].join("\n");

  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

const socialIconLinks = [
  {
    label: "PlayZone eSports on YouTube",
    href: "https://www.youtube.com/@playzoneesports",
    Icon: YoutubeIcon,
  },
  {
    label: "PlayZone eSports on Instagram",
    href: "https://instagram.com/ig_playzone_esports",
    Icon: InstagramIcon,
  },
  {
    label: "Email PlayZone eSports",
    href: "mailto:contact@playzoneesports.com",
    Icon: Mail,
  },
];

export default function JoinUs() {
  return (
    <section id="join" className="bg-pz-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Join Us"
          title="Enlist Now"
          lead="Two ways in — Discord is where everything happens first; WhatsApp is the quick alternative."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT — Discord primary panel */}
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden border border-pz-amber/40 bg-pz-card p-8 md:p-10 glow-amber">
              <div aria-hidden="true" className="scanlines absolute inset-0" />
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-pz-amber" />
              <div className="relative">
                <div className="mb-6 inline-flex size-14 items-center justify-center bg-pz-amber/10 clip-slant-sm">
                  <MessagesSquare className="size-7 text-pz-amber" />
                </div>
                <h3 className="font-display text-3xl uppercase leading-tight text-white md:text-4xl">
                  Your squad is waiting
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-pz-muted">
                  Tournament announcements, custom-room IDs &amp; passwords, results —
                  everything drops on Discord first. Be there when the lobby fills.
                </p>
                <div className="mt-8">
                  <a
                    href={siteConfig.discordUrl}
                    target="_blank"
                    rel="noopener"
                    className={buttonVariants({ size: "lg" }) + " min-h-[44px] w-full sm:w-auto"}
                  >
                    <MessagesSquare className="size-5" />
                    Join our Discord
                  </a>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  {socialIconLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener"}
                      aria-label={label}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-white/15 text-pz-muted transition-colors hover:border-pz-amber hover:text-pz-amber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black"
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — WhatsApp join form */}
          <Reveal delay={120} className="h-full">
            <div className="flex h-full flex-col border border-white/10 bg-pz-card p-8 md:p-10">
              <h3 className="font-display text-2xl uppercase text-white">
                Or drop your details
              </h3>
              <p className="mt-2 text-pz-muted">
                Fill this in and we&rsquo;ll reach out with squad invites.
              </p>

              {whatsappLive ? (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-5">
                  <div>
                    <FieldLabel htmlFor="join-name">Name</FieldLabel>
                    <Input
                      id="join-name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="join-ingame">In-Game ID</FieldLabel>
                    <Input
                      id="join-ingame"
                      name="in-game-id"
                      type="text"
                      placeholder="Your BGMI / game ID"
                      autoComplete="off"
                      required
                      className="text-base"
                    />
                  </div>
                  <div>
                    <FieldLabel htmlFor="join-phone">Phone</FieldLabel>
                    <Input
                      id="join-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="Your WhatsApp number"
                      autoComplete="tel"
                      required
                      className="text-base"
                    />
                  </div>
                  <div className="mt-auto pt-4">
                    <Button type="submit" variant="outline" size="lg" className="w-full">
                      <Send className="size-5" />
                      Send via WhatsApp
                    </Button>
                    <p className="mt-4 text-center text-sm text-pz-muted">
                      No spam, no calls — just squad invites.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="mt-6 flex flex-1 flex-col items-start justify-center border border-dashed border-white/20 bg-pz-surface p-6">
                  <p className="font-display text-lg uppercase text-white">
                    Registration desk opens soon
                  </p>
                  <p className="mt-3 leading-relaxed text-pz-muted">
                    Our WhatsApp desk is being set up. Meanwhile, the fastest way in is
                    Discord — tournament sign-ups happen there every week.
                  </p>
                  <a
                    href={siteConfig.discordUrl}
                    target="_blank"
                    rel="noopener"
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center border border-pz-amber/60 px-6 py-3 font-body text-sm font-bold uppercase tracking-wider text-pz-amber transition-colors hover:bg-pz-amber/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pz-amber focus-visible:ring-offset-2 focus-visible:ring-offset-pz-black clip-slant-sm"
                  >
                    Go to Discord
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
