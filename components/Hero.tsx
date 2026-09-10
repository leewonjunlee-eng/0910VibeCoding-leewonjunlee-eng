import { Profile } from "@/data/types";

export default function Hero({
  name,
  affiliation,
  tagline,
}: Pick<Profile, "name" | "affiliation" | "tagline">) {
  return (
    <header className="grid gap-4 border-b border-foreground/10 pb-11">
      <span className="font-mono text-[11px] tracking-[0.32em] text-accent">
        PROFILE
      </span>
      <h1 className="font-display text-[clamp(42px,7vw,68px)] leading-[1.05] tracking-tight text-foreground">
        {name}
      </h1>
      <p className="text-lg leading-relaxed text-accent sm:text-xl">
        {tagline}
      </p>
      <p className="text-sm text-foreground/60">{affiliation}</p>
    </header>
  );
}
