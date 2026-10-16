// NOTE: teams and players below are SAMPLE data for layout/showcase —
// roster cards, IGNs and achievements are placeholders until real community squads are wired in.

import { Crosshair } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { teams, type Team, type Player } from "@/data/teams";
import { cn } from "@/lib/utils";

function shortRole(role: string): string {
  const r = role.toUpperCase();
  if (r.includes("IGL")) return "IGL";
  if (r.includes("ASSAULT")) return "ASSAULTER";
  if (r.includes("SNIP")) return "SNIPER";
  return "SUPPORT";
}

function ignInitial(ign: string): string {
  const part = ign.includes("丨") ? ign.split("丨")[1] : ign;
  return part.charAt(0).toUpperCase();
}

function PlayerRow({ player }: { player: Player }) {
  return (
    <li className="group flex items-center gap-4">
      {/* CSS avatar: angled square, grid texture, IGN initial, amber corner tick */}
      <span
        aria-hidden="true"
        className="relative size-11 shrink-0 clip-slant-sm bg-tactical-grid bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-pz-amber/10 group-hover:border-pz-amber/40"
      >
        <span className="font-display text-lg text-white/90 transition-colors duration-300 group-hover:text-pz-amber">
          {ignInitial(player.ign)}
        </span>
        <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-pz-amber" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-bold text-sm text-white truncate transition-colors duration-300 group-hover:text-pz-amber">
          {player.ign}
        </p>
        <p className="text-xs text-pz-muted truncate">
          {player.name} · {player.role}
        </p>
      </div>
      <Badge variant="secondary" className="shrink-0">
        {shortRole(player.role)}
      </Badge>
    </li>
  );
}

function TeamCard({ team }: { team: Team }) {
  return (
    <Card className="p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-pz-amber/40">
      <div className="flex items-start justify-between gap-3 mb-5">
        <h3 className="font-display text-xl uppercase leading-tight">{team.name}</h3>
        <Badge variant="outline" className="shrink-0 text-pz-amber border-pz-amber/40">
          {team.tag}
        </Badge>
      </div>

      <ul className="space-y-3 mb-5">
        {team.players.map((p) => (
          <PlayerRow key={`${team.id}-${p.ign}`} player={p} />
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-white/10">
        <ul className="space-y-2">
          {team.achievements.slice(0, 2).map((a) => (
            <li key={a} className="flex items-start gap-2 text-xs text-pz-muted">
              <Crosshair className="size-3.5 shrink-0 text-pz-amber mt-0.5" aria-hidden="true" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default function Teams() {
  return (
    <section id="teams" className="bg-pz-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Community Rosters"
          title="SQUADS TO WATCH"
          lead="The squads grinding our lobbies week after week — the names you will see in the winner circle. Keep an eye on them in the next custom."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teams.map((team, i) => (
            <Reveal key={team.id} delay={(i % 4) * 120}>
              <TeamCard team={team} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
