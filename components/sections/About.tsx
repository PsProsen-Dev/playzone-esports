import { CalendarDays, Crosshair, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

/* Real about copy from siteConfig.about — sign-off stripped out, then split
   into sentences and chunked into balanced paragraphs (robust to copy edits). */
const aboutBody = siteConfig.about.replace(/\|\| Jai Hind \|\|/g, "").trim();
const aboutSentences = aboutBody.match(/[^.!?]+[.!?]+/g) ?? [aboutBody];
const perParagraph = Math.ceil(aboutSentences.length / 3);
const aboutParagraphs = [0, 1, 2]
  .map((i) =>
    aboutSentences
      .slice(i * perParagraph, i * perParagraph + perParagraph)
      .join(" ")
      .trim()
  )
  .filter(Boolean);

const facts = [
  { icon: CalendarDays, label: "EST. 12 FEB 2020" },
  { icon: MapPin, label: "INDIA" },
  { icon: Crosshair, label: "BATTLE ROYALE / SHOOTER" },
];

const weeklyOps = [
  { day: "MON", event: "Free custom room" },
  { day: "FRI", event: "Free custom room" },
  { day: "SUN", event: "Paid T2 / T3 tier" },
];

export default function About() {
  return (
    <section id="about" className="bg-pz-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — copy */}
          <div>
            <SectionHeader
              eyebrow="WHO WE ARE"
              title="THE COMMUNITY BEHIND THE COMBAT"
            />
            <Reveal>
              {aboutParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-5 text-base leading-relaxed text-pz-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-display text-sm uppercase tracking-[0.25em] text-pz-amber">
                {"||"} Jai Hind {"||"}
              </p>
            </Reveal>

            {/* Fact chips */}
            <Reveal delay={120}>
              <ul aria-label="Community facts" className="mt-8 flex flex-wrap gap-3">
                {facts.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded border border-white/15 bg-pz-card px-4 py-2 text-xs font-bold uppercase tracking-widest text-white"
                  >
                    <Icon aria-hidden="true" className="h-4 w-4 text-pz-amber" />
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right — ops board panel */}
          <Reveal delay={200}>
            <div className="relative overflow-hidden rounded border border-white/10 bg-pz-card">
              <div aria-hidden="true" className="absolute inset-0 bg-tactical-grid opacity-60" />
              {/* Corner ticks */}
              <span aria-hidden="true" className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-pz-amber" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-pz-amber" />

              <div className="relative p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl uppercase tracking-wide text-white">
                    Weekly Ops
                  </h3>
                  <span className="inline-flex items-center gap-2 rounded bg-pz-amber/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pz-amber">
                    <span aria-hidden="true" className="h-2 w-2 animate-pulse rounded-full bg-pz-amber motion-reduce:animate-none" />
                    Active
                  </span>
                </div>
                <ul className="mt-6 space-y-4">
                  {weeklyOps.map(({ day, event }) => (
                    <li
                      key={day}
                      className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-b-0 last:pb-0"
                    >
                      <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full bg-pz-amber shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                      <span className="font-display text-sm uppercase tracking-[0.2em] text-pz-muted">
                        {day}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wider text-white">
                        {event}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs uppercase tracking-widest text-pz-muted">
                  Room IDs &amp; passwords drop on Discord first
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats strip — angled band */}
      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 md:mt-28 lg:px-8">
        <Reveal>
          <div
            className={cn(
              "relative overflow-hidden border-y border-pz-amber/30 bg-pz-black px-6 py-10 md:py-12"
            )}
            style={{
              clipPath:
                "polygon(0 18px, 100% 0, 100% calc(100% - 18px), 0 100%)",
            }}
          >
            <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="order-2 mt-3 text-xs font-bold uppercase tracking-[0.25em] text-pz-muted">
                    {stat.label}
                  </dt>
                  <dd className="order-1 font-display text-3xl uppercase text-white md:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
