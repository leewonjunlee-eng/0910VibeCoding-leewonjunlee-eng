import { Profile } from "@/data/types";

export default function About({ about, goal }: Pick<Profile, "about" | "goal">) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        소개
      </h2>
      <div className="flex flex-col gap-3 text-zinc-800 dark:text-zinc-200">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="text-zinc-800 dark:text-zinc-200">{goal}</p>
    </section>
  );
}
