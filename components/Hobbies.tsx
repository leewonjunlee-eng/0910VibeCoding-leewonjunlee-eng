import { Profile } from "@/data/types";

export default function Hobbies({ hobbies }: Pick<Profile, "hobbies">) {
  return (
    <section className="grid gap-6 border-b border-foreground/10 py-14">
      <span className="font-mono text-[11px] tracking-[0.28em] text-foreground/45">
        03&nbsp;&nbsp;취미 / OFF-HOURS
      </span>
      <div className="flex flex-wrap gap-2">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="rounded-full border border-foreground/18 px-4 py-2 text-[13px] transition-colors hover:border-accent-gold hover:text-accent-gold"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
