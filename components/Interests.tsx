import { Profile } from "@/data/types";

export default function Interests({
  interests,
  currentProject,
}: Pick<Profile, "interests" | "currentProject">) {
  return (
    <section className="grid gap-6 border-b border-foreground/10 py-14">
      <span className="font-mono text-[11px] tracking-[0.28em] text-foreground/45">
        02&nbsp;&nbsp;관심사 / FOCUS
      </span>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-foreground/18 px-4 py-2 text-[13px] transition-colors hover:border-accent hover:text-accent"
          >
            {interest}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-[58px_1fr] items-baseline gap-4 border-t border-foreground/10 pt-5">
        <span className="font-mono text-[11px] text-foreground/45">NOW</span>
        <div className="grid gap-1.5">
          <p className="font-serif text-[17px] font-semibold">
            {currentProject.title}
          </p>
          <p className="text-[14px] leading-[1.8] text-foreground/62">
            {currentProject.description}
          </p>
        </div>
      </div>
    </section>
  );
}
