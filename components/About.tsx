import { Profile } from "@/data/types";

export default function About({ about, goal }: Pick<Profile, "about" | "goal">) {
  return (
    <section className="grid gap-5 border-b border-foreground/10 py-14">
      <span className="font-mono text-[11px] tracking-[0.28em] text-foreground/45">
        01&nbsp;&nbsp;소개 / ABOUT
      </span>
      <div className="grid gap-4 text-[16px] leading-[1.95]">
        {about.map((paragraph, i) => (
          <p key={paragraph} className={i > 0 ? "text-foreground/70" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
      <blockquote className="mt-1 border-l-2 border-accent-gold py-0.5 pl-5 font-serif text-[16px] leading-[1.9]">
        {goal}
      </blockquote>
    </section>
  );
}
