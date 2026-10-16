import { Crosshair, Map as MapIcon, Medal, Play, Trophy } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type Variant = GalleryItem["variant"];

const accents: Record<Variant, string> = {
  amber: "#FFB800",
  red: "#FF4D4D",
  blue: "#4DA3FF",
  green: "#3BD671",
  purple: "#A35BFF",
  steel: "#9AA8BC",
};

// 2 feature tiles span 2 cols (first two), the rest are standard tiles.
const featureIds = new Set([galleryItems[0].id, galleryItems[2].id]);

function VariantArt({ item }: { item: GalleryItem }) {
  const color = accents[item.variant];
  const iconCls = "size-14 md:size-16";
  const ring = { boxShadow: `0 0 48px ${color}55, 0 0 96px ${color}22` };

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* layered tint + glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${color}26, transparent 65%), radial-gradient(circle at 85% 90%, ${color}14, transparent 55%)`,
        }}
      />
      {/* tactical grid + scanlines */}
      <div className="absolute inset-0 bg-tactical-grid" />
      <div className="absolute inset-0 scanlines" />
      {/* dashed crosshair guides */}
      <div className="absolute inset-x-6 top-1/2 border-t border-dashed opacity-20" style={{ borderColor: color }} />
      <div className="absolute inset-y-6 left-1/2 border-l border-dashed opacity-20" style={{ borderColor: color }} />

      {item.variant === "amber" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
          <p className="font-display text-3xl md:text-4xl uppercase leading-none text-white/90">
            Winner
            <br />
            Winner
          </p>
          <div className="flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: `${color}66`, color }}>
            <Trophy className="size-5" />
            <span className="font-display text-sm uppercase tracking-widest">Chicken Dinner</span>
          </div>
          <div className="h-1 w-24" style={{ background: color }} />
        </div>
      )}

      {item.variant === "red" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <div className="flex size-24 items-center justify-center rounded-full border-2 md:size-28" style={{ borderColor: color, boxShadow: `0 0 40px ${color}44` }}>
            <Trophy className={iconCls} style={{ color }} />
          </div>
          <p className="font-display text-lg uppercase tracking-widest text-white/85 md:text-xl">Trophy Moment</p>
          <div className="flex gap-1.5">
            {["#FF4D4D", "#FFB800", "#FFFFFF"].map((c) => (
              <span key={c} className="h-1.5 w-10" style={{ background: c }} />
            ))}
          </div>
        </div>
      )}

      {item.variant === "blue" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <div className="flex size-24 items-center justify-center rounded-full border-2 md:size-28" style={{ borderColor: color, ...ring }}>
            <Play className="size-10 translate-x-1 md:size-12" style={{ color }} fill={color} />
          </div>
          <p className="font-display text-lg uppercase tracking-widest text-white/85 md:text-xl">Custom Room #8</p>
          <div className="flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full" style={{ background: color }} />
            <span className="font-display text-xs uppercase tracking-[0.3em]" style={{ color }}>48 Squads Queued</span>
          </div>
        </div>
      )}

      {item.variant === "green" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <div className="flex size-24 items-center justify-center border-2 md:size-28" style={{ borderColor: color, boxShadow: `0 0 40px ${color}44` }}>
            <Medal className={iconCls} style={{ color }} />
          </div>
          <p className="font-display text-lg uppercase tracking-widest text-white/85 md:text-xl">Champions</p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/50">Rising Stars S3</p>
        </div>
      )}

      {item.variant === "purple" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 text-center">
          <svg viewBox="0 0 120 120" className="size-24 md:size-28" style={{ filter: `drop-shadow(0 0 12px ${color}66)` }}>
            {[56, 40, 24].map((r) => (
              <circle key={r} cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="2" strokeDasharray={r === 24 ? "none" : "6 5"} opacity={r === 24 ? 0.9 : 0.45} />
            ))}
            <circle cx="60" cy="60" r="6" fill={color} />
          </svg>
          <p className="font-display text-lg uppercase tracking-widest text-white/85 md:text-xl">Squad Drop</p>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/50">Drop zone locked</p>
        </div>
      )}

      {item.variant === "steel" && (
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="w-full max-w-[240px]">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-xs uppercase tracking-[0.25em] text-white/70">Scoreboard</span>
              <Crosshair className="size-5" style={{ color }} />
            </div>
            <div className="space-y-1.5">
              {[["Team Havoc", "42"], ["Silent Strikers", "37"], ["Night Raiders", "31"], ["Rogue X", "24"]].map(([name, pts], i) => (
                <div key={name} className="flex items-center justify-between bg-white/5 px-3 py-1.5">
                  <span className="text-sm font-semibold text-white/80">{name}</span>
                  <span className="font-display text-sm" style={{ color: i === 0 ? "#FFB800" : color }}>{pts} PTS</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <MapIcon className="size-4" style={{ color }} />
              <span className="font-display text-xs uppercase tracking-[0.25em] text-white/50">Erangel · Grand Final</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-pz-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Gallery"
          title="Moments of Mayhem"
          lead="Final circles, trophy lifts, packed lobbies and caster desks — the battlefield in freeze-frames."
        />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {galleryItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <article
                role="img"
                aria-label={`${item.title}. ${item.caption}`}
                className={cn(
                  "group relative aspect-[4/3] overflow-hidden border border-white/10 bg-pz-card transition-colors duration-300",
                  "hover:border-pz-amber/60 hover:shadow-[0_0_32px_rgba(255,184,0,0.18)]",
                  featureIds.has(item.id) && "col-span-2"
                )}
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                  <VariantArt item={item} />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent px-4 pb-3 pt-10 transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="line-clamp-1 font-display text-sm uppercase tracking-wide text-white md:text-base">
                    {item.title}
                  </h3>
                  <Badge variant="outline" className="shrink-0 border-white/20">
                    {item.variant}
                  </Badge>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
