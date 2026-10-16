import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={cn("mb-12", centered && "text-center")}>
      <p className="text-pz-amber tracking-[0.3em] uppercase text-xs font-bold mb-4">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">{title}</h2>
      <div
        aria-hidden="true"
        className={cn(
          "h-1 w-16 bg-pz-amber mt-6 clip-slant-sm",
          centered && "mx-auto"
        )}
      />
      {lead && (
        <p className={cn("text-pz-muted text-lg mt-6 max-w-2xl leading-relaxed", centered && "mx-auto")}>
          {lead}
        </p>
      )}
    </Reveal>
  );
}
