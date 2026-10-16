import { CalendarDays, Users, Trophy, Crown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import {
  upcomingTournaments,
  pastResults,
  type Tournament,
} from "@/data/tournaments";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function tierInfo(t: Tournament): { label: string; solid: boolean } {
  if (t.entryFee.toLowerCase().includes("free")) {
    return { label: "FREE CUSTOM", solid: false };
  }
  const label = /T3/i.test(t.name) ? "PAID T3" : "PAID T2";
  return { label, solid: true };
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  const tier = tierInfo(tournament);
  const fillPct = Math.min(
    100,
    Math.round((tournament.slotsFilled / tournament.slotsTotal) * 100)
  );
  return (
    <Card className="relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-pz-amber/40">
      {/* 4px amber top stripe */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-pz-amber transition-shadow duration-300 glow-amber"
      />
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Badge
            variant={tier.solid ? "default" : "outline"}
            className={cn(!tier.solid && "bg-pz-amber/10 border-pz-amber/30 text-pz-amber")}
          >
            {tier.label}
          </Badge>
          <span className="text-[11px] font-bold uppercase tracking-widest text-pz-muted">
            {tournament.game}
          </span>
        </div>

        <h3 className="font-display text-xl uppercase leading-tight mb-5">
          {tournament.name}
        </h3>

        <ul className="space-y-3 mb-4">
          <li className="flex items-center gap-3 text-sm">
            <CalendarDays className="size-4 shrink-0 text-pz-amber" aria-hidden="true" />
            <span className="text-white/90">
              {tournament.date} <span className="text-pz-muted">· {tournament.time}</span>
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <Users className="size-4 shrink-0 text-pz-amber" aria-hidden="true" />
            <span className="text-white/90">
              {tournament.slotsFilled}/{tournament.slotsTotal} slots filled
            </span>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <Trophy className="size-4 shrink-0 text-pz-amber" aria-hidden="true" />
            <span className="text-pz-amber font-bold">Prize pool: {tournament.prizePool}</span>
          </li>
        </ul>

        {/* slot progress */}
        <div className="mb-4">
          <div
            className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={fillPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Slots filled for ${tournament.name}`}
          >
            <div
              className="h-full bg-pz-amber rounded-full"
              style={{ width: `${fillPct}%` }}
            />
          </div>
        </div>

        <p className="text-sm font-bold uppercase tracking-widest text-white/90 mb-2">
          Entry: <span className="text-pz-muted">{tournament.entryFee}</span>
        </p>

        <p className="text-pz-muted text-sm leading-relaxed mb-6">
          {tournament.description}
        </p>

        <div className="mt-auto pt-2">
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ variant: "outline" }), "w-full")}
          >
            REGISTER ON DISCORD
          </a>
        </div>
      </div>
    </Card>
  );
}

export default function Tournaments() {
  return (
    <section id="tournaments" className="bg-pz-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tournaments"
          title="UPCOMING BATTLES"
          lead="Free customs twice a week and paid T2/T3 lobbies with real prize pools. Every registration runs through Discord — that is where room IDs and passwords drop."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upcomingTournaments.map((t, i) => (
            <Reveal key={t.id} delay={i * 120}>
              <TournamentCard tournament={t} />
            </Reveal>
          ))}
        </div>

        {/* HALL OF FAME */}
        <div className="mt-20 md:mt-24">
          <SectionHeader
            eyebrow="Past Winners"
            title="HALL OF FAME"
            lead="The squads that carved their names into PlayZone history. Every result, every prize — earned on our battlegrounds."
          />

          <Reveal>
            <div className="bg-pz-surface border border-white/10 p-6 md:p-8">
              <ul className="divide-y divide-white/10">
                {pastResults.map((r) => (
                  <li
                    key={r.id}
                    className="py-5 flex flex-col sm:flex-row sm:items-center gap-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <span
                        aria-hidden="true"
                        className="size-11 shrink-0 rounded-full bg-pz-amber/10 border border-pz-amber/30 flex items-center justify-center"
                      >
                        <Crown className="size-5 text-pz-amber" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-base md:text-lg uppercase text-pz-amber truncate">
                          {r.winner}
                        </p>
                        <p className="text-sm text-pz-muted">
                          {r.tournamentName} · <span className="whitespace-nowrap">{r.date}</span>
                        </p>
                        <p className="text-xs text-pz-muted mt-1 sm:hidden">
                          Runner-up: {r.runnerUp} · Prize: {r.prizePool}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-8 text-sm shrink-0">
                      <span className="text-pz-muted">
                        Runner-up: <span className="text-white/80">{r.runnerUp}</span>
                      </span>
                      <span className="text-pz-amber font-bold whitespace-nowrap">
                        {r.prizePool}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
